"use strict";
// controllers/walletController.ts
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
exports.withdraw = exports.deposit = exports.getWallet = exports.createWallet = void 0;
const wallet_1 = __importDefault(require("../models/wallet"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const transaction_1 = __importDefault(require("../models/transaction"));
const user_1 = __importDefault(require("../models/user"));
const email_1 = require("../utils/email/email");
const recieived_emails_1 = require("../utils/email/recieived-emails");
const createWallet = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const walletId = generateWalletId(); // Implement your logic for generating a unique wallet ID
        const wallet = new wallet_1.default({ user: userId, walletId });
        const createdWallet = yield wallet.save();
        return createdWallet;
    }
    catch (error) {
        console.error("Error creating wallet:", error);
        throw error;
    }
});
exports.createWallet = createWallet;
const getWallet = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield wallet_1.default.findOne({ user: userId });
    }
    catch (error) {
        console.error("Error fetching wallet:", error);
        throw error;
    }
});
exports.getWallet = getWallet;
const deposit = (userId, amount, image, coin, coinQty, rate, amountInUSD, ourWalletAddress, yourWalletAddress) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wallet = yield wallet_1.default.findOne({ user: userId });
        // Log the deposit as a transaction
        const transaction = yield logDepositTransaction(userId, wallet === null || wallet === void 0 ? void 0 : wallet._id, amount, image, "deposit", "pending", coin, coinQty, rate, amountInUSD, ourWalletAddress, yourWalletAddress, "Transaction received successfully, awaiting confirmation from admin");
        return transaction;
    }
    catch (error) {
        console.error("Error depositing to wallet:", error);
        throw error;
    }
});
exports.deposit = deposit;
const withdraw = (userId, amount, bankName, accountNumber, accountName, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findById(userId);
        // Verify user exists
        if (!user) {
            throw new Error('User not found');
        }
        // Verify password
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        const wallet = yield wallet_1.default.findOne({ user: userId });
        // Log the withdrawal as a transaction
        const transaction = yield logWithdrawTransaction(userId, wallet === null || wallet === void 0 ? void 0 : wallet._id, amount, "withdrawal", "pending", bankName, accountNumber, accountName, "Withdrawal request received successfully, awaiting confirmation from admin");
        return transaction;
    }
    catch (error) {
        console.error("Error withdrawing from wallet:", error);
        throw error;
    }
});
exports.withdraw = withdraw;
const logDepositTransaction = (user, walletId, amount, image, type, status, coin, coinQty, rate, amountInUSD, ourWalletAddress, yourWalletAddress, message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (walletId) {
            const transaction = new transaction_1.default({
                user,
                wallet: walletId,
                amount,
                image,
                type,
                status,
                coin,
                coinQty,
                rate,
                amountInUSD,
                ourWalletAddress,
                yourWalletAddress,
                message,
            });
            yield transaction.save();
            // send received email to user
            const customer = yield user_1.default.findById(user);
            const data = {
                name: (customer === null || customer === void 0 ? void 0 : customer.firstName) + " " + (customer === null || customer === void 0 ? void 0 : customer.lastName),
                email: customer === null || customer === void 0 ? void 0 : customer.email,
                amount,
                type,
                coin,
                coinQty,
                rate,
                amountInUSD,
                wallet: transaction.wallet,
                message,
                status,
                date: transaction.createdAt,
            };
            yield sendDepositReceivedEmail(data);
            return transaction;
        }
    }
    catch (error) {
        console.error("Error logging transaction:", error);
        throw error;
    }
});
const logWithdrawTransaction = (user, walletId, amount, type, status, bankName, accountNumber, accountName, message) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (walletId) {
            const transaction = new transaction_1.default({
                user,
                wallet: walletId,
                amount,
                type,
                status,
                bankName,
                accountNumber,
                accountName,
                message,
            });
            yield transaction.save();
            // send received email to user
            const customer = yield user_1.default.findById(user);
            const data = {
                name: (customer === null || customer === void 0 ? void 0 : customer.firstName) + " " + (customer === null || customer === void 0 ? void 0 : customer.lastName),
                email: customer === null || customer === void 0 ? void 0 : customer.email,
                amount,
                type,
                bankName,
                accountNumber,
                accountName,
                message,
                status,
                wallet: transaction.wallet,
                date: transaction.createdAt,
            };
            yield sendWithdrawReceivedEmail(data);
            return transaction;
        }
    }
    catch (error) {
        console.error("Error logging transaction:", error);
        throw error;
    }
});
//
//
const generateWalletId = () => {
    const randomNumbers = Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0");
    return `0mt${randomNumbers}`;
};
//
// send email to user
function sendWithdrawReceivedEmail(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let mailDetails = {
            from: {
                name: "Martiful",
                address: "NonReply@Martiful.com",
            },
            to: data.email,
            subject: "Transaction Received",
            html: (0, recieived_emails_1.receivedWithdrawalEmail)(data),
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
// send email to user
function sendDepositReceivedEmail(data) {
    return __awaiter(this, void 0, void 0, function* () {
        let mailDetails = {
            from: {
                name: "Martiful",
                address: "NonReply@Martiful.com",
            },
            to: data.email,
            subject: "Transaction Received",
            html: (0, recieived_emails_1.receivedDepositEmail)(data),
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
//# sourceMappingURL=walletController.js.map