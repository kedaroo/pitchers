exports.INSERT_LIKE = `INSERT INTO likes 
    (id, user_id, pitch_id, isLike) 
    VALUES (UUID_TO_BIN(?), UUID_TO_BIN(?), UUID_TO_BIN(?), 1);`;

exports.DELETE_LIKE = `DELETE FROM likes WHERE user_id = UUID_TO_BIN(?) 
    AND pitch_id = UUID_TO_BIN(?);`;

exports.GET_LIKES_USER_ID = `SELECT * FROM likes WHERE pitch_id = UUID_TO_BIN(?)
    AND user_id = UUID_TO_BIN(?);`;
