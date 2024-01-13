// routes/upload

import express from "express";
import { UploadFile } from "../controllers/uploadController";

const uploadRouter = express.Router();

uploadRouter.post("/uploadImage", UploadFile);

export default uploadRouter;
