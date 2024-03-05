"use strict";
// routes/upload
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadController_1 = require("../controllers/uploadController");
const uploadRouter = express_1.default.Router();
uploadRouter.post("/uploadImage", uploadController_1.UploadFile);
exports.default = uploadRouter;
//# sourceMappingURL=uploadRouter.js.map