require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const user = require("./routes/user");

app.use("/api/v1/users", user);

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world!" });
});

exports.app = app;
