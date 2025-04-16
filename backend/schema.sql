CREATE EXTENSION IF NOT EXISTS "pgcrypto"
CREATE TABLE IF NOT EXISTS
    users(
      user_id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(),
      username VARCHAR(128) UNIQUE NOT NULL,
      password_hash VARCHAR(62) NOT NULL,
      last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

-- CREATE TABLE IF NOT EXISTS
--     objects(
--       object_id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(),
--       user_id UUID REFERENCES users(user_id) ON DELETE CASCADE,
--       name VARCHAR(128) NOT NULL,
--       description TEXT,
--       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- )