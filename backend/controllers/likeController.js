const connection = require("../config/database");
const {
  INSERT_LIKE,
  DELETE_LIKE,
  GET_LIKES_USER_ID,
} = require("../services/likeServices");
const { v4: uuidv4 } = require("uuid");
const internalServerError = require("../utils/internalServerError");

exports.insertLike = async (req, res) => {
  const { user_id, pitch_id } = req.body;

  if (!user_id || !pitch_id) {
    return res.status(400).json({
      success: false,
      message: "Please send user_id and pitch_id",
    });
  }

  try {
    const id = uuidv4();
    const like = { id, user_id, pitch_id };
    connection.query(INSERT_LIKE, [id, user_id, pitch_id], (err, results) => {
      if (err) {
        console.error(err);
        return internalServerError(res);
      }

      res.status(200).json({
        success: true,
        message: "like inserted successfully",
        like,
      });
    });
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};

exports.deleteLike = async (req, res) => {
  const { user_id, pitch_id } = req.body;

  if (!user_id || !pitch_id) {
    return res.status(400).json({
      success: false,
      message: "Please send user_id and pitch_id",
    });
  }

  try {
    connection.query(DELETE_LIKE, [user_id, pitch_id], (err, results) => {
      if (err) {
        console.error(err);
        return internalServerError(res);
      }

      res.status(200).json({
        success: true,
        message: "like deleted successfully",
      });
    });
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};

exports.getLikesByUserId = async (req, res) => {
  const { user_id, pitch_id } = req.params;

  if (!user_id || !pitch_id) {
    return res.status(400).json({
      success: false,
      message: "Please send user_id and pitch_id",
    });
  }

  try {
    connection.query(GET_LIKES_USER_ID, [pitch_id, user_id], (err, results) => {
      if (err) {
        console.error(err);
        return internalServerError(res);
      }

      const isLike = results.length === 0 ? false : true;

      res.status(200).json({
        success: true,
        message: "like fetched successfully",
        isLike,
      });
    });
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};
