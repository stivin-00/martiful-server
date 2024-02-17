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

export const createAdmin = async (
  req: AuthRequest<Partial<AdminDocument>>,
  res: Response
): Promise<any> => {
  try {
    const { username, email, password, role } = req.body;

    // Check if the user creating the admin is a superadmin
    if (req.user.role !== "superadmin") {
      return res.status(403).json({ message: "Permission denied" });
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
  } catch (error) {
    console.error("Error creating admin:", error);
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
