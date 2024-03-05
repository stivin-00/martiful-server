"use strict";
// routes/adminRoutes.ts //
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../controllers/adminController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const adminRouter = express_1.default.Router();
console.log("Admin routes are being initialized");
adminRouter.post("/create", authMiddleware_1.authenticateAdmin, adminController_1.createAdmin);
adminRouter.post("/login", adminController_1.requestAdminLogin);
adminRouter.post("/verify-login", adminController_1.verifyAdminLogin);
adminRouter.get("/users", authMiddleware_1.authenticateAdmin, adminController_1.getUsers);
adminRouter.get("/user/:userId", authMiddleware_1.authenticateAdmin, adminController_1.getUserById);
adminRouter.patch("/user/suspend/:userId", authMiddleware_1.authenticateAdmin, adminController_1.suspendUser);
adminRouter.patch("/approve-deposit/:transactionId", authMiddleware_1.authenticateAdmin, adminController_1.approveDepositTransaction);
adminRouter.patch("/approve-withdrawal/:transactionId", authMiddleware_1.authenticateAdmin, adminController_1.approveWithdrawTransaction);
adminRouter.patch("/reject-transaction/:transactionId", authMiddleware_1.authenticateAdmin, adminController_1.rejectTransaction);
adminRouter.get("/transactions", authMiddleware_1.authenticateAdmin, adminController_1.getAllTransactions);
exports.default = adminRouter;
//# sourceMappingURL=adminRoutes.js.map