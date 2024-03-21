// controllers/walletController.ts

import Wallet from "../models/wallet";
import bcrypt from "bcrypt";
import Transaction, { TransactionDocument } from "../models/transaction";
import { WalletDocument } from "../types/wallet";
import User from "../models/user";
import { mailTransporter } from "../utils/email/email";
import {
  receivedDepositEmail,
  receivedWithdrawalEmail,
} from "../utils/email/recieived-emails";
import { resetPassword } from "./authController";

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
  rate: number,
  amountInUSD: number,
  ourWalletAddress: string,
  yourWalletAddress: string
): Promise<TransactionDocument | null> => {
  try {
    const wallet = await Wallet.findOne({ user: userId });

    // Log the deposit as a transaction
    const transaction = await logDepositTransaction(
      userId,
      wallet?._id,
      amount,
      image,
      "deposit",
      "pending",
      coin,
      coinQty,
      rate,
      amountInUSD,
      ourWalletAddress,
      yourWalletAddress,
      "Transaction received successfully, awaiting confirmation from admin"
    );

    return transaction;
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
  accountName: string,
  password: string
): Promise<TransactionDocument | null> => {
  try {

    const user = await User.findById(userId);

    // Verify user exists
    if (!user) {
      throw new Error('User not found');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }


    const wallet = await Wallet.findOne({ user: userId });

    // Log the withdrawal as a transaction
    const transaction = await logWithdrawTransaction(
      userId,
      wallet?._id,
      amount,
      "withdrawal",
      "pending",
      bankName,
      accountNumber,
      accountName,
      "Withdrawal request received successfully, awaiting confirmation from admin"
    );

    return transaction;
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
  rate: number,
  amountInUSD: number,
  ourWalletAddress: string,
  yourWalletAddress: string,
  message: string
): Promise<any> => {
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
        rate,
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
        amount,
        type,
        coin,
        coinQty,
        rate,
        amountInUSD,
        wallet: transaction.wallet,
        message,
        status,
        date: transaction.createdAt,
      };
      // await sendDepositReceivedEmail(data);

      return transaction;
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
): Promise<any> => {
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
        amount,
        type,
        bankName,
        accountNumber,
        accountName,
        message,
        status,
        wallet: transaction.wallet,
        date: transaction.createdAt,
      };
      // await sendWithdrawReceivedEmail(data);

      return transaction;
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
  return `0mt${randomNumbers}`;
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
