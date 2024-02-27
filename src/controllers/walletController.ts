// controllers/walletController.ts

import { Request, Response } from "express";
import Wallet from "../models/wallet";
import Transaction from "../models/transaction";
import { WalletDocument } from "../types/wallet";
import User from "../models/user";
import { mailTransporter } from "../utils/email/email";
import {
  receivedDepositEmail,
  receivedWithdrawalEmail,
} from "../utils/email/recieived-emails";

export const createWallet = async (userId: string): Promise<WalletDocument> => {
  try {
    const walletId = generateWalletId(); // Implement your logic for generating a unique wallet ID
    const wallet = new Wallet({ user: userId, walletId });
    const createdWallet = await wallet.save();

    return createdWallet;
  } catch (error) {
    console.error("Error creating wallet:", error);
    throw error;
  }
};

export const getWallet = async (
  userId: string
): Promise<WalletDocument | null> => {
  try {
    return await Wallet.findOne({ user: userId });
  } catch (error) {
    console.error("Error fetching wallet:", error);
    throw error;
  }
};

export const deposit = async (
  userId: string,
  amount: number,
  image: string,
  coin: string,
  coinQty: number,
  amountInUSD: number,
  ourWalletAddress: string,
  yourWalletAddress: string
): Promise<WalletDocument | null> => {
  try {
    const wallet = await Wallet.findOne({ user: userId });

    // Log the deposit as a transaction
    await logDepositTransaction(
      userId,
      wallet?._id,
      amount,
      image,
      "deposit",
      "pending",
      coin,
      coinQty,
      amountInUSD,
      ourWalletAddress,
      yourWalletAddress,
      ""
    );

    return wallet;
  } catch (error) {
    console.error("Error depositing to wallet:", error);
    throw error;
  }
};

export const withdraw = async (
  userId: string,
  amount: number,
  bankName: string,
  accountNumber: string,
  accountName: string
): Promise<WalletDocument | null> => {
  try {
    const wallet = await Wallet.findOne({ user: userId });

    // Log the withdrawal as a transaction
    await logWithdrawTransaction(
      userId,
      wallet?._id,
      amount,
      "withdrawal",
      "pending",
      bankName,
      accountNumber,
      accountName,
      ""
    );

    return wallet;
  } catch (error) {
    console.error("Error withdrawing from wallet:", error);
    throw error;
  }
};

const logDepositTransaction = async (
  user: string | undefined,
  walletId: string | undefined,
  amount: number,
  image: string,
  type: "deposit" | "withdrawal",
  status: "pending" | "approved" | "rejected",
  coin: string,
  coinQty: number,
  amountInUSD: number,
  ourWalletAddress: string,
  yourWalletAddress: string,
  message: string
): Promise<void> => {
  try {
    if (walletId) {
      const transaction = new Transaction({
        user,
        wallet: walletId,
        amount,
        image,
        type,
        status,
        coin,
        coinQty,
        amountInUSD,
        ourWalletAddress,
        yourWalletAddress,
        message,
      });
      await transaction.save();

      // send received email to user
      const customer = await User.findById(user);
      const data = {
        name: customer?.firstName + " " + customer?.lastName,
        email: customer?.email,
        ...transaction,
      };
      await sendDepositReceivedEmail(data);
    }
  } catch (error) {
    console.error("Error logging transaction:", error);
    throw error;
  }
};

const logWithdrawTransaction = async (
  user: string | undefined,
  walletId: string | undefined,
  amount: number,
  type: "deposit" | "withdrawal",
  status: "pending" | "approved" | "rejected",
  bankName: string,
  accountNumber: string,
  accountName: string,
  message: string
): Promise<void> => {
  try {
    if (walletId) {
      const transaction = new Transaction({
        user,
        wallet: walletId,
        amount,
        type,
        status,
        bankName,
        accountNumber,
        accountName,
        message,
      });
      await transaction.save();

      // send received email to user
      const customer = await User.findById(user);
      const data = {
        name: customer?.firstName + " " + customer?.lastName,
        email: customer?.email,
        ...transaction,
      };
      await sendWithdrawReceivedEmail(data);
    }
  } catch (error) {
    console.error("Error logging transaction:", error);
    throw error;
  }
};
//

//
const generateWalletId = (): string => {
  const randomNumbers = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");
  return `0mar${randomNumbers}`;
};
//

// send email to user
async function sendWithdrawReceivedEmail(data: any): Promise<void> {
  let mailDetails = {
    from: {
      name: "Martiful",
      address: "NonReply@Martiful.com",
    },
    to: data.email,
    subject: "Transaction Received",
    html: receivedWithdrawalEmail(data),
  };
  try {
    await mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  } catch (error) {
    console.error("Error sending approval email:", error);
  }
}

// send email to user
async function sendDepositReceivedEmail(data: any): Promise<void> {
  let mailDetails = {
    from: {
      name: "Martiful",
      address: "NonReply@Martiful.com",
    },
    to: data.email,
    subject: "Transaction Received",
    html: receivedDepositEmail(data),
  };
  try {
    await mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  } catch (error) {
    console.error("Error sending approval email:", error);
  }
}
