"use strict";
// middleware/authMiddleware.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateAdmin = exports.authenticateUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const tokenUtils_1 = require("../utils/tokenUtils");
const authenticateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // Get the token from the request header
        const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        if (!token) {
            return res
                .status(401)
                .json({ message: "Authentication failed. Token not provided." });
        }
        const decoded = jsonwebtoken_1.default.verify(token, "your-secret-key");
        const user = yield user_1.default.findById(decoded.userId);
        if (!user) {
            return res
                .status(401)
                .json({ message: "Authentication failed. User not found." });
        }
        req.user = user; // Attach the user to the request object
        next();
    }
    catch (error) {
        console.error("Authentication error:", error.message);
        res.status(401).json({ message: "Authentication failed. Invalid token." });
    }
});
exports.authenticateUser = authenticateUser;
const authenticateAdmin = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Missing token" });
    }
    try {
        const decoded = (0, tokenUtils_1.verifyToken)(token);
        req.admin = decoded;
        next();
    }
    catch (error) {
        console.error("Error authenticating admin:", error);
        res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};
exports.authenticateAdmin = authenticateAdmin;
//# sourceMappingURL=authMiddleware.js.map