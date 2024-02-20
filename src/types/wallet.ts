// types/wallet.ts

import { Document } from "mongoose";

interface Wallet {
  user: string; // User reference
  walletId: string;
  balance: number;
  // Add other fields as needed
}

export interface WalletDocument extends Wallet, Document {}

export default Wallet;
