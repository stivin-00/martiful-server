"use strict";
// controllers/adminController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardInfo30Days = exports.getDashboardInfo = exports.rejectTransaction = exports.approveWithdrawTransaction = exports.approveDepositTransaction = exports.getAllTransactions = exports.suspendUser = exports.getUserById = exports.getUsers = exports.verifyAdminLogin = exports.requestAdminLogin = exports.createAdmin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = require("crypto");
const admin_1 = __importDefault(require("../models/admin"));
const tokenUtils_1 = require("../utils/tokenUtils");
const email_1 = require("../utils/email/email");
const user_1 = __importDefault(require("../models/user"));
const transaction_1 = __importDefault(require("../models/transaction"));
const wallet_1 = __importDefault(require("../models/wallet"));
const approved_email_1 = require("../utils/email/approved-email");
const declined_email_1 = require("../utils/email/declined-email");
const notification_1 = require("../utils/notification");
// create admin
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { username, email, password, role } = req.body;
        // Check if the user creating the admin is a superadmin
        // if (req.admin?.role !== "superadmin") {
        //   return res.status(403).json({ message: "Permission denied" });
        // }
        // check if email already exists
        const emailExists = yield admin_1.default.exists({ email });
        if (emailExists) {
            return res.status(400).json({ message: "Email already exists" });
        }
        // check if username already exists
        const usernameExists = yield admin_1.default.exists({ username });
        if (usernameExists) {
            return res.status(400).json({ message: "Username already exists" });
        }
        if (email) {
            const newAdmin = new admin_1.default({
                username,
                email,
                role,
                password,
            });
            yield newAdmin.save();
            res.status(201).json({ message: "Admin created successfully" });
        }
        else {
            // Handle the case where password is undefined
            res.status(400).json({ message: "email is required" });
        }
    }
    catch (error) {
        console.error("Error creating admin:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.createAdmin = createAdmin;
// request admin login to get otp
const requestAdminLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Please provide both email and password" });
        }
        // Find the admin by email
        const admin = yield admin_1.default.findOne({ email });
        if (!admin) {
            console.log("Admin not found");
            return res.status(401).json({ message: "Admin not found" });
        }
        // Check if the password is correct
        const isPasswordValid = yield bcrypt_1.default.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        // Generate a verification code
        const generateVerificationCode = () => {
            const codeLength = 6;
            const buffer = (0, crypto_1.randomBytes)(codeLength);
            const verificationCode = buffer.toString("hex").slice(0, codeLength);
            return verificationCode;
        };
        // save the verification code
        admin.verificationToken = generateVerificationCode();
        yield admin.save();
        // Send the verification code to the admin's email
        sendVerificationEmail(admin);
        res.status(200).json({ message: "Verification code sent successfully" });
    }
    catch (error) {
        console.error("Error requesting admin login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.requestAdminLogin = requestAdminLogin;
// verify admin login
const verifyAdminLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, verificationToken } = req.body;
        const admin = yield admin_1.default.findOne({ email, verificationToken });
        if (!admin) {
            return res.status(401).json({ message: "Invalid verification code" });
        }
        // clear the verification token
        admin.verificationToken = "";
        yield admin.save();
        // Generate a JWT token for the admin
        const token = (0, tokenUtils_1.generateToken)({ email: admin.email, role: admin.role });
        res
            .status(200)
            .json({ admin, token, message: "Admin logged in successfully" });
    }
    catch (error) {
        console.error("Error verifying admin login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.verifyAdminLogin = verifyAdminLogin;
// get all users
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find().select("-password");
        res.status(200).json({ users, message: "Users fetched successfully" });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getUsers = getUsers;
// get user by id and their transtion
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const user = yield user_1.default.findById(userId).select("-password");
        const transactions = yield transaction_1.default.find({ user: userId }).sort({
            createdAt: -1,
        });
        const data = {
            _id: user === null || user === void 0 ? void 0 : user._id,
            avatar: user === null || user === void 0 ? void 0 : user.avatar,
            userName: user === null || user === void 0 ? void 0 : user.userName,
            firstName: user === null || user === void 0 ? void 0 : user.firstName,
            lastName: user === null || user === void 0 ? void 0 : user.lastName,
            email: user === null || user === void 0 ? void 0 : user.email,
            phoneNumber: user === null || user === void 0 ? void 0 : user.phoneNumber,
            accountDetails: user === null || user === void 0 ? void 0 : user.accountDetails,
            isVerified: user === null || user === void 0 ? void 0 : user.isVerified,
            isSuspended: user === null || user === void 0 ? void 0 : user.isSuspended,
            createdAt: user === null || user === void 0 ? void 0 : user.createdAt,
            transactions,
        };
        res.status(200).json({ user: data, message: "User fetched successfully" });
    }
    catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getUserById = getUserById;
// change user suspend status
const suspendUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const user = yield user_1.default.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.isSuspended = !user.isSuspended;
        yield user.save();
        // Send a push notification to the user
        const title = `Your account has been ${user.isSuspended ? "suspended" : "unsuspended"}`;
        const body = `Dear ${user.lastName} ${user.firstName}, ${user.isSuspended
            ? "your account has been suspended by the admin, please contact our support team for further details"
            : "your account has been unsuspended by the admin, please proceed with your transactions "} `;
        yield (0, notification_1.sendPushNotification)(user.fcmToken, title, body);
        res.status(200).json({
            user,
            message: `User ${user.isSuspended ? "suspended" : "unsuspended"}`,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.suspendUser = suspendUser;
// get all transaction
const getAllTransactions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactions = yield transaction_1.default.find()
            .sort({ createdAt: -1 }) // Sort by createdAt in descending order (-1)
            .populate({
            path: "user",
            model: "User",
            select: "firstName lastName userName email phoneNumber",
        });
        res.status(200).json({
            transactions,
            message: "Transactions fetched successfully",
        });
    }
    catch (error) {
        console.error("Error fetching transactions:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getAllTransactions = getAllTransactions;
// approve deposite transaction
const approveDepositTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { transactionId } = req.params;
    const newInfo = req.body;
    try {
        // Find the transaction
        const transaction = yield transaction_1.default.findById(transactionId);
        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }
        // Find and update user wallet
        const wallet = yield wallet_1.default.findByIdAndUpdate(transaction.wallet, { $inc: { balance: transaction.amount } }, { new: true });
        // Check if user has enough balance after update
        if (!wallet || wallet.balance < 0) {
            return res.status(400).json({ message: "Insufficient balance" });
        }
        // Update the transaction fields in the database
        yield transaction_1.default.updateOne({ _id: transaction._id }, { $set: newInfo });
        // Send approval email
        const user = yield user_1.default.findById(transaction.user);
        const data = {
            name: (user === null || user === void 0 ? void 0 : user.firstName) + " " + (user === null || user === void 0 ? void 0 : user.lastName),
            email: user === null || user === void 0 ? void 0 : user.email,
            amount: transaction.amount,
            amountInUSD: transaction.amountInUSD,
            coin: transaction.coin,
            coinQty: transaction.coinQty,
            rate: transaction.rate,
            status: transaction.status,
            wallet: transaction.wallet,
            message: transaction.message,
            date: transaction.updatedAt,
        };
        yield sendDepositApprovalEmail(data);
        // send push notification
        if (user === null || user === void 0 ? void 0 : user.fcmToken) {
            yield (0, notification_1.sendPushNotification)(user === null || user === void 0 ? void 0 : user.fcmToken, "Deposit Successful", `Dear ${user.lastName} ${user.firstName}, your transaction of ${transaction.coinQty}${transaction.coin} for ₦${transaction.amount} has been approved`);
        }
        // Fetch all transactions after approval
        const transactions = yield transaction_1.default.find()
            .sort({ createdAt: -1 })
            .populate({
            path: "user",
            model: "User",
            select: "firstName lastName userName email phoneNumber",
        });
        // Send the response
        res.status(200).json({
            transactions,
            wallet,
            message: "Transaction approved successfully",
        });
    }
    catch (error) {
        console.error("Error approving transaction:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.approveDepositTransaction = approveDepositTransaction;
// approve withdrawal transaction
const approveWithdrawTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { transactionId } = req.params;
    const newInfo = req.body;
    try {
        // Find the transaction
        const transaction = yield transaction_1.default.findById(transactionId);
        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }
        // find and update user wallet
        const wallet = yield wallet_1.default.findById(transaction.wallet);
        // check if user has wallet
        if (!wallet) {
            return res.status(404).json({ message: "Wallet not found" });
        }
        // check if user has enough balance
        if (wallet.balance > transaction.amount) {
            wallet.balance -= transaction.amount;
            yield wallet.save();
        }
        else {
            return res.status(400).json({ message: "Insufficient balance" });
        }
        // Update the transaction fields in the database
        yield transaction_1.default.findByIdAndUpdate(transactionId, { $set: newInfo });
        // sendApprovalEmail(transaction, user);
        const user = yield user_1.default.findById(transaction.user);
        const data = {
            name: (user === null || user === void 0 ? void 0 : user.firstName) + " " + (user === null || user === void 0 ? void 0 : user.lastName),
            email: user === null || user === void 0 ? void 0 : user.email,
            amount: transaction.amount,
            amountInUSD: transaction.amountInUSD,
            bankName: transaction.bankName,
            accountNumber: transaction.accountNumber,
            accountName: transaction.accountName,
            wallet: transaction.wallet,
            status: transaction.status,
            message: transaction.message,
            date: transaction.updatedAt,
        };
        yield sendWithdrawApprovalEmail(data);
        // send push notification
        if (user === null || user === void 0 ? void 0 : user.fcmToken) {
            yield (0, notification_1.sendPushNotification)(user === null || user === void 0 ? void 0 : user.fcmToken, "Withdrawal Successful", `Dear ${user.lastName} ${user.firstName}, your withdrawal of ₦${transaction.amount} has been approved and money sent to ${transaction.accountName} ${transaction.bankName}`);
        }
        const transactions = yield transaction_1.default.find()
            .sort({ createdAt: -1 }) // Sort by createdAt in descending order (-1)
            .populate({
            path: "user",
            model: "User",
            select: "firstName lastName userName email phoneNumber",
        });
        res.status(200).json({
            transactions,
            wallet,
            message: "Transaction approved successfully",
        });
    }
    catch (error) {
        console.error("Error approving transaction:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.approveWithdrawTransaction = approveWithdrawTransaction;
// reject(decline) transactiom
const rejectTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { transactionId } = req.params;
    const newInfo = req.body;
    try {
        // Find the transaction and check its status
        const transaction = yield transaction_1.default.findById(transactionId);
        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }
        if (transaction.status === "rejected") {
            return res.status(400).json({ message: "Transaction already declined" });
        }
        if (transaction.status === "approved") {
            return res.status(400).json({
                message: "Transaction already approved. Please try again later.",
            });
        }
        // Update the transaction fields based on req.body and set the status to 'rejected'
        const updatedTransaction = yield transaction_1.default.findByIdAndUpdate(transactionId, { $set: Object.assign(Object.assign({}, newInfo), { status: "rejected" }) }, { new: true } // Return the updated document
        );
        // Send declined email based on the transaction type
        if (updatedTransaction.type === "deposit") {
            const user = yield user_1.default.findById(updatedTransaction.user);
            const data = {
                name: (user === null || user === void 0 ? void 0 : user.firstName) + " " + (user === null || user === void 0 ? void 0 : user.lastName),
                email: user === null || user === void 0 ? void 0 : user.email,
                amount: updatedTransaction.amount,
                amountInUSD: updatedTransaction.amountInUSD,
                coin: updatedTransaction.coin,
                coinQty: updatedTransaction.coinQty,
                rate: updatedTransaction.rate,
                status: updatedTransaction.status,
                message: updatedTransaction.message,
                date: updatedTransaction.updatedAt,
            };
            // Send push notification(deposit declined)
            if (user === null || user === void 0 ? void 0 : user.fcmToken) {
                yield (0, notification_1.sendPushNotification)(user === null || user === void 0 ? void 0 : user.fcmToken, "Deposit Declined", `Dear ${user.lastName} ${user.firstName}, your deposit of ${updatedTransaction.coinQty} ${updatedTransaction.coin} at ₦${updatedTransaction.amount} has been declined`);
            }
            // Send declined deposit email
            yield sendDeclinedDepositEmail(data);
        }
        else if (updatedTransaction.type === "withdrawal") {
            const user = yield user_1.default.findById(updatedTransaction.user);
            const data = {
                name: (user === null || user === void 0 ? void 0 : user.firstName) + " " + (user === null || user === void 0 ? void 0 : user.lastName),
                email: user === null || user === void 0 ? void 0 : user.email,
                amount: updatedTransaction.amount,
                amountInUSD: updatedTransaction.amountInUSD,
                bankName: updatedTransaction.bankName,
                accountNumber: updatedTransaction.accountNumber,
                accountName: updatedTransaction.accountName,
                wallet: updatedTransaction.wallet,
                status: updatedTransaction.status,
                message: updatedTransaction.message,
                date: updatedTransaction.updatedAt,
            };
            // Send push notification(withdrawal declined)
            if (user === null || user === void 0 ? void 0 : user.fcmToken) {
                yield (0, notification_1.sendPushNotification)(user === null || user === void 0 ? void 0 : user.fcmToken, "Withdrawal Declined", `Dear ${user.lastName} ${user.firstName}, your withdrawal of ₦${updatedTransaction.amount} has been declined`);
            }
            // Send declined withdrawal email
            yield sendDeclinedWithdrawalEmail(data);
        }
        // Fetch updated transactions
        const transactions = yield transaction_1.default.find()
            .sort({ createdAt: -1 })
            .populate({
            path: "user",
            model: "User",
            select: "firstName lastName userName email phoneNumber",
        });
        res.status(200).json({
            transactions,
            message: "Transaction rejected successfully",
        });
    }
    catch (error) {
        console.error("Error rejecting transaction:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.rejectTransaction = rejectTransaction;
// get dasboard info
const getDashboardInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalUsers = yield user_1.default.countDocuments();
        const suspendedUsers = yield user_1.default.countDocuments({ isSuspended: true });
        const nonSuspendedUsers = yield user_1.default.countDocuments({ isSuspended: false });
        const verifiedUsers = yield user_1.default.countDocuments({ isVerified: true });
        const totalTransactions = yield transaction_1.default.countDocuments();
        const depositTransactions = yield transaction_1.default.countDocuments({
            type: "deposit",
        });
        const successfulDepositTransactions = yield transaction_1.default.countDocuments({
            type: "deposit",
            status: "approved",
        });
        const withdrawalTransactions = yield transaction_1.default.countDocuments({
            type: "withdrawal",
        });
        const successfulWithdrawalTransactions = yield transaction_1.default.countDocuments({
            type: "withdrawal",
            status: "approved",
        });
        res.status(200).json({
            totalUsers,
            suspendedUsers,
            nonSuspendedUsers,
            verifiedUsers,
            totalTransactions,
            depositTransactions,
            successfulDepositTransactions,
            withdrawalTransactions,
            successfulWithdrawalTransactions,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getDashboardInfo = getDashboardInfo;
// get dasboard info 30 days range
const getDashboardInfo30Days = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
        const totalUsers30Days = yield user_1.default.countDocuments({
            createdAt: {
                $gte: thirtyDaysAgo,
            },
        });
        const totalTransactions30Days = yield transaction_1.default.countDocuments({
            createdAt: {
                $gte: thirtyDaysAgo,
            },
        });
        const depositTransactions30Days = yield transaction_1.default.countDocuments({
            type: "deposit",
            createdAt: {
                $gte: thirtyDaysAgo,
            },
        });
        const withdrawalTransactions30Days = yield transaction_1.default.countDocuments({
            type: "withdrawal",
            createdAt: {
                $gte: thirtyDaysAgo,
            },
        });
        res.status(200).json({
            totalUsers30Days,
            totalTransactions30Days,
            depositTransactions30Days,
            withdrawalTransactions30Days,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getDashboardInfo30Days = getDashboardInfo30Days;
// routes ends here //
// emails starts herer //
function sendVerificationEmail(admin) {
    return __awaiter(this, void 0, void 0, function* () {
        let mailDetails = {
            from: {
                name: "Martiful Admin",
                address: "NonReply@Martiful.com",
            },
            to: admin.email,
            subject: "OTP for log in",
            html: `
      <h5>Hi Admin</h5>
      <p>Please use the password below to login</p>
<P>${admin.verificationToken}</P>
      `,
        };
        try {
            yield email_1.mailTransporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                }
            });
        }
        catch (error) {
            console.error("Error sending verification email:", error);
        }
    });
}
function sendDepositApprovalEmail(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let mailDetails = {
            from: {
                name: "Martiful",
                address: "NonReply@Martiful.com",
            },
            to: data.email,
            subject: "Transaction Approval",
            html: (0, approved_email_1.approvedDepositEmail)(data),
        };
        try {
            yield email_1.mailTransporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                }
            });
        }
        catch (error) {
            console.error("Error sending approval email:", error);
        }
    });
}
function sendWithdrawApprovalEmail(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let mailDetails = {
            from: {
                name: "Martiful",
                address: "NonReply@Martiful.com",
            },
            to: data.email,
            subject: "Transaction Approval",
            html: (0, approved_email_1.approvedWithdrawalEmail)(data),
        };
        try {
            yield email_1.mailTransporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                }
            });
        }
        catch (error) {
            console.error("Error sending approval email:", error);
        }
    });
}
function sendDeclinedDepositEmail(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let mailDetails = {
            from: {
                name: "Martiful",
                address: "NonReply@Martiful.com",
            },
            to: data.email,
            subject: "Transaction Declined",
            html: (0, declined_email_1.declinedDepositEmail)(data),
        };
        try {
            yield email_1.mailTransporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                }
            });
        }
        catch (error) {
            console.error("Error sending approval email:", error);
        }
    });
}
function sendDeclinedWithdrawalEmail(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let mailDetails = {
            from: {
                name: "Martiful",
                address: "NonReply@Martiful.com",
            },
            to: data.email,
            subject: "Transaction Declined",
            html: (0, declined_email_1.declinedWithdrawalEmail)(data),
        };
        try {
            yield email_1.mailTransporter.sendMail(mailDetails, function (err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                }
            });
        }
        catch (error) {
            console.error("Error sending approval email:", error);
        }
    });
}
//# sourceMappingURL=adminController.js.map