exports.INSERT_MESSAGE = `INSERT INTO messages 
    (id, conversation_id, from_id, to_id, message) 
    VALUES (UUID_TO_BIN(?), UUID_TO_BIN(?), UUID_TO_BIN(?), UUID_TO_BIN(?), ?);`;

exports.GET_MESSAGES_BY_CONVERSATION_ID = `SELECT BIN_TO_UUID(id) AS id,
    BIN_TO_UUID(conversation_id) AS conversation_id, 
    BIN_TO_UUID(from_id) AS from_id, 
    BIN_TO_UUID(to_id) AS to_id, 
    message, created_at FROM messages
    WHERE conversation_id = UUID_TO_BIN(?)
    ORDER BY created_at DESC;`;

