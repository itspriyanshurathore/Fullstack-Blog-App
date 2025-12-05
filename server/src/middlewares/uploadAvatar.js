import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const avatarStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "avatars",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const uploadAvatar = multer({ storage: avatarStorage });

export default uploadAvatar;
