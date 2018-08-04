# Convert the quote CSV file compiled here: This files comes from: https://www.instructables.com/id/Literary-Clock-Made-From-E-reader/
# To a pretty json file to be consumed by the react app
# Usage: python csvToJson.py

import json
import os.path

CSV_INPUT_FILE = './litclock_annotated.csv'

if not os.path.exists(CSV_INPUT_FILE):
    exit('{} is missing'.format(CSV_INPUT_FILE))

csvfile = open(CSV_INPUT_FILE, 'r')
jsonfile = open('./../src/quotes.json', 'w')

quotesDictionary={}

for line in csvfile:
    # This "csv" file is split by |
    csv_line = line.rstrip().split('|')
    # List contains ['time','highlight','quote','publication','author']
    time = csv_line[0]
    if time not in quotesDictionary:
        quotesDictionary[time] = []
    csv_line.pop(0)
    quotesDictionary[time].append(csv_line)

json.dump(quotesDictionary, jsonfile, indent=2, sort_keys=True)