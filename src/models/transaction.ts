// models/transaction.ts

import mongoose, { Schema } from "mongoose";
import { TransactionDocument } from "../types/transaction";

const transactionSchema = new Schema({
  wallet: { type: Schema.Types.ObjectId, ref: "Wallet", required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["deposit", "withdrawal"], required: true },
  // Add other fields as needed
}, { timestamps: true });

const Transaction = mongoose.model<TransactionDocument>("Transaction", transactionSchema);

export default Transaction;
