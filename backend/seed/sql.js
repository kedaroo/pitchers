// users table
exports.dropUsersTableSQL = "DROP TABLE IF EXISTS users;";

exports.createUsersTableSQL = `CREATE TABLE users (
    id BINARY(16) PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    role VARCHAR(255) NOT NULL,
    bio TEXT,
    profile_picture VARCHAR(255),
    startup VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`;

// pitches table
exports.dropPitchesTableSQL = "DROP TABLE IF EXISTS pitches;";

exports.createPitchesTableSQL = `CREATE TABLE pitches (
    id BINARY(16) PRIMARY KEY,
    user_id BINARY(16) NOT NULL,
    category VARCHAR(255) NOT NULL,
    caption TEXT NOT NULL,
    public_id VARCHAR(255) NOT NULL,
    secure_url VARCHAR(255) NOT NULL,    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

// likes table
exports.dropLikesTableSQL = "DROP TABLE IF EXISTS likes;";

exports.createLikesTableSQL = `CREATE TABLE likes (
    id BINARY(16) PRIMARY KEY,
    user_id BINARY(16) NOT NULL,
    pitch_id BINARY(16) NOT NULL,
    isLike TINYINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  );`;

// comments table
exports.dropCommentsTableSQL = "DROP TABLE IF EXISTS comments;";

// select a.comment, b.name from comments a join users b on a.user_id = b.id;
exports.createCommentsTableSQL = `CREATE TABLE comments (
    id BINARY(16) PRIMARY KEY,
    user_id BINARY(16) NOT NULL,
    pitch_id BINARY(16) NOT NULL,
    comment TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;

// conversations table
exports.dropConversationsTableSQL = "DROP TABLE IF EXISTS conversations;";

exports.createConversationsTableSQL = `CREATE TABLE conversations (
    id BINARY(16) PRIMARY KEY,
    from_id BINARY(16) NOT NULL,
    to_id BINARY(16) NOT NULL
  );`;

// messages table
exports.dropMessagesTableSQL = "DROP TABLE IF EXISTS messages;";

exports.createMessagesTableSQL = `CREATE TABLE messages (
    id BINARY(16) PRIMARY KEY,
    conversation_id BINARY(16) NOT NULL,
    from_id BINARY(16) NOT NULL,
    to_id BINARY(16) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;
