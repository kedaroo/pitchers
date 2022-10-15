exports.CREATE_USER = `INSERT INTO users 
    (id, email, role) 
    VALUES (UUID_TO_BIN(?), ?, ?);`;

exports.GET_USER_BY_EMAIL = `SELECT * from users WHERE email = ?;`;

exports.UPDATE_USER = `UPDATE users SET bio = ?, startup = ?, name = ?, 
    profile_picture = ? WHERE id = UUID_TO_BIN(?);`;

exports.UPDATE_ROLE = `UPDATE users SET role = ? WHERE id = UUID_TO_BIN(?);`;
