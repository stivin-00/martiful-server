// middleware/authMiddleware.ts

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";
import AuthRequest from "../types/request";
import { verifyToken } from "../utils/tokenUtils";
import { AdminDocument } from "admin";

interface DecodedToken {
  userId: string;
}

export const authenticateUser = async (
  req: AuthRequest<Record<string, any>>,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    // Get the token from the request header
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ message: "Authentication failed. Token not provided." });
    }

    const decoded = jwt.verify(token, "your-secret-key") as DecodedToken;

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res
        .status(401)
        .json({ message: "Authentication failed. User not found." });
    }

    req.user = user; // Attach the user to the request object
    next();
  } catch (error: any) {
    console.error("Authentication error:", error.message);
    res.status(401).json({ message: "Authentication failed. Invalid token." });
  }
};

export const authenticateAdmin = (
  req: AuthRequest<Partial<AdminDocument>>,
  res: Response,
  next: NextFunction
): any => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Missing token" });
  }

  try {
    const decoded = verifyToken(token);
    req.admin = decoded;
    next();
  } catch (error) {
    console.error("Error authenticating admin:", error);
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

