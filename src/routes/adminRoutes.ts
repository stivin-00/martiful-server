// routes/adminRoutes.ts

import express from "express";
import {
  createAdmin,
  requestAdminLogin,
  verifyAdminLogin,
} from "../controllers/adminController";
import { authenticateAdmin } from "../middlewares/authMiddleware";

const adminRouter = express.Router();

adminRouter.post("/create", authenticateAdmin, createAdmin);
adminRouter.post("/login", requestAdminLogin);
adminRouter.post("/login/verify", verifyAdminLogin);

export default adminRouter;
