// types/asset.ts

import { Document } from "mongoose";

interface Asset {
  name: string;
  image: string;
  qrcode: string;
  rate: number;
  walletAddress: string;
  // Add other fields as needed
}

export interface AssetDocument extends Asset, Document {}

export default Asset;
