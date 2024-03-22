"use strict";
// routes/walletRoutes.ts
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
const express_1 = __importDefault(require("express"));
const walletController_1 = require("../controllers/walletController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const transactionController_1 = require("../controllers/transactionController");
const walletRouter = express_1.default.Router();
walletRouter.post("/create", authMiddleware_1.authenticateUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wallet = yield (0, walletController_1.createWallet)(req.user._id);
        res.status(201).json({ wallet, message: "Wallet created successfully" });
    }
    catch (error) {
        console.error("Error creating wallet:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
walletRouter.get("/", authMiddleware_1.authenticateUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const wallet = yield (0, walletController_1.getWallet)(req.user._id);
        res.status(200).json({ wallet, message: "Wallet fetched successfully" });
    }
    catch (error) {
        console.error("Error fetching wallet:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
walletRouter.post("/deposit", authMiddleware_1.authenticateUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, image, coin, coinQty, rate, amountInUSD, ourWalletAddress, } = req.body;
        const transaction = yield (0, walletController_1.deposit)(req.user._id, amount, image, coin, coinQty, rate, amountInUSD, ourWalletAddress);
        if (transaction) {
            res.status(200).json({ transaction, message: "Deposit successful" });
        }
        else {
            res.status(400).json({ message: "error depositing to wallet" });
        }
    }
    catch (error) {
        console.error("Error depositing to wallet:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
walletRouter.post("/withdraw", authMiddleware_1.authenticateUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, bankName, accountNumber, accountName, password } = req.body;
        const transaction = yield (0, walletController_1.withdraw)(req.user._id, amount, bankName, accountNumber, accountName, password);
        if (transaction) {
            res.status(200).json({ transaction, message: "Withdrawal successful" });
        }
        else {
            res.status(400).json({ message: "Insufficient balance" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
walletRouter.get("/transactions", authMiddleware_1.authenticateUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactions = yield (0, transactionController_1.getTransactionHistory)(req.user._id);
        res.status(200).json({
            transactions,
            message: "Transaction history fetched successfully",
        });
    }
    catch (error) {
        console.error("Error fetching transaction history:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}));
// get single transaction by id
walletRouter.get("/transactions/:id", authMiddleware_1.authenticateUser, transactionController_1.getTransaction);
exports.default = walletRouter;
//# sourceMappingURL=walletRoutes.js.map