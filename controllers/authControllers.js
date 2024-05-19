import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, name, password, confirmPassword } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res.status(409).json({
      message: "email has been already used! try using the new email",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Passwords does not match!",
    });
  }

  const newUser = new User({ email, password, name });
  await newUser.save();

  const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(201).json({
    token,
    newUser,
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.json({ token, user });
};
