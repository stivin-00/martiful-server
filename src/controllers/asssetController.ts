// controllers/assetController.ts

import { Request, Response } from "express";
import { AssetDocument } from "../types/asset";
import Asset from "../models/assets";

export const createAsset = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, image, qrcode, rate } = req.body;

    const newAsset: AssetDocument = new Asset({ name, image, qrcode, rate });
    await newAsset.save();

    res.status(201).json({ message: "Asset created successfully", asset: newAsset });
  } catch (error) {
    console.error("Error creating asset:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllAssets = async (req: Request, res: Response): Promise<void> => {
  try {
    const assets = await Asset.find();
    res.status(200).json({ assets, message: "Assets fetched successfully" });
  } catch (error) {
    console.error("Error fetching assets:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const updateAsset = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, image, qrcode, rate } = req.body;
    const updatedAsset = await Asset.findByIdAndUpdate(
      id,
      { name, image, qrcode, rate },
      { new: true }
    );
    res.status(200).json({ message: "Asset updated successfully", asset: updatedAsset });
  } catch (error) {
    console.error("Error updating asset:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAsset = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await Asset.findByIdAndDelete(id);
    res.status(200).json({ message: "Asset deleted successfully" });
  } catch (error) {
    console.error("Error deleting asset:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}