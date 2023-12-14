const mongoose = require("mongoose");
const env = require("dotenv").config();

mongoose.set("strictQuery", false);

const main = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

main();

module.exports = main;
