const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  insertComment,
  getCommentsByPitchId,
} = require("../controllers/commentController");

router.route("/insertComment").post(auth, insertComment);
router.route("/getCommentsByPitchId/:pitch_id").get(auth, getCommentsByPitchId);

module.exports = router;
