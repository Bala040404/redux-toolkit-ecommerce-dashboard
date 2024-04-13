import express from "express";
import asyncHandler from "../utils/asyncHandler.js";
import {
  getAllUsers,
  registerUser,
  login,
} from "../controller/userController.js";

const userRouter = express.Router();

userRouter
  .route("/")
  .get(asyncHandler(getAllUsers))
  .post(asyncHandler(registerUser));

userRouter.route("/login").post(asyncHandler(login));

export default userRouter;
