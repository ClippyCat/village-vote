import sqlite3
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
def connection():
	conn = sqlite3.connect('database.db')
	conn.row_factory = sqlite3.Row
	return conn
