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

export default authRouter;
