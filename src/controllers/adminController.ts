// controllers/adminController.ts

import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Admin from "../models/admin";
import { AdminDocument } from "../types/admin";
import { generateToken } from "../utils/tokenUtils";
import AuthRequest from "../types/request";
import { mailTransporter } from "../utils/email/email";

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

    // Hash the password
    const saltRounds = 10;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      // Rest of the code
      // Create the admin
      const newAdmin: AdminDocument = new Admin({
        username,
        email,
        password: hashedPassword,
        role,
      });
      await newAdmin.save();

      res.status(201).json({ message: "Admin created successfully" });
    } else {
      // Handle the case where password is undefined
      res.status(400).json({ message: "Password is required" });
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
  console.log("started admin");
  try {
    const { email } = req.body;
    const admin = await Admin.findOne({ email });

    if (!admin) {
      console.log("Admin not found");
      return res.status(401).json({ message: "Admin not found" });
    }

    // Generate a 6-digit verification code
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Save the verification code to the admin document
    admin.verificationCode = verificationCode;
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
    const { email, verificationCode } = req.body;
    const admin = await Admin.findOne({ email, verificationCode });

    if (!admin) {
      return res.status(401).json({ message: "Invalid verification code" });
    }

    // Generate a JWT token for the admin
    const token = generateToken({ email: admin.email, role: admin.role });

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error verifying admin login:", error);
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
<P>${admin.verificationCode}</P>
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
