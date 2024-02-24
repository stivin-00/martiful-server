// utils/tokenUtils.ts

import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key"; // Change this to a secure secret key

export const generateToken = (data: any): string => {
  return jwt.sign(data, SECRET_KEY, { expiresIn: "8h" });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, SECRET_KEY);
};
