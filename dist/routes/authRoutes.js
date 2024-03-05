"use strict";
// routes/authRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const authController_1 = require("../controllers/authController");
const transactionController_1 = require("../controllers/transactionController");
const authRouter = express_1.default.Router();
authRouter.post("/register", authController_1.registerUser);
authRouter.post("/login", authController_1.loginUser);
authRouter.post("/verify", authController_1.verifyAccount);
authRouter.post("/forgotPassword", authController_1.forgotPassword);
authRouter.patch("/resetPassword", authController_1.resetPassword);
authRouter.patch("/update", authMiddleware_1.authenticateUser, authController_1.updateAccount);
authRouter.delete("/delete", authMiddleware_1.authenticateUser, authController_1.deleteAccount);
authRouter.post("/change-password", authMiddleware_1.authenticateUser, authController_1.changePassword);
authRouter.post("/add-bank", authMiddleware_1.authenticateUser, authController_1.addAccountDetails);
authRouter.get("/transaction-history/:userId", authMiddleware_1.authenticateUser, transactionController_1.getTransactionHistory);
exports.default = authRouter;
//# sourceMappingURL=authRoutes.js.map