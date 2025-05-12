//function
//handleer
//re, res, next
//async
//database integration

import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

async function registerUser(req, res, next) {
  //get values
  const { fname, email, password } = req.body;
  console.log(req.body);

  if (!fname || !email || !password) {
    return res.status(400).json({ message: "All Fields are Required !" });
  }
  const user = await User.create({
    fname,
    email,
    password,
  });
  if (!user) {
    return res.status(400).json({ message: "Failed To Create The User !" });
  }
  res.status(201).json({ message: "User Created  Successfully !", user: user });
}

async function userLogin(req, res, next) {
  const { email, password } = req.body;
  //check
  if (!password || !email) {
    return res.json({ message: "All Fileds Are Required !" });
  }

  //user get
  const user = await User.findone({ email: email });
  if (!user) {
    return req.json({ message: "User Not Found !" });
  }

  //verify password
  const isVerify = await user.comparePassword(password);
  if (!isVerify) {
    return res.status(400).json({ message: "Password is Invalid" });
  }

  const token = user.generateToken();

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 15,
    sameSite: "none",
  });

  return req.json({
    message: " User Login Successfully",
    user: user,
  });
}
//del user
async function delUser(req, res, next) {
  const { email } = req.user;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  res.json({
    message: "user data",
    user,
  });
}

export { registerUser, userLogin, delUser };
