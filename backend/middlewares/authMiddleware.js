const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");

// Middleware function for JWT verification (protected route)
const requireSignIn = (req, res, next) => {
  // Get the token from the request headers (commonly in the 'Authorization' header)
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Verify the token using the secret key
  const decode = jwt.verify(token, process.env.API_SECRET_KEY);

  // If the token is valid, attach the decoded user information to the request object
  req.user = decode;
  // AUTH USER IS JUST A VARIABLE U CAN TAKE ANYTHING
  console.log(decode);
  next();
};

//admin acceess
const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    console.log(user.role);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};

module.exports = { requireSignIn, isAdmin };
