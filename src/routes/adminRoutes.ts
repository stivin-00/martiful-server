// routes/adminRoutes.ts //

import express from "express";
import {
  approveDepositTransaction,
  approveWithdrawTransaction,
  createAdmin,
  getAllTransactions,
  getUserById,
  getUsers,
  rejectTransaction,
  requestAdminLogin,
  suspendUser,
  verifyAdminLogin,
} from "../controllers/adminController";
import { authenticateAdmin } from "../middlewares/authMiddleware";

const adminRouter = express.Router();

console.log("Admin routes are being initialized");

adminRouter.post("/create", authenticateAdmin, createAdmin);
adminRouter.post("/login", requestAdminLogin);
adminRouter.post("/verify-login", verifyAdminLogin);
adminRouter.get("/users", authenticateAdmin, getUsers);
adminRouter.get("/user/:userId", authenticateAdmin, getUserById);
adminRouter.patch("/user/suspend/:userId", authenticateAdmin, suspendUser);
adminRouter.patch(
  "/approve-deposit/:transactionId",
  authenticateAdmin,
  approveDepositTransaction
);
adminRouter.patch(
  "/approve-withdrawal/:transactionId",
  authenticateAdmin,
  approveWithdrawTransaction
);
adminRouter.patch(
  "/reject-transaction/:transactionId",
  authenticateAdmin,
  rejectTransaction
);
adminRouter.get("/transactions", authenticateAdmin, getAllTransactions);

export default adminRouter;
