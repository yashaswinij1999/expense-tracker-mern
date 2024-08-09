const express = require("express");
const app = express();

const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Yashu:Yashu123@cluster0.rbr83rj.mongodb.net/expense-tracker"
    );
    console.log("db connected");
  } catch (error) {
    console.log("failed to connect db");
  }
};

connectDb();

app.listen(5000, () => {
  console.log("server connected");
});
