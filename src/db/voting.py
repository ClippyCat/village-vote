# voting.py
import sqlite3
from flask import Flask, jsonify
from flask_cors import CORS
from connection import connection

app = Flask(__name__)
CORS(app)

@app.route('/')
def voting():
    conn = connection()
    cur = conn.cursor()
    try:
        cur.execute('''
            SELECT Polls.title AS poll_title,
            Questions.type AS question_type, Questions.text AS question_text,
            GROUP_CONCAT(Options.text, '|') AS options_text
            FROM Polls
            JOIN Questions ON Polls.id = Questions.pollId
            LEFT JOIN Options ON Questions.id = Options.questionId
            GROUP BY Polls.title, Questions.id
        ''')
        
        rows = cur.fetchall()
        
        polls = []
        current_poll = None
        
        for row in rows:
            poll_title, question_type, question_text, options_text = row
            
            if not current_poll or current_poll['title'] != poll_title:
                current_poll = {
                    'title': poll_title,
                    'questions': []
                }
                polls.append(current_poll)
            
            question = {
                'text': question_text,
                'type': question_type
            }
            
            if options_text:
                options = options_text.split('|')
                question['options'] = options
            
            current_poll['questions'].append(question)
        
        conn.close()
        return jsonify(polls)
    
    except sqlite3.Error as e:
        print("Error fetching data:", e)
        conn.close()
        return jsonify({'error': 'Error fetching data'}), 500

if __name__ == '__main__':
    app.run(debug=True)  # Add any necessary host/port configurations
