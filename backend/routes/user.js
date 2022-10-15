const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  signup,
  updateRole,
  updateUser,
} = require("../controllers/userController");

router.route("/signup").post(signup);
router.route("/updateUser").post(auth, updateUser);
router.route("/updateRole").post(auth, updateRole);

module.exports = router;
