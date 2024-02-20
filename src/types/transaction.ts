// types/transaction.ts

import { Document } from "mongoose";

interface Transaction {
  wallet: string; // Wallet reference
  amount: number;
  type: "deposit" | "withdrawal";
  // Add other fields as needed
}

export interface TransactionDocument extends Transaction, Document {}

export default Transaction;
