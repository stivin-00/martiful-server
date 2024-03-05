"use strict";
// controllers/authController.ts
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
exports.addAccountDetails = exports.deleteAccount = exports.resetPassword = exports.forgotPassword = exports.changePassword = exports.updateAccount = exports.verifyAccount = exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const email_1 = require("../utils/email/email");
const walletController_1 = require("./walletController");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req)
    try {
        const loginInfo = req.body;
        const { email, password } = req.body;
        const existingUser = yield user_1.default.findOne({ email });
        if (existingUser) {
            if (existingUser.isVerified) {
                return res
                    .status(409)
                    .json({ message: "User already exists with this email" });
            }
            else {
                sendVerificationEmail(existingUser);
                return res
                    .status(201)
                    .json({ message: "A verification code has been sent to your email" });
            }
        }
        const newUser = new user_1.default(loginInfo);
        yield newUser.save();
        // Send verification email
        yield sendVerificationEmail(newUser);
        res
            .status(201)
            .json({ message: "A verification code has been sent to your email" });
    }
    catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: error.message });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("started");
    try {
        const { email, password, fcmToken } = req.body;
        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Please provide both email and password" });
        }
        // Find the user by email
        const user = yield user_1.default.findOne({ email });
        // update user fcm token
        if (fcmToken && user) {
            user.fcmToken = fcmToken;
            yield user.save();
        }
        if (!user) {
            return res
                .status(401)
                .json({ message: "User not found, please register" });
        }
        // Check if the password is correct
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        // Check if the user is verified
        if (!user.isVerified) {
            return res.status(403).json({
                message: "Account not verified. Please check your email for verification instructions.",
            });
        }
        // check if user is Suspended
        if (user.isSuspended) {
            return res
                .status(403)
                .json({ message: "Account is suspended, Please contact support" });
        }
        // Generate and sign a JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, "your-secret-key", {
            expiresIn: "1h",
        });
        res.status(200).json({ user, token, message: "Login successful" });
    }
    catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: error.message });
    }
});
exports.loginUser = loginUser;
const verifyAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body;
        if (!token) {
            return res
                .status(400)
                .json({ message: "Verification token is required" });
        }
        // Find the user by verification token
        const user = yield user_1.default.findOne({ verificationToken: token });
        if (!user) {
            return res.status(404).json({ message: "Invalid verification token" });
        }
        // Mark the user as verified
        user.isVerified = true;
        user.verificationToken = "";
        yield user.save();
        // create wallet
        yield (0, walletController_1.createWallet)(user._id);
        // send welcome mail
        yield sendWelcomeEmail(user);
        res.status(200).json({ message: "Account verified successfully" });
    }
    catch (error) {
        console.error("Error verifying account:", error);
        res.status(500).json({ message: error.message });
    }
});
exports.verifyAccount = verifyAccount;
const updateAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updates = req.body;
        const userId = req.user._id;
        const user = yield user_1.default.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Update all fields available in the request body
        Object.assign(user, updates);
        yield user.save();
        // Generate and sign a JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, "your-secret-key", {
            expiresIn: "1h",
        });
        res
            .status(200)
            .json({ user, token, message: "Account updated successfully" });
    }
    catch (error) {
        console.error("Error updating account:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.updateAccount = updateAccount;
const changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { oldPassword, newPassword } = req.body;
        const userId = req.user._id;
        if (oldPassword === undefined ||
            oldPassword === null ||
            newPassword === undefined ||
            newPassword === null) {
            return res.status(400).json({
                message: "Old password or new password is missing or invalid",
            });
        }
        const user = yield user_1.default.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Compare the old password
        const isPasswordMatch = yield bcrypt_1.default.compare(oldPassword, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Incorrect old password" });
        }
        // Update the password
        const saltRounds = 10;
        user.password = yield bcrypt_1.default.hash(newPassword, saltRounds);
        yield user.save();
        res.status(200).json({ message: "Password changed successfully" });
    }
    catch (error) {
        console.error("Error changing password:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.changePassword = changePassword;
const forgotPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const user = yield user_1.default.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Check if the user is verified
        if (!user.isVerified) {
            return res.status(400).json({ message: "User is not verified" });
        }
        // Generate a password reset token
        const min = Math.pow(10, 4 - 1);
        const max = Math.pow(10, 4) - 1;
        const token = Math.floor(Math.random() * (max - min + 1)) + min;
        const resetToken = token.toString();
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = (Date.now() + 3600000).toString(); // Token expires in 1 hour
        yield user.save();
        // TODO: Send a password reset email with resetToken to the user
        yield sendPasswordResetEmail(user);
        res.status(200).json({ message: "Password reset email sent successfully" });
    }
    catch (error) {
        console.error("Error sending password reset email:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.forgotPassword = forgotPassword;
const resetPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, password } = req.body;
        const user = yield user_1.default.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() },
        });
        if (!user) {
            return res
                .status(400)
                .json({ message: "Invalid or expired reset token" });
        }
        // Set the new password
        if (password !== undefined) {
            user.password = password;
            user.resetPasswordToken = "";
            user.resetPasswordExpires = "";
        }
        yield user.save();
        res.status(200).json({ message: "Password reset successfully" });
    }
    catch (error) {
        console.error("Error resetting password:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.resetPassword = resetPassword;
const deleteAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user._id;
        const { oldPassword } = req.body;
        if (!oldPassword) {
            return res.status(400).json({ message: "Password is required" });
        }
        const user = yield user_1.default.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Compare the old password
        const isPasswordMatch = yield bcrypt_1.default.compare(oldPassword, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Incorrect password" });
        }
        const deletedUser = yield user_1.default.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "Account deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting account:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.deleteAccount = deleteAccount;
const addAccountDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bankName, accountNumber, accountName } = req.body;
    const userId = req.user._id; // Assuming you have authentication middleware that attaches the user to the request
    try {
        // Find the user by ID
        const user = yield user_1.default.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Save the user document with the updated account details
        if (!bankName || !accountNumber || !accountName) {
            return res.status(400).json({ message: "All fields are required" });
        }
        else {
            user.accountDetails.push({ bankName, accountNumber, accountName });
            yield user.save();
            res
                .status(200)
                .json({ user, message: "Account details added successfully" });
        }
        // Add the new account details to the user's account
    }
    catch (error) {
        console.error("Error adding account details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.addAccountDetails = addAccountDetails;
// routes end here
// emails herer //
function sendVerificationEmail(user) {
    return __awaiter(this, void 0, void 0, function* () {
        let mailDetails = {
            from: {
                name: "Martiful Services",
                address: "NonReply@Martiful.com",
            },
            to: user.email,
            subject: "VERIFY YOUR ACCOUNT",
            html: (0, email_1.verifyEmailTemplate)(user.firstName, user.verificationToken) || undefined,
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
function sendWelcomeEmail(user) {
    return __awaiter(this, void 0, void 0, function* () {
        let mailDetails = {
            from: {
                name: "Martiful Services",
                address: "NonReply@Martiful.com",
            },
            to: user.email,
            subject: "WELCOME TO MARTIFUL SERVICES",
            html: (0, email_1.welcomeEmailTemplate)(user.firstName) || undefined,
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
            console.error("Error sending welcome email:", error);
        }
    });
}
function sendPasswordResetEmail(user) {
    return __awaiter(this, void 0, void 0, function* () {
        let mailDetails = {
            from: {
                name: "Martiful Services",
                address: "NonReply@Martiful.com",
            },
            to: user.email,
            subject: "PASSWORD RESET TOKEN",
            html: (0, email_1.verifyResetPasswordEmailTemplate)(user.firstName, user.resetPasswordToken) || undefined,
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
//# sourceMappingURL=authController.js.map