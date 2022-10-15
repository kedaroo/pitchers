const connection = require("../config/database");
const {
  GET_MESSAGES_BY_CONVERSATION_ID,
  INSERT_MESSAGE,
} = require("../services/messageServices");
const { v4: uuidv4 } = require("uuid");
const internalServerError = require("../utils/internalServerError");

exports.insertMessage = async (req, res) => {
  const { conversation_id, from_id, to_id, message } = req.body;

  if (!from_id || !to_id || !conversation_id || !message) {
    return res.status(400).json({
      success: false,
      message: "Please send conversation_id, message, from_id and to_id",
    });
  }

  try {
    const id = uuidv4();
    connection.query(
      INSERT_MESSAGE,
      [id, conversation_id, from_id, to_id, message],
      (err, results) => {
        if (err) {
          console.error(err);
          return internalServerError(res);
        }

        return res.status(200).json({
          success: true,
          message: "message inserted successfully",
        });
      }
    );
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};

exports.getMessagesByConversationId = async (req, res) => {
  const { conversation_id } = req.params;

  if (!conversation_id) {
    return res.status(400).json({
      success: false,
      message: "Please send conversation_id",
    });
  }

  try {
    connection.query(
      GET_MESSAGES_BY_CONVERSATION_ID,
      [conversation_id],
      (err, results) => {
        if (err) {
          console.error(err);
          return internalServerError(res);
        }

        res.status(200).json({
          success: true,
          message: "messages fetched successfully",
          messages: results,
        });
      }
    );
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};
