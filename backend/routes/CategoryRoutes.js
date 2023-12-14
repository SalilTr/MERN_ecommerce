const express = require("express");
const { isAdmin, requireSignIn } = require("../middlewares/authMiddleware.js");
const {
  updateCategoryController,
  categoryControlller,
  singleCategoryController,
  deleteCategoryCOntroller,

  createCategory,
} = require("../controlllers/CategoryController.js");

const router = express.Router();

// router.post(
//   "/create-category",
//   // requireSignIn,
//   // isAdmin,
//   ,(req,res)=>{
//     res.send("Welcome to the category")
//   }
// );
router.post(
  "/create-category",
  // requireSignIn,
  // isAdmin,
  (req, res) => {
    // You can add your category creation logic here.
    // For now, just send a welcome message.
    res.send("Welcome to the category");
  }
);
//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getALl category
router.get("/get-category", categoryControlller);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);
module.exports = router;
