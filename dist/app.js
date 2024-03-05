"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const uploadRouter_1 = __importDefault(require("./routes/uploadRouter"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const assetRotes_1 = __importDefault(require("./routes/assetRotes"));
const walletRoutes_1 = __importDefault(require("./routes/walletRoutes"));
const martiful_firebase_json_1 = __importDefault(require("./martiful-firebase.json"));
const uri = "mongodb+srv://stivin:vivian2436@martiful.cmoufbr.mongodb.net/?retryWrites=true&w=majority";
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("combined"));
app.use(body_parser_1.default.json());
// Connect to the database
mongoose_1.default.connect(uri).then(() => {
    console.log("Connected to the databasesssssss");
});
// Initialize Firebase Admin SDK
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(martiful_firebase_json_1.default),
});
// Routes
app.use("/api/admin", adminRoutes_1.default);
app.use("/api/auth", authRoutes_1.default);
app.use("/api/upload", uploadRouter_1.default);
app.use("/api/asset", assetRotes_1.default);
app.use("/api/wallet", walletRoutes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});
exports.default = app;
//# sourceMappingURL=app.js.map