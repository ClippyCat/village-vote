-- Add up migration script here
CREATE TABLE IF NOT EXISTS question (
  id INTEGER NOT NULL PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  question_type REFERENCES question_type(id)
);
