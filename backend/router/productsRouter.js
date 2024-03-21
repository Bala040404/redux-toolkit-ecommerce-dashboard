import express from "express";
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
  .post(asyncHandler(addProduct));

productRouter
  .route("/:id")
  .get(asyncHandler(viewProduct))
  .patch(asyncHandler(editProduct))
  .delete(asyncHandler(deleteProduct));

export default productRouter;
