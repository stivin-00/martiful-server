// controllers/transactionController.ts

import { Request, Response } from "express";
import Transaction from "../models/transaction";
import { TransactionDocument } from "../types/transaction";

export const getTransactionHistory = async (userId: string): Promise<TransactionDocument[]> => {
  try {
    // Find transactions related to the user's wallet
    const transactions = await Transaction.find().populate({
      path: "wallet",
      match: { user: userId }, // Filter transactions based on user
    });

    // Extract populated transactions
    const userTransactions = transactions
      .filter((transaction) => transaction.wallet !== null)
      .map((transaction) => transaction.toObject());

    return userTransactions;
  } catch (error) {
    console.error("Error fetching transaction history:", error);
    throw error;
  }
};
