import sqlite3

connection = sqlite3.connect('database.db')

with open('schema.sql') as f:
	connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO polls (title) VALUES (?)",
			('First poll',)  # Need to pass a tuple even with one value
			)

cur.execute("INSERT INTO polls (title) VALUES (?)",
			('Second poll',)  # Need to pass a tuple even with one value
			)

connection.commit()
connection.close()
