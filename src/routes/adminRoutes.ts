// routes/adminRoutes.ts //

import express from "express";
import {
  approveDepositeTransaction,
  approveWithdrawTransaction,
  createAdmin,
  getAllTransactions,
  getUsers,
  rejectTransaction,
  requestAdminLogin,
  verifyAdminLogin,
} from "../controllers/adminController";
import { authenticateAdmin } from "../middlewares/authMiddleware";

const adminRouter = express.Router();

console.log("Admin routes are being initialized");

adminRouter.post("/create", authenticateAdmin, createAdmin);
adminRouter.post("/login", requestAdminLogin);
adminRouter.post("/verify-login", verifyAdminLogin);
adminRouter.get("/users", getUsers);
adminRouter.post(
  "/approve-deposite/:transactionId",
  authenticateAdmin,
  approveDepositeTransaction
);
adminRouter.post(
  "/approve-withdrawal/:transactionId",
  authenticateAdmin,
  approveWithdrawTransaction
);
adminRouter.post(
  "/reject-transaction/:transactionId",
  authenticateAdmin,
  rejectTransaction
);
adminRouter.get("/transactions", authenticateAdmin, getAllTransactions);

export default adminRouter;
