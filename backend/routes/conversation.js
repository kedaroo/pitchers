const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  insertConversation,
  getConversationsByUserId,
} = require("../controllers/conversationController");

router.route("/insertConversation").post(auth, insertConversation);
router
  .route("/getConversationByUserId/:user_id")
  .get(auth, getConversationsByUserId);

module.exports = router;
