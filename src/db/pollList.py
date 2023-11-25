import sqlite3
from flask import Flask, jsonify
from connection import connection

@app.route('/')
def pollList():
	conn = connection()
	cursor = conn.cursor()
	cursor.execute('SELECT * FROM polls')
	# Fetch all rows
	rows = cursor.fetchall()
	# Convert Row objects to dictionaries
	polls = [dict(row) for row in rows]
	conn.close()
	return jsonify(polls)

if __name__ == '__main__':
	app.run(debug=True)  # Add any necessary host/port configurations
