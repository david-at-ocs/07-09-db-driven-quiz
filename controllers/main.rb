# ---------------------------------------------------------------------
# Menu
# ---------------------------------------------------------------------

get "/homepage" do
  @all_questions = Question.all
  @all_choices = Choice.all
  erb :"main/homepage"
end