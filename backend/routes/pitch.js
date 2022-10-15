const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const { createPitch } = require("../controllers/pitchController");

router.route("/createPitch").post(createPitch);

module.exports = router;
