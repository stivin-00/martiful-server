// controllers/walletController.ts

import { Request, Response } from "express";
import Wallet from "../models/wallet";
import Transaction from "../models/transaction";
import { WalletDocument } from "../types/wallet";

export const createWallet = async (userId: string): Promise<WalletDocument> => {
  try {
    const walletId = generateWalletId(); // Implement your logic for generating a unique wallet ID
    const wallet = new Wallet({ user: userId, walletId });
    const createdWallet = await wallet.save();

    // Log the wallet creation as a transaction
    await logTransaction(createdWallet._id, 0, "wallet_creation");

    return createdWallet;
  } catch (error) {
    console.error("Error creating wallet:", error);
    throw error;
  }
};

export const getWallet = async (userId: string): Promise<WalletDocument | null> => {
  try {
    return await Wallet.findOne({ user: userId });
  } catch (error) {
    console.error("Error fetching wallet:", error);
    throw error;
  }
};

export const deposit = async (userId: string, amount: number): Promise<WalletDocument | null> => {
  try {
    const wallet = await Wallet.findOneAndUpdate(
      { user: userId },
      { $inc: { balance: amount } },
      { new: true }
    );

    // Log the deposit as a transaction
    await logTransaction(wallet?._id, amount, "deposit");

    return wallet;
  } catch (error) {
    console.error("Error depositing to wallet:", error);
    throw error;
  }
};

export const withdraw = async (userId: string, amount: number): Promise<WalletDocument | null> => {
  try {
    const wallet = await Wallet.findOneAndUpdate(
      { user: userId, balance: { $gte: amount } },
      { $inc: { balance: -amount } },
      { new: true }
    );

    // Log the withdrawal as a transaction
    await logTransaction(wallet?._id, amount, "withdrawal");

    return wallet;
  } catch (error) {
    console.error("Error withdrawing from wallet:", error);
    throw error;
  }
};

const logTransaction = async (
  walletId: string | undefined,
  amount: number,
  type: "deposit" | "withdrawal" | "wallet_creation"
): Promise<void> => {
  try {
    if (walletId) {
      const transaction = new Transaction({ wallet: walletId, amount, type });
      await transaction.save();
    }
  } catch (error) {
    console.error("Error logging transaction:", error);
    throw error;
  }
};

const generateWalletId = (): string => {
  // Implement your logic for generating a unique wallet ID (e.g., using a library like uuid)
  // For simplicity, this example uses a random string; replace it with your actual logic
  return Math.random().toString(36).substring(7);
};
