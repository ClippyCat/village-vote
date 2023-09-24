-- Add up migration script here
CREATE TABLE IF NOT EXISTS question_type (
  id INTEGER NOT NULL PRIMARY KEY,
  name VARCHAR(32) NOT NULL
);

INSERT INTO question_type
  (id,name)
VALUES
  (1, 'Select'),
  (2, 'Multi-Select'),
  (3, 'Rank');
