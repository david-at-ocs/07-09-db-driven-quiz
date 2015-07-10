require "active_support"
require "active_support/core_ext/object/blank"
require "sinatra"
require "sinatra/reloader"
require "pry"

# -------------------------------------------------------------------------------------------------------------------
# SQL/Database
require "sqlite3"
require_relative "database_setup.rb"

# Models
require_relative "models/question.rb"


# Controllers
require_relative "controllers/main.rb"