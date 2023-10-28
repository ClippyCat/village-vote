-- Add up migration script here
CREATE TABLE IF NOT EXISTS option_type (
  id INTEGER NOT NULL PRIMARY KEY,
  name VARCHAR(32) NOT NULL,
  table_name VARCHAR(64) NOT NULL
);

INSERT INTO option_type
  (id,name, table_name)
VALUES
  (1, 'Text', 'text_option'),
  (2, 'Time', 'time_option');

CREATE TABLE IF NOT EXISTS text_option (
  id INTEGER NOT NULL PRIMARY KEY,
  text VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS time_option (
  id INTEGER NOT NULL PRIMARY KEY,
  year INTEGER NOT NULL,
  month INTEGER NOT NULL,
  day INTEGER NOT NULL,
  hour INTEGER NOT NULL,
  minute INTEGER NOT NULL,
  timezone_id INTEGER NOT NULL,
  calendar BOOLEAN NOT NULL
);
