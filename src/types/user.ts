import { Document } from "mongoose";

interface AccountDetail {
  bankName: string;
  accountNumber: string;
  accountName: string;
}

export interface UserDocument extends Document {
  userId: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  token: string;
  phoneNumber: string;
  avatar: {
    public_id: string;
    url: string;
  }
  resetPasswordToken: string;
  resetPasswordExpires: string;
  password: string;
  isVerified: boolean;
  isSuspended: boolean;
  verificationToken: string;
  accountDetails: AccountDetail[];
  createdAt: Date;
}
