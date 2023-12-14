const {
  registerController,
  loginController,
  test,
  forgotPasswordController,
} = require("../controlllers/authController");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware.js");
const express = require("express");

const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, test);

//PROTECTED ROUTES
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// PROTECTED ADMIN ROUTES
router.get("/user-auth", requireSignIn, isAdmin, (req, res) => {
  console.log("User Admin");
  res.status(200).send({ ok: true });
});

module.exports = router;
