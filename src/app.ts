import express, { Application, NextFunction, Request, Response } from "express";
import mongoose, { ConnectOptions, Connection } from "mongoose";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import { connectToDatabase } from "./utils/database"; // Assuming you have a utility function for database connection
import authRouter from "./routes/authRoutes";
import uploadRouter from "./routes/uploadRouter";
import adminRouter from "./routes/adminRoutes";
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
  console.log("Connected to the database");
});

// Routes
app.get("/api/", (req, res) => {
  res.send(`
  <img align="center" border="0" src="https://res.cloudinary.com/balmai/image/upload/v1676460395/wallhaven-g82wqd-1_ihjta7.jpg"  style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: 100vh;float: none;width: 100vw; class="v-src-width v-src-max-width"/>
    
    `);
});
app.use("api/admin", adminRouter);
app.use("/api/auth", authRouter);
app.use("/api/upload", uploadRouter);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

export default app;
