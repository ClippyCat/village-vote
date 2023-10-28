-- Add up migration script here
CREATE TABLE IF NOT EXISTS question_type (
  id INTEGER NOT NULL PRIMARY KEY,
  name VARCHAR(32) NOT NULL,
  table_name VARCHAR(64) NOT NULL
);

INSERT INTO question_type
  (id,name, table_name)
VALUES
  (1, 'Select', 'select_question'),
  (2, 'Multi-Select', 'multi_select_question'),
  (3, 'Rank', 'rank_question');

CREATE TABLE IF NOT EXISTS select_question (
  id INTEGER NOT NULL PRIMARY KEY,
  choices_count INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS multi_select_question (
  id INTEGER NOT NULL PRIMARY KEY,
  choices_count INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS rank_question (
  id INTEGER NOT NULL PRIMARY KEY,
  choices_count INTEGER NOT NULL
);
