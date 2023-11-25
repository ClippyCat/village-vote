import sqlite3
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
def get_db_connection():
	conn = sqlite3.connect('database.db')
	conn.row_factory = sqlite3.Row
	return conn

@app.route('/')

@app.route('/')
def create():
	conn = get_db_connection()
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
