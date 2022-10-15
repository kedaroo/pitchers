const connection = require("../config/database");
const {
  SELECT_CONVERSATION_BY_USER_IDS,
  GET_CONVERSATIONS_BY_USER_ID,
  CREATE_CONVERSATION,
} = require("../services/conversationServices");
const { v4: uuidv4 } = require("uuid");
const internalServerError = require("../utils/internalServerError");

exports.insertConversation = async (req, res) => {
  const { from_id, to_id } = req.body;

  if (!from_id || !to_id) {
    return res.status(400).json({
      success: false,
      message: "Please send from_id and to_id",
    });
  }

  try {
    connection.query(
      SELECT_CONVERSATION_BY_USER_IDS,
      [from_id, to_id, to_id, from_id],
      (err, results) => {
        if (err) {
          console.error(err);
          return internalServerError(res);
        }

        if (results.length === 0) {
          const id = uuidv4();
          connection.query(
            CREATE_CONVERSATION,
            [id, from_id, to_id],
            (err, results) => {
              if (err) {
                console.error(err);
                return internalServerError(res);
              }

              return res.status(200).json({
                success: true,
                message: "conversation inserted successfully",
              });
            }
          );
        } else {
          return res.status(200).json({
            success: true,
            message: "converation already present",
          });
        }
      }
    );
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};

exports.getConversationsByUserId = async (req, res) => {
  const { user_id } = req.params;

  if (!user_id) {
    return res.status(400).json({
      success: false,
      message: "Please send user_id",
    });
  }

  try {
    connection.query(
      GET_CONVERSATIONS_BY_USER_ID,
      [user_id, user_id],
      (err, results) => {
        if (err) {
          console.error(err);
          return internalServerError(res);
        }

        const newResult = results.map()

        res.status(200).json({
          success: true,
          message: "like fetched successfully",
          conversations: results,
        });
      }
    );
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};
