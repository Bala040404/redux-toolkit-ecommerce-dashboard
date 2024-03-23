import { v2 as cloudinary } from "cloudinary";

import { config } from "dotenv";
config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

async function uploadToCloudinary(path) {
  //   console.log(path);
  const response = await cloudinary.uploader.upload(path, {
    folder: "Products dashboard",
    use_filename: true,
  });
  //   console.log(response);
  return response.url;
}

export default uploadToCloudinary;
