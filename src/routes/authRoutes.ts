// routes/authRoutes.ts

import express from "express";
import { authenticateUser } from "../middlewares/authMiddleware";
import {
  addAccountDetails,
  changePassword,
  deleteAccount,
  forgotPassword,
  loginUser,
  registerUser,
  resetPassword,
  updateAccount,
  verifyAccount,
} from "../controllers/authController";
import { getTransactionHistory } from "../controllers/transactionController";

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/verify", verifyAccount);
authRouter.post("/forgotPassword", forgotPassword);
authRouter.patch("/resetPassword", resetPassword);
authRouter.patch("/update", authenticateUser, updateAccount);
authRouter.delete("/delete", authenticateUser, deleteAccount);
authRouter.post("/change-password", authenticateUser, changePassword);
authRouter.post("/add-bank", authenticateUser, addAccountDetails);
authRouter.get(
  "/transaction-history/:userId",
  authenticateUser,
  getTransactionHistory
);

export default authRouter;
