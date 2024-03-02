// controllers/transactionController.ts

import { Request, Response } from "express";
import Transaction from "../models/transaction";
import { TransactionDocument } from "../types/transaction";
import AuthRequest from "request";

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

// get single transaction by id
export const getTransaction = async (req: AuthRequest<any>, res: Response) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    console.error("Error fetching transaction:", error);
  }
}


