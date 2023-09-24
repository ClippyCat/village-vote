-- Add up migration script here
CREATE TABLE IF NOT EXISTS poll (
  id INTEGER NOT NULL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
