const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  createPitch,
  getAllPitches,
} = require("../controllers/pitchController");

router.route("/createPitch").post(auth, createPitch);
router.route("/getAllPitches").get(auth, getAllPitches);

module.exports = router;
