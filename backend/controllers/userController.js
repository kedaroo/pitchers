const connection = require("../config/database");
const {
  CREATE_USER,
  UPDATE_USER,
  UPDATE_ROLE,
} = require("../services/userServices");
const { v4: uuidv4 } = require("uuid");
const internalServerError = require("../utils/internalServerError");
const { admin } = require("../config/firebase");

exports.signup = async (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Please send a valid token",
    });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const id = uuidv4();
    const role = "user";
    const email = decodedToken.email;
    const user = { id, email };
    console.log(email);
    connection.query(CREATE_USER, [id, email, role], (err, results) => {
      if (err) {
        console.error(err);
        return internalServerError(res);
      }

      res.status(200).json({
        success: true,
        message: "user created",
        user,
      });
    });
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};

exports.updateUser = async (req, res) => {
  const { user_id, bio, startup, name, profile_picture } = req.body;

  if (!user_id) {
    return res.status(400).json({
      success: false,
      message: "Please send a valid user_id",
    });
  }

  try {
    connection.query(
      UPDATE_USER,
      [bio, startup, name, profile_picture, user_id],
      (err, results) => {
        if (err) {
          console.error(err);
          return internalServerError(res);
        }

        res.status(200).json({
          success: true,
          message: "user updated",
        });
      }
    );
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};

exports.updateRole = async (req, res) => {
  const { user_id } = req.body;

  if (!user_id) {
    return res.status(400).json({
      success: false,
      message: "Please send a valid user_id",
    });
  }

  try {
    connection.query(UPDATE_ROLE, ["investor", user_id], (err, results) => {
      if (err) {
        console.error(err);
        return internalServerError(res);
      }

      res.status(200).json({
        success: true,
        message: "user role updated",
      });
    });
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};
