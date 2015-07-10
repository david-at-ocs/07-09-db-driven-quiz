# ---------------------------------------------------------------------
# Menu
# ---------------------------------------------------------------------

get "/homepage" do
  @all_questions = Question.all
  @all_choices = Choice.all
  bindig.pry
  erb :"main/homepage"
end