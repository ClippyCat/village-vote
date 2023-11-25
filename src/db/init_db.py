import sqlite3
import json

init = sqlite3.connect('database.db')

with open('schema.sql') as f:
	init.executescript(f.read())

cur = init.cursor()

cur.execute("INSERT INTO polls (title) VALUES (?)",
			('First poll',)  # Need to pass a tuple even with one value
			)

cur.execute("INSERT INTO polls (title) VALUES (?)",
			('Second poll',)  # Need to pass a tuple even with one value
			)

init.commit()
init.close()
