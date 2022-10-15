const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const {
  insertMessage,
  getMessagesByConversationId,
} = require("../controllers/messageController");

router.route("/insertMessage").post(auth, insertMessage);
router
  .route("/getMessagesByConversationId/:conversation_id")
  .get(auth, getMessagesByConversationId);

module.exports = router;
