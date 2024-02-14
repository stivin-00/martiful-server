// types/admin.ts

import { Document } from "mongoose";

export interface AdminDocument extends Document {
  username: string;
  email: string;
  password: string;
  role: "admin" | "superadmin";
  verificationToken: string;
}
