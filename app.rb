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
# require_relative "models/beer.rb"
# require_relative "models/user.rb"
# require_relative "models/rating.rb"
# require_relative "models/brewery.rb"


# Controllers
# require_relative "controllers/main.rb"
# require_relative "controllers/beers.rb"
# require_relative "controllers/users.rb"
# require_relative "controllers/breweries.rb"