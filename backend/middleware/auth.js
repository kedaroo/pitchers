const { admin } = require("../config/firebase");
const connection = require("../config/database");
const { GET_USER_BY_EMAIL } = require("../services/userServices");
const internalServerError = require("../utils/internalServerError");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    const decodedToken = await admin.auth().verifyIdToken(token);

    if (decodedToken) {
      connection.query(
        GET_USER_BY_EMAIL,
        [decodedToken.email],
        (err, results) => {
          if (err) {
            console.error(err);
            return internalServerError(res);
          }

          if (results.length === 1) {
            req.user = results[0];
            return next();
          } else {
            return res
              .status(401)
              .json({ success: false, message: "Unauthorized" });
          }
        }
      );
    }
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

module.exports = auth;
