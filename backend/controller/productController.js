import Product from "../models/Product.js";
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import uploadToCloudinary from "../utils/cloudinary.js";
import * as fs from "fs";

async function getProduct(req, res) {
  const products = await Product.find();
  res.status(200).json(new ApiResponse(products, "list of all proucts", 200));
}

async function addProduct(req, res) {
  //check if name ,price atc are present in req.body
  const path = req.file.path;

  const { name, price, category } = req.body;

  const image = await uploadToCloudinary(path);

  const newProduct = new Product({ name, price, category, image });
  const response = await newProduct.save();
  fs.unlinkSync(path);

  res.status(200).json(new ApiResponse(response, "product added", 200));
}

async function viewProduct(req, res) {
  const { id } = req.params;
  const prod = await Product.findById(id);
  if (!prod) {
    throw new ApiError(500, "no product with requested id");
  }
  res
    .status(200)
    .json(new ApiResponse(prod, "the product with the requested id", 200));
}

async function editProduct(req, res) {
  const { id } = req.params;
  const newProd = req.body;

  const response = await Product.findByIdAndUpdate(id, newProd);
  res.status(200).json(new ApiResponse(response, "product updated", 200));
}
async function deleteProduct(req, res) {
  const { id } = req.params;
  const response = await Product.findByIdAndDelete(id);
  if (!response) {
    throw new ApiError(500, "no product with requested id");
  }
  res
    .status(200)
    .json(
      new ApiResponse(
        response,
        "the product with the requested id is deleted",
        200
      )
    );
}

export { getProduct, addProduct, editProduct, viewProduct, deleteProduct };
