// controllers/assetController.ts

import { Request, Response } from "express";
import { AssetDocument } from "../types/asset";
import Asset from "../models/assets";
import User from "../models/user";
import { sendPushNotification } from "../utils/notification";

export const createAsset = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, image, qrcode, rate, walletAddress } = req.body;

    const newAsset: AssetDocument = new Asset({
      name,
      image,
      qrcode,
      rate,
      walletAddress,
    });
    await newAsset.save();

    res
      .status(201)
      .json({ message: "Asset created successfully", asset: newAsset });
  } catch (error) {
    console.error("Error creating asset:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllAssets = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const assets = await Asset.find();
    res.status(200).json({ assets, message: "Assets fetched successfully" });
  } catch (error) {
    console.error("Error fetching assets:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateAsset = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, image, qrcode, rate, walletAddress } = req.body;
    const updatedAsset = await Asset.findByIdAndUpdate(
      id,
      { name, image, qrcode, rate, walletAddress },
      { new: true }
    );

    const title = `New rate for ${name}`;
    const body = `Trade ${name} now at ${rate} USD and enjoy your profits!`;

    // Retrieve all users with FCM tokens
    const users = await User.find({ fcmToken: { $ne: null } });

    // Send push notifications to all users
    await Promise.all(
      users.map(async (user: { fcmToken: string; }) => {
        await sendPushNotification(user.fcmToken, title, body);
      })
    );

    res
      .status(200)
      .json({ message: "Asset updated successfully", asset: updatedAsset });
  } catch (error) {
    console.error("Error updating asset:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAsset = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await Asset.findByIdAndDelete(id);
    res.status(200).json({ message: "Asset deleted successfully" });
  } catch (error) {
    console.error("Error deleting asset:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get single asset by name
export const getAssetByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.params;
    const asset = await Asset.findOne({ name });
    res.status(200).json({ asset, message: "Asset fetched successfully" });
  } catch (error) {
    console.error("Error fetching asset:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
