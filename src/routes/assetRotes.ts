// routes/assetRoutes.ts

import express from "express";
import {
  getAllAssets,
  createAsset,
  updateAsset,
  deleteAsset,
} from "../controllers/asssetController";
import { authenticateAdmin } from "../middlewares/authMiddleware";

const assetRouter = express.Router();

assetRouter.post("/", authenticateAdmin, createAsset);
assetRouter.get("/", getAllAssets);
assetRouter.patch("/id", updateAsset);
assetRouter.delete("/id", deleteAsset);

export default assetRouter;
