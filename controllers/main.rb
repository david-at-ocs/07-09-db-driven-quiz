# ---------------------------------------------------------------------
# Menu
# ---------------------------------------------------------------------

get "/homepage" do
  @all_questions = Question.all
  @all_choices = Choice.all
  binding.pry
  erb :"main/homepage"
end