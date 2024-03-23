import express from "express";
// import multer from "multer";

// const upload = multer({ dest: "../uploads" });
import { upload } from "../middleware/multer.js";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProduct,
  viewProduct,
} from "../controller/productController.js";
import asyncHandler from "../utils/asyncHandler.js";
const productRouter = express.Router();

productRouter
  .route("/")
  .get(asyncHandler(getProduct))
  .post(upload.single("image"), asyncHandler(addProduct));

productRouter
  .route("/:id")
  .get(asyncHandler(viewProduct))
  .patch(asyncHandler(editProduct))
  .delete(asyncHandler(deleteProduct));

export default productRouter;
