const connection = require("../config/database");
const {
  INSERT_COMMENT,
  GET_COMMENTS_BY_PITCH_ID,
} = require("../services/commentServices");
const { v4: uuidv4 } = require("uuid");
const internalServerError = require("../utils/internalServerError");

exports.insertComment = async (req, res) => {
  const { user_id, pitch_id, comment } = req.body;

  if (!user_id || !pitch_id || !comment) {
    return res.status(400).json({
      success: false,
      message: "Please send user_id, pitch_id and comment",
    });
  }

  try {
    const id = uuidv4();
    connection.query(
      INSERT_COMMENT,
      [id, user_id, pitch_id, comment],
      (err, results) => {
        if (err) {
          console.error(err);
          return internalServerError(res);
        }

        res.status(200).json({
          success: true,
          message: "comment inserted successfully",
        });
      }
    );
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};

exports.getCommentsByPitchId = async (req, res) => {
  const { pitch_id } = req.params;

  if (!pitch_id) {
    return res.status(400).json({
      success: false,
      message: "Please send a pitch_id",
    });
  }

  try {
    connection.query(GET_COMMENTS_BY_PITCH_ID, [pitch_id], (err, results) => {
      if (err) {
        console.error(err);
        return internalServerError(res);
      }

      res.status(200).json({
        success: true,
        message: "comments fetched successfully",
        comments: results,
      });
    });
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};
