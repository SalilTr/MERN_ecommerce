// bcryptUtils.js

const bcrypt = require("bcrypt");
const saltRounds = 10; // Number of salt rounds (higher value is more secure but slower)

// Function to hash a password
const hashPassword = async (password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    throw error;
  }
};

// Function to compare a password with a hashed password
const comparePasswords = async (password, hashedPassword) => {
  try {
    const result = await bcrypt.compare(password, hashedPassword);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  hashPassword,
  comparePasswords,
};
