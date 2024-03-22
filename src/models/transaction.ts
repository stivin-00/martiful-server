// models/transaction.ts

import mongoose, { Schema } from "mongoose";
import { UserDocument } from "../types/user";
import { WalletDocument } from "../types/wallet";

export interface TransactionDocument extends mongoose.Document {
  user: UserDocument["_id"];
  wallet: WalletDocument["_id"];
  amount: number;
  image: string;
  type: "deposit" | "withdrawal";
  status: "pending" | "approved" | "rejected";
  coin: string;
  coinQty: number;
  bankName: string;
  accountNumber: string;
  accountName: string;
  amountInUSD: number;
  ourWalletAddress: string;
  rate: number;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const transactionSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    wallet: { type: Schema.Types.ObjectId, ref: "Wallet", required: true },
    amount: { type: Number, required: true },
    image: { type: String, required: false },
    type: { type: String, enum: ["deposit", "withdrawal"], required: true },
    status: {
      type: String,
      enum: ["pending", "Approved", "rejected"],
      default: "pending",
    },
    coin: { type: String, required: false },
    coinQty: { type: Number, required: false },
    bankName: { type: String, required: false },
    accountNumber: { type: String, required: false },
    accountName: { type: String, required: false },
    amountInUSD: { type: Number, required: false },
    ourWalletAddress: { type: String, required: false },
  
    rate: { type: Number, required: false },
    message: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model<TransactionDocument>(
  "Transaction",
  transactionSchema
);

export default Transaction;
