const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  createPitch,
  getAllPitches,
  getPitchesByUserId,
} = require("../controllers/pitchController");

router.route("/createPitch").post(auth, createPitch);
router.route("/getAllPitches").get(auth, getAllPitches);
router.route("/getPitchesByUserId/:user_id").get(auth, getPitchesByUserId);

module.exports = router;
