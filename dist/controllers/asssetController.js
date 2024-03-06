"use strict";
// controllers/assetController.ts
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
exports.getAssetByName = exports.deleteAsset = exports.updateAsset = exports.getAllAssets = exports.createAsset = void 0;
const assets_1 = __importDefault(require("../models/assets"));
const user_1 = __importDefault(require("../models/user"));
const notification_1 = require("../utils/notification");
const createAsset = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, image, qrcode, rate, walletAddress } = req.body;
        const newAsset = new assets_1.default({
            name,
            image,
            qrcode,
            rate,
            walletAddress,
        });
        yield newAsset.save();
        res
            .status(201)
            .json({ message: "Asset created successfully", asset: newAsset });
    }
    catch (error) {
        console.error("Error creating asset:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.createAsset = createAsset;
const getAllAssets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const assets = yield assets_1.default.find();
        res.status(200).json({ assets, message: "Assets fetched successfully" });
    }
    catch (error) {
        console.error("Error fetching assets:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getAllAssets = getAllAssets;
const updateAsset = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, image, qrcode, rate, walletAddress } = req.body;
        const updatedAsset = yield assets_1.default.findByIdAndUpdate(id, { name, image, qrcode, rate, walletAddress }, { new: true });
        const title = `New rate for ${name}`;
        const body = `Trade ${name} now at ₦${rate}/USD and enjoy your profits!`;
        // Retrieve all users with FCM tokens
        const users = yield user_1.default.find({ fcmToken: { $ne: null } });
        // Send push notifications to all users
        yield Promise.all(users.map((user) => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, notification_1.sendPushNotification)(user.fcmToken, title, body);
        })));
        res
            .status(200)
            .json({ message: "Asset updated successfully", asset: updatedAsset });
    }
    catch (error) {
        console.error("Error updating asset:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.updateAsset = updateAsset;
const deleteAsset = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield assets_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: "Asset deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting asset:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.deleteAsset = deleteAsset;
// get single asset by name
const getAssetByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const asset = yield assets_1.default.findOne({ name });
        res.status(200).json({ asset, message: "Asset fetched successfully" });
    }
    catch (error) {
        console.error("Error fetching asset:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getAssetByName = getAssetByName;
//# sourceMappingURL=asssetController.js.map