// models/admin.ts

import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { AdminDocument } from "../types/admin";

const adminSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verificationToken: { type: String, default: null },
  role: { type: String, enum: ["admin", "superadmin"], default: "admin" },
});

adminSchema.pre<AdminDocument>("save", async function (next) {
  if (this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  if (this.isNew) {
    // Generate a four-digit verification token for new users
    this.verificationToken = generateRandomToken(6);
  }

  next();
});

const Admin = mongoose.model<AdminDocument>("Admin", adminSchema);

export default Admin;

function generateRandomToken(length: number): string {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  const token = Math.floor(Math.random() * (max - min + 1)) + min;
  return token.toString();
}
