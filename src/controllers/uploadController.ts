import { Response, Request } from "express";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dxjprordi",
  api_key: "645649249743982",
  api_secret: "ZrkD5hrVM1AkTJBrSp0yg_x-7EE",
});

export const UploadFile = async (req: Request, res: Response) => {
  try {
    let image_id = req.body.id;
    // remove previous image
    if (image_id) {
      cloudinary.uploader.destroy(image_id, (err: any, result: any) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      });
    }

    // save new image
    let result = await cloudinary.uploader.upload_large(req.body.image, {
      public_id: `${Date.now()}`,
      resource_type: "auto", // jpeg, png
    });
    if (result) {
      return res.status(201).json({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
  } catch (error: any) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
