import sqlite3
from flask import Flask, jsonify
from flask_cors import CORS
from connection import connection

app = Flask(__name__)
CORS(app)
@app.route('/')
def pollList():
	conn = connection()
	cur = conn.cursor()
	cur.execute('SELECT * FROM polls')
	# Fetch all rows
	rows = cur.fetchall()
	# Convert Row objects to dictionaries
	polls = [dict(row) for row in rows]
	conn.close()
	return jsonify(polls)

if __name__ == '__main__':
	app.run(debug=True)  # Add any necessary host/port configurations
