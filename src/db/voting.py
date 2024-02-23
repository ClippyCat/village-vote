# voting.py
import sqlite3
from flask import Flask, jsonify
from flask_cors import CORS
from connection import connection

app = Flask(__name__)
CORS(app)

@app.route('/list/')
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


@app.route('/poll/<id>')
def voting(id):
	conn = connection()
	cur = conn.cursor()
	current_poll = None
	try:
		cur.execute(f'''
			SELECT Polls.title AS poll_title,
			Questions.type AS question_type, Questions.text AS question_text,
			GROUP_CONCAT(Options.text, '|') AS options_text
			FROM Polls
			JOIN Questions ON Polls.id = Questions.pollId
			LEFT JOIN Options ON Questions.id = Options.questionId
			WHERE Polls.id = {id}
			GROUP BY Polls.title, Questions.id
		''')
		
		rows = cur.fetchall()
		
		current_poll = None
		
		for row in rows:
			poll_title, question_type, question_text, options_text = row
			
			if not current_poll or current_poll['title'] != poll_title:
				current_poll = {
					'title': poll_title,
					'questions': []
				}
			
			question = {
				'text': question_text,
				'type': question_type
			}
			
			if options_text:
				options = options_text.split('|')
				question['options'] = options
			
			current_poll['questions'].append(question)
		
		conn.close()
		return jsonify(current_poll)
	
	except sqlite3.Error as e:
		print("Error fetching data:", e)
		conn.close()
		return jsonify({'error': 'Error fetching data'}), 500


@app.route('/create', methods=['POST'])
def create_poll():
    try:
        data = request.get_json()
        print("Received data:", data)
        # Return a success message or status code
        return jsonify({"message": "Poll data received and processed successfully"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
	app.run(debug=True)
