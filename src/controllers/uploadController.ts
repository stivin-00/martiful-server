import { Response, Request } from "express";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dxjprordi",
  api_key: "645649249743982",
  api_secret: "ZrkD5hrVM1AkTJBrSp0yg_x-7EE",
});

export const UploadFile = async (req: Request, res: Response) => {
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

  try {
    await cloudinary.uploader.upload_large(
      req.body.image,
      {
        public_id: `${Date.now()}`,
        resource_type: "auto", // jpeg, png
      },
      (error, result) => {
        if (result) {
          return res.status(201).json({
            result,
          });
        } else if (error) {
          return res.status(401).json({ error });
        }
      }
    );
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }


};
