exports.CREATE_PITCH = `INSERT INTO pitches 
    (id, user_id, category, caption, public_id, secure_url) 
    VALUES (UUID_TO_BIN(?), UUID_TO_BIN(?), ?, ?, ?, ?);`;

exports.GET_ALL_PITCHES = `SELECT BIN_TO_UUID(id) AS id, 
    BIN_TO_UUID(user_id) AS user_id, category, caption, 
    secure_url, created_at FROM pitches;`;

exports.GET_PITCHES_BY_USER_ID = `SELECT BIN_TO_UUID(id) AS id, 
    BIN_TO_UUID(user_id) AS user_id, category, caption, 
    secure_url, created_at FROM pitches WHERE user_id = UUID_TO_BIN(?);`;
