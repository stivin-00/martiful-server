// models/admin.ts

import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { AdminDocument } from "../types/admin";

const adminSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "superadmin"], default: "admin" },
});

adminSchema.pre<AdminDocument>("save", async function (next) {
  if (this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

const Admin = mongoose.model<AdminDocument>("Admin", adminSchema);

export default Admin;
