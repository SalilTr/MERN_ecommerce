const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const env = require("dotenv").config();
const { comparePasswords, hashPassword } = require("../helpers/authHelper.js");

// Define the registerController
const registerController = async (req, res) => {
  try {
    // Extract user data from the request body
    const { name, email, password, phone, address, answer } = req.body;
    console.log(req.body);
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // You should hash the password before storing it
    const hashingPassword = await hashPassword(password);
    console.log(await hashPassword(password));
    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password: hashingPassword,
      phone,
      address,
      answer,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginController = async (req, res) => {
  try {
    // Extract user credentials from the request body
    const { email, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ email });
    console.log(user.password);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await comparePasswords(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = await JWT.sign(
      { _id: user._id },
      process.env.API_SECRET_KEY,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
const test = (req, res) => {
  console.log("testing of token");
  res.send("testing");
};

const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;

    // Validation
    if (!email || !answer || !newPassword) {
      return res
        .status(400)
        .json({ message: "Email, answer, and newPassword are required" });
    }

    const user = await User.findOne({ email: email, answer: answer });

    // Check if the user exists
    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found", success: false });
    }

    // Hash the newPassword
    const hashingPassword = await hashPassword(newPassword);

    // Update the user's password in the database
    await User.findByIdAndUpdate(user._id, { password: hashingPassword });

    res
      .status(200)
      .json({ message: "Password updated successfully", success: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      message: "Something went wrong",
      success: false,
      error: error.message,
    });
  }
};
module.exports = {
  registerController,
  loginController,
  test,
  forgotPasswordController,
};
