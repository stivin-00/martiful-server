// models/user.ts

import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { UserDocument } from "../types/user"; // Import the UserDocument type

const accountDetailsSchema = new Schema({
  bankName: { type: String },
  accountNumber: { type: String},
  accountName: { type: String },
});

const userSchema = new Schema(
  {
    avatar: {
      public_id: { type: String },
      url: {
        type: String,
        default:
          "https://res.cloudinary.com/dxjprordi/image/upload/v1705143773/martiful/boy_a2szxc.png",
      },
    },
    firstName: { type: String, required: [true, "FirstName is required"] },
    lastName: { type: String, required: [true, "LastName is required"] },
    userName: {
      type: String,
      required: [true, "UserName is required"],
      unique: [true, "UserName already exists"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required"],
      trim: true,
    },
    referralCode: { type: String, default: null },
    isVerified: { type: Boolean, default: false },
    isSuspended: { type: Boolean, default: false },
    verificationToken: { type: String, default: null },
    resetPasswordToken: { type: String, default: null },
    resetPasswordExpires: { type: String, default: null },
    fcmToken: { type: String, default: null },
    accountDetails: [accountDetailsSchema], // Array of account details
  },

  {
    timestamps: true,
  }
);

userSchema.pre<UserDocument>("save", async function (next) {
  if (this.isModified("password")) {
    // Hash the password before saving
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  if (this.isNew) {
    // Generate a four-digit verification token for new users
    this.verificationToken = generateRandomToken(4);
  }

  next();
});

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;

function generateRandomToken(length: number): string {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  const token = Math.floor(Math.random() * (max - min + 1)) + min;
  return token.toString();
}
