const {
  createCommentsTableSQL,
  createConversationsTableSQL,
  createLikesTableSQL,
  createMessagesTableSQL,
  createPitchesTableSQL,
  createUsersTableSQL,
  dropCommentsTableSQL,
  dropConversationsTableSQL,
  dropLikesTableSQL,
  dropMessagesTableSQL,
  dropPitchesTableSQL,
  dropUsersTableSQL,
} = require("./sql");

const mysql = require("mysql2/promise");
require("dotenv").config();

const { DATABASE_URL } = process.env;

const seedSchema = async () => {
  const connection = await mysql.createConnection(DATABASE_URL);
  console.log("Connection to db successful!");

  try {
    await connection.query(dropUsersTableSQL);
    console.log("***dropped users table***");

    await connection.query(dropPitchesTableSQL);
    console.log("***dropped pitches table***");

    await connection.query(dropMessagesTableSQL);
    console.log("***dropped messages table***");

    await connection.query(dropLikesTableSQL);
    console.log("***dropped likes table***");

    await connection.query(dropConversationsTableSQL);
    console.log("***dropped conversations table***");

    await connection.query(dropCommentsTableSQL);
    console.log("***dropped comments table***");

    await connection.query(createUsersTableSQL);
    console.log("***created users table***");

    await connection.query(createPitchesTableSQL);
    console.log("***created pitches table***");

    await connection.query(createMessagesTableSQL);
    console.log("***add constraint to messages table***");

    await connection.query(createLikesTableSQL);
    console.log("***created likes table***");

    await connection.query(createConversationsTableSQL);
    console.log("***created conversations table***");

    await connection.query(createCommentsTableSQL);
    console.log("***created comments table***");
  } catch (err) {
    console.log(err);
  }
};

seedSchema()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });
