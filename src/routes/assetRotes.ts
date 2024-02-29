// routes/assetRoutes.ts

import express from "express";
import {
  getAllAssets,
  createAsset,
  updateAsset,
  deleteAsset,
  getAssetByName,
} from "../controllers/asssetController";
import { authenticateAdmin } from "../middlewares/authMiddleware";

const assetRouter = express.Router();

assetRouter.post("/", authenticateAdmin, createAsset);
assetRouter.get("/", getAllAssets);
assetRouter.patch("/:id", authenticateAdmin, updateAsset);
assetRouter.delete("/:id", authenticateAdmin, deleteAsset);
assetRouter.get("/:name", getAssetByName);

export default assetRouter;
