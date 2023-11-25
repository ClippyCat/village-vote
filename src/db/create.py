import sqlite3
from flask import Flask, jsonify
from flask_cors import CORS
from connection import connection

@app.route('/')
def create():
	conn = connection()
	cursor = conn.cursor()
