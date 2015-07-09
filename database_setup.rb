# Load/create our database for this program.
# This is the tunnel to the db
QUIZ = SQLite3::Database.new("quiz.db")

# Make the tables, if they don't already exist.
QUIZ.execute("CREATE TABLE IF NOT EXISTS qusetions (id INTEGER PRIMARY KEY, qustion TEXT, answer TEXT);")
QUIZ.execute("CREATE TABLE IF NOT EXISTS choices (id INTEGER PRIMARY KEY, choice TEXT, question_id INTEGER, FOREIGN KEY (question_id) REFERENCES questions(id));")

# Get results as an Array of Hashes.
QUIZ.results_as_hash = true
