require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

const user = require("./routes/user");
const pitch = require("./routes/pitch");
const like = require("./routes/like");
const comment = require("./routes/comment");
const conversation = require("./routes/conversation");
const message = require("./routes/message");

app.use("/api/v1/users", user);
app.use("/api/v1/pitch", pitch);
app.use("/api/v1/like", like);
app.use("/api/v1/comment", comment);
app.use("/api/v1/conversation", conversation);
app.use("/api/v1/message", message);

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world!" });
});

exports.app = app;
