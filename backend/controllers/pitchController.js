const connection = require("../config/database");
const {
  CREATE_PITCH,
  GET_ALL_PITCHES,
  GET_PITCHES_BY_USER_ID,
} = require("../services/pitchServices");
const { v4: uuidv4 } = require("uuid");
const internalServerError = require("../utils/internalServerError");
const cloudinary = require("cloudinary");

exports.createPitch = async (req, res) => {
  const { user_id, category, caption } = req.body;

  if (!user_id || !category) {
    return res.status(400).json({
      success: false,
      message: "Please send user_id and category",
    });
  }

  if (!req.files) {
    return res.status(400).json({
      success: false,
      message: "Please send a valid pitch video",
    });
  }

  try {
    let pitchFile = req.files.pitch;
    const result = await cloudinary.v2.uploader.upload(pitchFile.tempFilePath, {
      transformation: { quality: 50 },
      folder: "pitches_v1",
      resource_type: "video",
    });
    const id = uuidv4();
    const public_id = result.public_id;
    const secure_url = result.secure_url;
    const pitch = { id, user_id, category, caption, public_id, secure_url };
    connection.query(
      CREATE_PITCH,
      [id, user_id, category, caption, public_id, secure_url],
      (err, results) => {
        if (err) {
          console.error(err);
          return internalServerError(res);
        }

        res.status(200).json({
          success: true,
          message: "pitch created successfully",
          pitch,
        });
      }
    );
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};

exports.getAllPitches = async (req, res) => {
  try {
    connection.query(GET_ALL_PITCHES, (err, results) => {
      if (err) {
        console.error(err);
        return internalServerError(res);
      }

      res.status(200).json({
        success: true,
        message: "pitch created successfully",
        pitches: results,
      });
    });
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};

exports.getPitchesByUserId = async (req, res) => {
  const { user_id } = req.params;

  if (!user_id) {
    return res.status(400).json({
      success: false,
      message: "Please send a valid user id",
    });
  }

  try {
    connection.query(GET_PITCHES_BY_USER_ID, [user_id], (err, results) => {
      if (err) {
        console.error(err);
        return internalServerError(res);
      }

      res.status(200).json({
        success: true,
        message: "pitch created successfully",
        pitches: results,
      });
    });
  } catch (err) {
    console.error(err);
    return internalServerError(res);
  }
};
