// types/user.ts

import { Document } from "mongoose";

export interface UserDocument extends Document {
  userId: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  token: string;
  resetPasswordToken: string;
  resetPasswordExpires: string;
  password: string;
  isVerified: boolean;
  verificationToken: string;
}
