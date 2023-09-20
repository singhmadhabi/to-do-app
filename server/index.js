require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = +process.env.PORT || 3000;
const indexRouter = require("./routes");

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Database connected...");
});

app.use(cors());
app.use(express.json());
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  err = err.toString() || "Something went wrong...";
  res.status(500).json({ data: "", msg: err });
});

app.listen(port, () => {
  console.log("App running on port: ", port);
});
