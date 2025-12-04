const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (user) => jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ msg: "User already exists" });

  const user = await User.create({ name, email, password, role });
  res.status(201).json({ token: generateToken(user), role: user.role });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) return res.status(401).json({ msg: "Invalid credentials" });

  res.json({ token: generateToken(user), role: user.role });
};
