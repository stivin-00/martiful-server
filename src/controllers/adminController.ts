// controllers/adminController.ts

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { randomBytes } from "crypto";
import Admin from "../models/admin";
import { AdminDocument } from "../types/admin";
import { generateToken } from "../utils/tokenUtils";
import AuthRequest from "../types/request";
import { mailTransporter } from "../utils/email/email";
import User from "../models/user";
import Transaction, { TransactionDocument } from "../models/transaction";
import Wallet from "../models/wallet";
import {
  approvedDepositEmail,
  approvedWithdrawalEmail,
} from "../utils/email/approved-email";
import {
  declinedDepositEmail,
  declinedWithdrawalEmail,
} from "../utils/email/declined-email";
import { sendPushNotification } from "../utils/notification";

export const createAdmin = async (
  req: AuthRequest<Partial<AdminDocument>>,
  res: Response
): Promise<any> => {
  try {
    console.log(req.body);
    const { username, email, password, role } = req.body;

    // Check if the user creating the admin is a superadmin
    // if (req.admin?.role !== "superadmin") {
    //   return res.status(403).json({ message: "Permission denied" });
    // }

    // check if email already exists
    const emailExists = await Admin.exists({ email });
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // check if username already exists
    const usernameExists = await Admin.exists({ username });
    if (usernameExists) {
      return res.status(400).json({ message: "Username already exists" });
    }

    if (email) {
      const newAdmin: AdminDocument = new Admin({
        username,
        email,
        role,
        password,
      });
      await newAdmin.save();

      res.status(201).json({ message: "Admin created successfully" });
    } else {
      // Handle the case where password is undefined
      res.status(400).json({ message: "email is required" });
    }
  } catch (error: any) {
    console.error("Error creating admin:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const requestAdminLogin = async (
  req: AuthRequest<Partial<AdminDocument>>,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide both email and password" });
    }

    // Find the admin by email
    const admin = await Admin.findOne({ email });

    if (!admin) {
      console.log("Admin not found");
      return res.status(401).json({ message: "Admin not found" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate a verification code
    const generateVerificationCode = (): string => {
      const codeLength = 6;
      const buffer = randomBytes(codeLength);
      const verificationCode = buffer.toString("hex").slice(0, codeLength);
      return verificationCode;
    };

    // save the verification code
    admin.verificationToken = generateVerificationCode();
    await admin.save();

    // Send the verification code to the admin's email
    sendVerificationEmail(admin);

    res.status(200).json({ message: "Verification code sent successfully" });
  } catch (error) {
    console.error("Error requesting admin login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const verifyAdminLogin = async (
  req: AuthRequest<Partial<AdminDocument>>,
  res: Response
): Promise<any> => {
  try {
    const { email, verificationToken } = req.body;
    const admin = await Admin.findOne({ email, verificationToken });

    if (!admin) {
      return res.status(401).json({ message: "Invalid verification code" });
    }

    // clear the verification token
    admin.verificationToken = "";
    await admin.save();

    // Generate a JWT token for the admin
    const token = generateToken({ email: admin.email, role: admin.role });

    res
      .status(200)
      .json({ admin, token, message: "Admin logged in successfully" });
  } catch (error) {
    console.error("Error verifying admin login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUsers = async (
  req: AuthRequest<Partial<AdminDocument>>,
  res: Response
): Promise<any> => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({ users, message: "Users fetched successfully" });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// get user by id and their transtion
export const getUserById = async (
  req: AuthRequest<Partial<AdminDocument>>,
  res: Response
): Promise<any> => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).select("-password");

    const transactions = await Transaction.find({ user: userId }).sort({
      createdAt: -1,
    });

    const data = {
      _id: user?._id,
      avatar: user?.avatar,
      userName: user?.userName,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      accountDetails: user?.accountDetails,
      isVerified: user?.isVerified,
      isSuspended: user?.isSuspended,
      createdAt: user?.createdAt,
      transactions,
    };

    res.status(200).json({ user: data, message: "User fetched successfully" });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// change user suspend status
export const suspendUser = async (
  req: AuthRequest<Partial<AdminDocument>>,
  res: Response
): Promise<any> => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isSuspended = !user.isSuspended;
    await user.save();

    // Send a push notification to the user
    const title = `Your account has been ${
      user.isSuspended ? "suspended" : "unsuspended"
    }`;
    const body = `Dear ${user.lastName} ${user.firstName}, ${
      user.isSuspended
        ? "your account has been suspended by the admin, please contact our support team for further details"
        : "your account has been unsuspended by the admin, please proceed with your transactions "
    } `;

    await sendPushNotification(user.fcmToken, title, body);

    res.status(200).json({
      user,
      message: `User ${user.isSuspended ? "suspended" : "unsuspended"}`,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllTransactions = async (
  req: AuthRequest<Partial<AdminDocument>>,
  res: Response
): Promise<any> => {
  try {
    const transactions = await Transaction.find()
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order (-1)
      .populate({
        path: "user",
        model: "User",
        select: "firstName lastName userName email phoneNumber",
      });

    res.status(200).json({
      transactions,
      message: "Transactions fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const approveDepositTransaction = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { transactionId } = req.params;
  const newInfo = req.body;

  try {
    // Find the transaction
    const transaction = await Transaction.findById(transactionId);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    // Find and update user wallet
    const wallet = await Wallet.findByIdAndUpdate(
      transaction.wallet,
      { $inc: { balance: transaction.amount } },
      { new: true }
    );

    // Check if user has enough balance after update
    if (!wallet || wallet.balance < 0) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Update the transaction fields in the database
    await Transaction.updateOne({ _id: transaction._id }, { $set: newInfo });

    // Send approval email
    const user = await User.findById(transaction.user);
    const data = {
      name: user?.firstName + " " + user?.lastName,
      email: user?.email,
      amount: transaction.amount,
      amountInUSD: transaction.amountInUSD,
      coin: transaction.coin,
      coinQty: transaction.coinQty,
      rate: transaction.rate,
      status: transaction.status,
      wallet: transaction.wallet,
      message: transaction.message,
      date: transaction.updatedAt,
    };
    await sendDepositApprovalEmail(data);

    // send push notification
    if (user?.fcmToken) {
      await sendPushNotification(
        user?.fcmToken,
        "Deposit Successful",
        `Dear ${user.lastName} ${user.firstName}, your transaction of ${transaction.coinQty}${transaction.coin} for ₦${transaction.amount} has been approved`
      );
    }

    // Fetch all transactions after approval
    const transactions = await Transaction.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        model: "User",
        select: "firstName lastName userName email phoneNumber",
      });

    // Send the response
    res.status(200).json({
      transactions,
      wallet,
      message: "Transaction approved successfully",
    });
  } catch (error) {
    console.error("Error approving transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const approveWithdrawTransaction = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { transactionId } = req.params;
  const newInfo = req.body;

  try {
    // Find the transaction
    const transaction = await Transaction.findById(transactionId);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    // find and update user wallet
    const wallet = await Wallet.findById(transaction.wallet);

    // check if user has wallet
    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    // check if user has enough balance
    if (wallet.balance > transaction.amount) {
      wallet.balance -= transaction.amount;
      await wallet.save();
    } else {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Update the transaction fields in the database
    await Transaction.findByIdAndUpdate(transactionId, { $set: newInfo });

    // sendApprovalEmail(transaction, user);
    const user = await User.findById(transaction.user);
    const data = {
      name: user?.firstName + " " + user?.lastName,
      email: user?.email,
      amount: transaction.amount,
      amountInUSD: transaction.amountInUSD,
      bankName: transaction.bankName,
      accountNumber: transaction.accountNumber,
      accountName: transaction.accountName,
      wallet: transaction.wallet,
      status: transaction.status,
      message: transaction.message,
      date: transaction.updatedAt,
    };
    await sendWithdrawApprovalEmail(data);

    // send push notification
    if (user?.fcmToken) {
      await sendPushNotification(
        user?.fcmToken,
        "Withdrawal Successful",
        `Dear ${user.lastName} ${user.firstName}, your withdrawal of ₦${transaction.amount} has been approved and money sent to ${transaction.accountName} ${transaction.bankName}`
      );
    }

    const transactions = await Transaction.find()
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order (-1)
      .populate({
        path: "user",
        model: "User",
        select: "firstName lastName userName email phoneNumber",
      });

    res.status(200).json({
      transactions,
      wallet,
      message: "Transaction approved successfully",
    });
  } catch (error) {
    console.error("Error approving transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const rejectTransaction = async (
  req: Request,
  res: Response
): Promise<any> => {
  const { transactionId } = req.params;
  const newInfo = req.body;

  try {
    // Find the transaction and check its status
    const transaction = await Transaction.findById(transactionId);

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    if (transaction.status === "rejected") {
      return res.status(400).json({ message: "Transaction already declined" });
    }

    if (transaction.status === "approved") {
      return res.status(400).json({
        message: "Transaction already approved. Please try again later.",
      });
    }

    // Update the transaction fields based on req.body and set the status to 'rejected'
    const updatedTransaction: TransactionDocument | any =
      await Transaction.findByIdAndUpdate(
        transactionId,
        { $set: { ...newInfo, status: "rejected" } },
        { new: true } // Return the updated document
      );

    // Send declined email based on the transaction type
    if (updatedTransaction.type === "deposit") {
      const user = await User.findById(updatedTransaction.user);
      const data = {
        name: user?.firstName + " " + user?.lastName,
        email: user?.email,
        amount: updatedTransaction.amount,
        amountInUSD: updatedTransaction.amountInUSD,
        coin: updatedTransaction.coin,
        coinQty: updatedTransaction.coinQty,
        rate: updatedTransaction.rate,
        status: updatedTransaction.status,
        message: updatedTransaction.message,
        date: updatedTransaction.updatedAt,
      };
      await sendDeclinedDepositEmail(data);
    } else if (updatedTransaction.type === "withdrawal") {
      const user = await User.findById(updatedTransaction.user);
      const data = {
        name: user?.firstName + " " + user?.lastName,
        email: user?.email,
        amount: updatedTransaction.amount,
        amountInUSD: updatedTransaction.amountInUSD,
        bankName: updatedTransaction.bankName,
        accountNumber: updatedTransaction.accountNumber,
        accountName: updatedTransaction.accountName,
        wallet: updatedTransaction.wallet,
        status: updatedTransaction.status,
        message: updatedTransaction.message,
        date: updatedTransaction.updatedAt,
      };
      await sendDeclinedWithdrawalEmail(data);
    }

    // Fetch updated transactions
    const transactions = await Transaction.find()
      .sort({ createdAt: -1 })
      .populate({
        path: "user",
        model: "User",
        select: "firstName lastName userName email phoneNumber",
      });

    res.status(200).json({
      transactions,
      message: "Transaction rejected successfully",
    });
  } catch (error) {
    console.error("Error rejecting transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// routes ends here //

// emails starts herer //

async function sendVerificationEmail(admin: AdminDocument): Promise<void> {
  let mailDetails = {
    from: {
      name: "Martiful Admin",
      address: "NonReply@Martiful.com",
    },
    to: admin.email,
    subject: "OTP for log in",
    html: `
      <h5>Hi Admin</h5>
      <p>Please use the password below to login</p>
<P>${admin.verificationToken}</P>
      `,
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
    console.error("Error sending verification email:", error);
  }
}

async function sendDepositApprovalEmail(data: any): Promise<void> {
  let mailDetails = {
    from: {
      name: "Martiful",
      address: "NonReply@Martiful.com",
    },
    to: data.email,
    subject: "Transaction Approval",
    html: approvedDepositEmail(data),
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

async function sendWithdrawApprovalEmail(data: any): Promise<void> {
  let mailDetails = {
    from: {
      name: "Martiful",
      address: "NonReply@Martiful.com",
    },
    to: data.email,
    subject: "Transaction Approval",
    html: approvedWithdrawalEmail(data),
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

async function sendDeclinedDepositEmail(data: any): Promise<void> {
  let mailDetails = {
    from: {
      name: "Martiful",
      address: "NonReply@Martiful.com",
    },
    to: data.email,
    subject: "Transaction Declined",
    html: declinedDepositEmail(data),
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

async function sendDeclinedWithdrawalEmail(data: any): Promise<void> {
  let mailDetails = {
    from: {
      name: "Martiful",
      address: "NonReply@Martiful.com",
    },
    to: data.email,
    subject: "Transaction Declined",
    html: declinedWithdrawalEmail(data),
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
