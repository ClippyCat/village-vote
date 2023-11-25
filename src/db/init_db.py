import sqlite3
import json

# Read data from the JSON file
with open('data.json') as json_file:
	data = json.load(json_file)

init = sqlite3.connect('database.db')
with open('schema.sql') as f:
	init.executescript(f.read())

cur = init.cursor()

# Insert the poll title into the Polls table
poll_title = data["title"]
cur.execute('INSERT INTO Polls (title) VALUES (?)', (poll_title,))

# Retrieve the last inserted poll ID
poll_id = cur.lastrowid

# Iterate over questions in the JSON data and insert into Questions table
for question in data["questions"]:
	question_type = question["type"]
	question_text = question["text"]
	cur.execute('INSERT INTO Questions (pollId, type, text) VALUES (?, ?, ?)', (poll_id, question_type, question_text))
	question_id = cur.lastrowid
	# Insert options for each question into the Options table
	if "options" in question:
		options = question["options"]
		options_data = [(question_id, option) for option in options]
		cur.executemany('INSERT INTO Options (questionId, text) VALUES (?, ?)', options_data)

###
# Retrieve and print data from the Polls table
cur.execute('SELECT * FROM Polls')
polls_data = cur.fetchall()
print("Polls Table:")
for poll in polls_data:
    print(poll)

# Retrieve and print data from the Questions table
cur.execute('SELECT * FROM Questions')
questions_data = cur.fetchall()
print("\nQuestions Table:")
for question in questions_data:
    print(question)

# Retrieve and print data from the Options table
cur.execute('SELECT * FROM Options')
options_data = cur.fetchall()
print("\nOptions Table:")
for option in options_data:
    print(option)
# Commit changes and close connection
init.commit()
init.close()
