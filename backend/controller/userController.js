import User from "../models/User.js";
import ApiResponse from "../utils/apiResponse.js";
import jwt from "jsonwebtoken";
async function getAllUsers(req, res) {
  const users = await User.find();
  res.status(200).json(new ApiResponse(users, "list of all users", 200));
}

async function registerUser(req, res) {
  const { name, password, email } = req.body;
  const user = new User({ name, password, email });
  const response = await user.save();
  res.status(200).json(new ApiResponse(response, "user added", 200));
}

async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  user.hello();
  // const resp = await bcrypt.compare(password, user.password);
  const resp = await user.validatePassword(password);
  console.log(resp);
  if (resp) {
    res.status(200).json(new ApiResponse(user, "userloggedin", 200));
  } else {
    res.status(500).json(new ApiResponse(user, "invalid", 500));
  }
}

export { getAllUsers, registerUser, login };
