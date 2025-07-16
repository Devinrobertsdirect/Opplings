-- Table: users
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- Table: qr_tokens
CREATE TABLE IF NOT EXISTS qr_tokens (
  id UUID PRIMARY KEY,
  is_claimed BOOLEAN DEFAULT false,
  claimed_by TEXT REFERENCES users(id),
  created_at TIMESTAMP DEFAULT now()
);

-- Table: opplings
CREATE TABLE IF NOT EXISTS opplings (
  id UUID PRIMARY KEY,
  owner_id TEXT REFERENCES users(id),
  qr_token_id UUID REFERENCES qr_tokens(id),
  element TEXT,
  rarity TEXT,
  personality TEXT,
  created_at TIMESTAMP DEFAULT now()
); 