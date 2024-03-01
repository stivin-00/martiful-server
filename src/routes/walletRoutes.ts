// routes/walletRoutes.ts

import express from "express";
import {
  createWallet,
  getWallet,
  deposit,
  withdraw,
} from "../controllers/walletController";
import { authenticateUser } from "../middlewares/authMiddleware";
import {
  getTransaction,
  getTransactionHistory,
} from "../controllers/transactionController";
import AuthRequest from "request";

const walletRouter = express.Router();

walletRouter.post(
  "/create",
  authenticateUser,
  async (req: AuthRequest<any>, res) => {
    try {
      const wallet = await createWallet(req.user._id);
      res.status(201).json({ wallet, message: "Wallet created successfully" });
    } catch (error) {
      console.error("Error creating wallet:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

walletRouter.get("/", authenticateUser, async (req: AuthRequest<any>, res) => {
  try {
    const wallet = await getWallet(req.user._id);
    res.status(200).json({ wallet, message: "Wallet fetched successfully" });
  } catch (error) {
    console.error("Error fetching wallet:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

walletRouter.post(
  "/deposit",
  authenticateUser,
  async (req: AuthRequest<any>, res) => {
    try {
      const {
        amount,
        image,
        coin,
        coinQty,
        amountInUSD,
        ourWalletAddress,
        yourWalletAddress,
      } = req.body;
      const wallet = await deposit(
        req.user._id,
        amount,
        image,
        coin,
        coinQty,
        amountInUSD,
        ourWalletAddress,
        yourWalletAddress
      );
      if (wallet) {
        res.status(200).json({ wallet, message: "Deposit successful" });
      } else {
        res.status(400).json({ message: "error depositing to wallet" });
      }
    } catch (error) {
      console.error("Error depositing to wallet:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

walletRouter.post(
  "/withdraw",
  authenticateUser,
  async (req: AuthRequest<any>, res) => {
    try {
      const { amount, bankName, accountNumber, accountName } = req.body;
      const wallet = await withdraw(
        req.user._id,
        amount,
        bankName,
        accountNumber,
        accountName
      );
      if (wallet) {
        res.status(200).json({ wallet, message: "Withdrawal successful" });
      } else {
        res.status(400).json({ message: "Insufficient balance" });
      }
    } catch (error) {
      console.error("Error withdrawing from wallet:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

walletRouter.get(
  "/transactions",
  authenticateUser,
  async (req: AuthRequest<any>, res) => {
    try {
      const transactions = await getTransactionHistory(req.user._id);
      res.status(200).json({
        transactions,
        message: "Transaction history fetched successfully",
      });
    } catch (error) {
      console.error("Error fetching transaction history:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// get single transaction by id
walletRouter.get("/transactions/:id", authenticateUser, getTransaction);

export default walletRouter;
