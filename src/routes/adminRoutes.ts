// routes/adminRoutes.ts

import express from "express";
import {
  createAdmin,
  requestAdminLogin,
  verifyAdminLogin,
} from "../controllers/adminController";
import { authenticateAdmin } from "../middlewares/authMiddleware";

const adminRouter = express.Router();

console.log("Admin routes are being initialized");

adminRouter.post("/create", createAdmin);
adminRouter.post("/login", requestAdminLogin);
adminRouter.post("/verify-login", verifyAdminLogin);

export default adminRouter;
