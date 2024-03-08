import express, { Application, NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import admin from 'firebase-admin';
import authRouter from "./routes/authRoutes";
import uploadRouter from "./routes/uploadRouter";
import adminRouter from "./routes/adminRoutes";
import assetRouter from "./routes/assetRotes";
import walletRouter from "./routes/walletRoutes";
import serviceAccount from './martiful-firebase.json'
const uri =
  "mongodb+srv://stivin:vivian2436@martiful.cmoufbr.mongodb.net/?retryWrites=true&w=majority";

const app: Application = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use(bodyParser.json());

// Connect to the database
mongoose.connect(uri).then(() => {
  console.log("Connected to the databass");
});

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

// Routes

app.use("/api/admin", adminRouter);
app.use("/api/auth", authRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/asset", assetRouter);
app.use("/api/wallet", walletRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

export default app;
