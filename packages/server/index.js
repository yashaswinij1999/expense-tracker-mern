const express = require("express");
const app = express();

const mongoose = require("mongoose");

const connectDb = () => {};

app.listen(5000, () => {
  console.log("server connected");
});
