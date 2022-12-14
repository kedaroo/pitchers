exports.SELECT_CONVERSATION_BY_USER_IDS = `SELECT BIN_TO_UUID(id) AS id,
    BIN_TO_UUID(from_id) AS from_id, BIN_TO_UUID(to_id) AS to_id
    FROM conversations 
    WHERE from_id = UUID_TO_BIN(?) AND to_id = UUID_TO_BIN(?) OR
    from_id = UUID_TO_BIN(?) AND to_id = UUID_TO_BIN(?);`;

exports.CREATE_CONVERSATION = `INSERT INTO conversations 
    (id, from_id, to_id) VALUES (UUID_TO_BIN(?), UUID_TO_BIN(?), UUID_TO_BIN(?))`;

exports.GET_CONVERSATIONS_BY_USER_ID = `SELECT BIN_TO_UUID(id) AS id,
    BIN_TO_UUID(from_id) AS from_id, BIN_TO_UUID(to_id) AS to_id
    FROM conversations
    WHERE from_id = UUID_TO_BIN(?) OR to_id = UUID_TO_BIN(?);`;

// exports.GET_CONVERSATIONS_BY_USER_ID = `select BIN_TO_UUID(a.id) as id, 
//     BIN_TO_UUID(a.from_id) as from_id, 
//     BIN_TO_UUID(a.to_id) as to_id, b.name as from_name, b.name as to_name
//     from conversations a, users b where a.from_id = UUID_TO_BIN(?)
//     or a.to_id = UUID_TO_BIN(?);`;
