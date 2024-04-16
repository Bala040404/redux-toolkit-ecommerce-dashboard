import mongoose, { Schema } from "mongoose";
import User from "./User.js";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
