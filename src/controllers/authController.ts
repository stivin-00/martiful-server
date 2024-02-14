// controllers/authController.ts

import { Response } from "express";
import bcrypt from "bcrypt";
import { randomBytes } from "crypto";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { UserDocument } from "../types/user";
import AuthRequest from "../types/request";
import {
  mailTransporter,
  verifyEmailTemplate,
  verifyResetPasswordEmailTemplate,
  welcomeEmailTemplate,
} from "../utils/email/email";

export const registerUser = async (
  req: AuthRequest<Partial<UserDocument>>,
  res: Response
) => {
  // console.log(req)
  try {
    const loginInfo = req.body;
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      if (existingUser.isVerified) {
        return res
          .status(409)
          .json({ message: "User already exists with this email" });
      } else {
        sendVerificationEmail(existingUser);
        return res
          .status(201)
          .json({ message: "A verification code has been sent to your email" });
      }
    }

    const newUser = new User(loginInfo);
    await newUser.save();

    // Send verification email
    await sendVerificationEmail(newUser);

    res
      .status(201)
      .json({ message: "A verification code has been sent to your email" });
  } catch (error: any) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (
  req: AuthRequest<Partial<UserDocument>>,
  res: Response
) => {
  console.log("started");
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide both email and password" });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not found, please register" });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Check if the user is verified
    if (!user.isVerified) {
      return res.status(403).json({
        message:
          "Account not verified. Please check your email for verification instructions.",
      });
    }

    // Generate and sign a JWT token
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    res.status(200).json({ user, token, message: "Login successful" });
  } catch (error: any) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: error.message });
  }
};

export const verifyAccount = async (
  req: AuthRequest<{ token: string }>,
  res: Response
) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res
        .status(400)
        .json({ message: "Verification token is required" });
    }

    // Find the user by verification token
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(404).json({ message: "Invalid verification token" });
    }

    // Mark the user as verified
    user.isVerified = true;
    user.verificationToken = "";
    await user.save();

    // send welcome mail
    await sendWelcomeEmail(user);

    res.status(200).json({ message: "Account verified successfully" });
  } catch (error: any) {
    console.error("Error verifying account:", error);
    res.status(500).json({ message: error.message });
  }
};

export const updateAccount = async (
  req: AuthRequest<Partial<UserDocument>>,
  res: Response
) => {
  try {
    const updates = req.body;

    const userId = req.user._id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update all fields available in the request body
    Object.assign(user, updates);

    await user.save();

    // Generate and sign a JWT token
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ user, token, message: "Account updated successfully" });
  } catch (error) {
    console.error("Error updating account:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const changePassword = async (
  req: AuthRequest<Partial<{ oldPassword: string; newPassword: string }>>,
  res: Response
) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.user._id;

    if (
      oldPassword === undefined ||
      oldPassword === null ||
      newPassword === undefined ||
      newPassword === null
    ) {
      return res.status(400).json({
        message: "Old password or new password is missing or invalid",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the old password
    const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Incorrect old password" });
    }

    // Update the password
    const saltRounds = 10;
    user.password = await bcrypt.hash(newPassword, saltRounds);

    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const forgotPassword = async (
  req: AuthRequest<Partial<UserDocument>>,
  res: Response
) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a password reset token
    const min = Math.pow(10, 4 - 1);
    const max = Math.pow(10, 4) - 1;
    const token = Math.floor(Math.random() * (max - min + 1)) + min;
    const resetToken = token.toString();
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = (Date.now() + 3600000).toString(); // Token expires in 1 hour

    await user.save();

    // TODO: Send a password reset email with resetToken to the user
    await sendPasswordResetEmail(user);

    res.status(200).json({ message: "Password reset email sent successfully" });
  } catch (error) {
    console.error("Error sending password reset email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const resetPassword = async (
  req: AuthRequest<Partial<UserDocument>>,
  res: Response
) => {
  try {
    const { token, password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid or expired reset token" });
    }

    // Set the new password
    if (password !== undefined) {
      user.password = password;
      user.resetPasswordToken = "";
      user.resetPasswordExpires = "";
    }

    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAccount = async (
  req: AuthRequest<Partial<{ oldPassword: string }>>,
  res: Response
) => {
  try {
    const userId = req.user._id;
    const { oldPassword } = req.body;

    if (!oldPassword) {
      return res.status(400).json({ message: "Password is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the old password
    const isPasswordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Error deleting account:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// routes end here

// emails herer //

async function sendVerificationEmail(user: UserDocument): Promise<void> {
  let mailDetails = {
    from: {
      name: "Martiful Services",
      address: "NonReply@Martiful.com",
    },
    to: user.email,
    subject: "VERIFY YOUR ACCOUNT",
    html:
      verifyEmailTemplate(user.firstName, user.verificationToken) || undefined,
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

async function sendWelcomeEmail(user: UserDocument): Promise<void> {
  let mailDetails = {
    from: {
      name: "Martiful Services",
      address: "NonReply@Martiful.com",
    },
    to: user.email,
    subject: "WELCOME TO MARTIFUL SERVICES",
    html: welcomeEmailTemplate(user.firstName) || undefined,
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
    console.error("Error sending welcome email:", error);
  }
}

async function sendPasswordResetEmail(user: UserDocument): Promise<void> {
  let mailDetails = {
    from: {
      name: "Martiful Services",
      address: "NonReply@Martiful.com",
    },
    to: user.email,
    subject: "PASSWORD RESET TOKEN",
    html:
      verifyResetPasswordEmailTemplate(
        user.firstName,
        user.resetPasswordToken
      ) || undefined,
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
