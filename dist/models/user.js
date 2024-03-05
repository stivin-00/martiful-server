"use strict";
// models/user.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mongoose_1 = __importStar(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const accountDetailsSchema = new mongoose_1.Schema({
    bankName: { type: String },
    accountNumber: { type: String },
    accountName: { type: String },
});
const userSchema = new mongoose_1.Schema({
    avatar: {
        public_id: { type: String },
        url: {
            type: String,
            default: "https://res.cloudinary.com/dxjprordi/image/upload/v1705143773/martiful/boy_a2szxc.png",
        },
    },
    firstName: { type: String, required: [true, "FirstName is required"] },
    lastName: { type: String, required: [true, "LastName is required"] },
    userName: {
        type: String,
        required: [true, "UserName is required"],
        unique: [true, "UserName already exists"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone Number is required"],
        trim: true,
    },
    referralCode: { type: String, default: null },
    isVerified: { type: Boolean, default: false },
    isSuspended: { type: Boolean, default: false },
    verificationToken: { type: String, default: null },
    resetPasswordToken: { type: String, default: null },
    resetPasswordExpires: { type: String, default: null },
    fcmToken: { type: String, default: null },
    accountDetails: [accountDetailsSchema], // Array of account details
}, {
    timestamps: true,
});
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.isModified("password")) {
            // Hash the password before saving
            const saltRounds = 10;
            this.password = yield bcrypt_1.default.hash(this.password, saltRounds);
        }
        if (this.isNew) {
            // Generate a four-digit verification token for new users
            this.verificationToken = generateRandomToken(4);
        }
        next();
    });
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
function generateRandomToken(length) {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    const token = Math.floor(Math.random() * (max - min + 1)) + min;
    return token.toString();
}
//# sourceMappingURL=user.js.map