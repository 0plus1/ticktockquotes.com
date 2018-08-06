# Convert the quote CSV file compiled here: This files comes from: https://www.instructables.com/id/Literary-Clock-Made-From-E-reader/
# To a pretty json file to be consumed by the react app
# Usage: python csvToJson.py

import json
import os.path
from datetime import timedelta, datetime

CSV_INPUT_FILE = './litclock_annotated.csv'
MINUTES_IN_A_DAY = 60*24

if not os.path.exists(CSV_INPUT_FILE):
    exit('{} is missing'.format(CSV_INPUT_FILE))

csvfile = open(CSV_INPUT_FILE, 'r')
jsonfile = open('./../src/quotes.json', 'w')
reportfile = open('./../report.md', 'w')

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

# Let's parse and check if we have all the required times
now = datetime(2018,1,1,0,0)
end = now + timedelta(hours=24)
missing_quotes = []
while now <= end:
    if now.strftime("%H:%M") not in quotesDictionary:
        missing_quotes.append(now.strftime("%H:%M"))
    now += timedelta(minutes=1)

reportfile.write('# Missing quotes\n')
reportfile.write('#### We are missing {} quotes: {}%\n\n'.format(len(missing_quotes), round(100 * float(len(missing_quotes))/float(MINUTES_IN_A_DAY), 2)))

for missing_quote in missing_quotes:
    reportfile.write('* {}\n'.format(missing_quote))

exit()