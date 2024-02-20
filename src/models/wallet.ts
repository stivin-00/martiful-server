// models/wallet.ts

import mongoose, { Schema } from "mongoose";
import { WalletDocument } from "../types/wallet";

const walletSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  walletId: { type: String, required: true, unique: true }, // Unique wallet identifier
  balance: { type: Number, default: 0 },
  // Add other fields as needed
});

const Wallet = mongoose.model<WalletDocument>("Wallet", walletSchema);

export default Wallet;
