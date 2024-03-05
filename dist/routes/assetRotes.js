"use strict";
// routes/assetRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const asssetController_1 = require("../controllers/asssetController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const assetRouter = express_1.default.Router();
assetRouter.post("/", authMiddleware_1.authenticateAdmin, asssetController_1.createAsset);
assetRouter.get("/", asssetController_1.getAllAssets);
assetRouter.patch("/:id", authMiddleware_1.authenticateAdmin, asssetController_1.updateAsset);
assetRouter.delete("/:id", authMiddleware_1.authenticateAdmin, asssetController_1.deleteAsset);
assetRouter.get("/:name", asssetController_1.getAssetByName);
exports.default = assetRouter;
//# sourceMappingURL=assetRotes.js.map