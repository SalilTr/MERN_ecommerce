const main = require("./db/configureDb.js");
const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const formidable = require("express-formidable");
const env = require("dotenv").config();

const app = express();
const colors = require("colors");
// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());
// Other middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(formidable());
// Load environment variables

// Import your routes
const router = require("./routes/authRoute.js");
const categoryRouter = require("./routes/CategoryRoutes.js");
const productRouter = require("./routes/productRoute.js");

// Define your routes
app.use("/api/v1/auth", router);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`.bgCyan.white);
});
