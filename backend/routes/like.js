const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  insertLike,
  deleteLike,
  getLikesByUserId,
} = require("../controllers/likeController");

router.route("/insertLike").post(auth, insertLike);
router.route("/deleteLike").delete(auth, deleteLike);
router.route("/getLikesByUserId/:pitch_id/:user_id").get(auth, getLikesByUserId);

module.exports = router;
