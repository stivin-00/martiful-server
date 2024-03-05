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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFile = void 0;
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: "dxjprordi",
    api_key: "645649249743982",
    api_secret: "ZrkD5hrVM1AkTJBrSp0yg_x-7EE",
});
const UploadFile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let image_id = req.body.id;
    console.log(req.body.image);
    // remove previous image
    if (image_id) {
        cloudinary_1.v2.uploader.destroy(image_id, (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(result);
            }
        });
    }
    try {
        yield cloudinary_1.v2.uploader.upload_large(req.body.image, {
            public_id: `${Date.now()}`,
            resource_type: "auto", // jpeg, png
        }, (error, result) => {
            if (result) {
                return res.status(201).json({
                    result,
                });
            }
            else if (error) {
                return res.status(401).json({ error });
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.UploadFile = UploadFile;
//# sourceMappingURL=uploadController.js.map