// controllers/transactionController.ts

import { Request, Response } from "express";
import Transaction from "../models/transaction";
import { TransactionDocument } from "../types/transaction";

export const getTransactionHistory = async (userId: string): Promise<TransactionDocument[]> => {
  try {
    // Find transactions related to the user's wallet by user id
    const transactions = await Transaction.find({ user: userId });

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
