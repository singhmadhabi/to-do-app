const express = require("express");
const mongoose = require("mongoose");
const app = express();
const indexRouter = require("./routes");

mongoose.connect("mongodb://127.0.0.1:27017//todoapp").then(() => {
  console.log("Database connected..");
});

app.use(express.json());

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err.toString() || "something went wrong...";
  res.status(500).json({ data: "", msg: err });
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
