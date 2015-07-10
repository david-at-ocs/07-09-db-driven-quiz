require_relative "../database_class_methods.rb"
require_relative "../database_instance_methods.rb"

class Question  
  attr_reader :id
  attr_accessor :question, :answer

  extend DatabaseClassMethods
  include DatabaseInstanceMethods
  
  # Initializes a new Beer object
  #
  # options - hash contianing
  #   - id          - int (primary key)
  #   - beer_name   - string
  #   - brewery_id  - int (foriegn key)
  #   - style_id    - int (foriegn key)
  #
  # Example:
  #   Movie.new({"id" => 4, "name" => "Tank 7", "brewery_id" => 7, "style_id" => 3})
  #
  # Returns a Beer object
  def initialize(options = {})
    @id = options["id"]
    @question = options["question"]
    @answer = options["answer"]
    @choices = QUIZ.execute("SELECT * FROM #{choices} WHERE question_id = #{id}").first
  end    
  

  # Adds a *new* row to the "beers" table, using this object's attribute values.
  #
  # Calls 'add_to_database' in class Module to do database work
  # Returns the Integer ID that the database sends back.
  def self.add(options={})
    if options["question"].blank? 
      return false
    else
      self.add_to_database(options)
    end
  end
  
  
  # Updates the database with all values for the beer.
  #
  # Returns an empty Array. TODO - This should return something better.
  def save
    if self.valid?
      return false
    else
      QUIZ.execute("UPDATE questions SET question = '#{@question}' WHERE id = #{@id};")
    end
  end
  
end


























