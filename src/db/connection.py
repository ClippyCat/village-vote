import sqlite3

def connection():
	conn = sqlite3.connect('database.db')
	conn.row_factory = sqlite3.Row
	return conn
