// models/asset.ts

import mongoose, { Schema } from "mongoose";
import { AssetDocument } from "../types/asset";

const assetSchema = new Schema({
  name: { type: String, required: true },
  walletAddress: { type: String, required: true },
  image: { type: String, required: true }, // URL or file path to the image
  qrcode: { type: String, required: true }, // URL or file path to the QR code
  rate: { type: Number, required: true },
  // Add other fields as needed
});

const Asset = mongoose.model<AssetDocument>("Asset", assetSchema);

export default Asset;
