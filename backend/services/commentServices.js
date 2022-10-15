exports.INSERT_COMMENT = `INSERT INTO comments 
    (id, user_id, pitch_id, comment) 
    VALUES (UUID_TO_BIN(?), UUID_TO_BIN(?), UUID_TO_BIN(?), ?);`;

exports.GET_COMMENTS_BY_PITCH_ID = `SELECT BIN_TO_UUID(id) AS id,
    BIN_TO_UUID(user_id) AS user_id, BIN_TO_UUID(pitch_id) AS pitch_id, 
    comment, created_at FROM comments WHERE pitch_id = UUID_TO_BIN(?);`;
