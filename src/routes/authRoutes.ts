// routes/authRoutes.ts

import express from "express";
import { authenticateUser } from "../middlewares/authMiddleware";
import {
    changePassword,
    deleteAccount,
  loginUser,
  registerUser,
  updateAccount,
  verifyAccount,
} from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/verify", verifyAccount);
authRouter.patch("/update", authenticateUser, updateAccount);
authRouter.delete('/delete', authenticateUser, deleteAccount);
authRouter.post('/change-password', authenticateUser, changePassword);

export default authRouter;
