import User from "../model/userSchema.js";
import validator from "validator";
import { getToken, getToken1 } from "../model/token.js";
import bcrypt from "bcryptjs";
import wrapAsync from "../utils/wrapAsync.js";
export const registeration = async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = User.findOne({ email });
  if (existingUser.length) {
    return res.status(400).json({ message: "User already exist" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Enter valid email" });
  }
  if (password < 8) {
    return res.send.status(400).json({ message: "Enter valid password" });
  }
  let hashPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashPassword });
  let token = await getToken(user._id);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  return res.status(201).json(user);
};
export const logIn = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });
  if (user.length === 0) {
    return res.status(400).json({ message: "User not found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Incorrect password" });
  }
  let token = await getToken(user._id);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  return res.status(201).json({ message: "Log in successfully" });
};
export const logOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "logOut successful" });
  } catch (error) {
    console.log("logOut error");
    return res.status(500).json({ message: `LogOut error ${error}` });
  }
};

export const googleLogin = async (req, res) => {
  try {
    let { name, email } = req.body;
    console.log(name);
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
      });
    }

    let token = await getToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json(user);
  } catch (error) {
    console.log("googleLogin error");
    return res.status(500).json({ message: `googleLogin error ${error}` });
  }
};

export const adminLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      let token = await getToken1(email);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return res.status(201).json({ message: "Log in successfully" });
    }
    return res.status(401).json({ message: "Invalid email and password!" });
  } catch (err) {
    return res.status(504).json({ message: "Server Error" });
  }
};
