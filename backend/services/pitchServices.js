exports.CREATE_PITCH = `INSERT INTO pitches 
    (id, user_id, category, caption, public_id, secure_url) 
    VALUES (UUID_TO_BIN(?), UUID_TO_BIN(?), ?, ?, ?, ?);`;
