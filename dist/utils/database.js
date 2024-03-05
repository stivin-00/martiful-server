"use strict";
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
exports.disconnectFromDatabase = exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
let connection = null;
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    if (connection) {
        console.log("Database connection already established");
        return connection;
    }
    try {
        const uri = "mongodb+srv://stivin:vivian2436@martiful.cmoufbr.mongodb.net/?retryWrites=true&w=majority";
        const options = {
            autoIndex: false,
        };
        connection = yield mongoose_1.default.createConnection(uri, options);
        if (connection) {
            console.log("Connected to the database");
        }
        return connection;
    }
    catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
});
exports.connectToDatabase = connectToDatabase;
const disconnectFromDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    if (connection) {
        yield mongoose_1.default.disconnect();
        console.log("Disconnected from the database");
        connection = null;
    }
});
exports.disconnectFromDatabase = disconnectFromDatabase;
//# sourceMappingURL=database.js.map