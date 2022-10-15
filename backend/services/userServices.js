exports.CREATE_USER = `INSERT INTO users 
    (id, name, email, role, profile_picture) 
    VALUES (UUID_TO_BIN(?), ?, ?, ?, ?);`;
