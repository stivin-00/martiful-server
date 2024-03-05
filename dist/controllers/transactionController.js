"use strict";
// controllers/transactionController.ts
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
exports.getTransaction = exports.getTransactionHistory = void 0;
const transaction_1 = __importDefault(require("../models/transaction"));
const getTransactionHistory = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Find transactions related to the user's wallet by user id
        const transactions = yield transaction_1.default.find({ user: userId }).sort({
            createdAt: -1,
        });
        // Extract populated transactions
        const userTransactions = transactions
            .filter((transaction) => transaction.wallet !== null)
            .map((transaction) => transaction.toObject());
        return userTransactions;
    }
    catch (error) {
        console.error("Error fetching transaction history:", error);
        throw error;
    }
});
exports.getTransactionHistory = getTransactionHistory;
// get single transaction by id
const getTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield transaction_1.default.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({ message: "Transaction not found" });
        }
        res.status(200).json(transaction);
    }
    catch (error) {
        console.error("Error fetching transaction:", error);
    }
});
exports.getTransaction = getTransaction;
//# sourceMappingURL=transactionController.js.map