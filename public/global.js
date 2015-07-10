
var score = 0;
var questionNumber = 1;
var quest;
var choice;

// var questionsArray = [question1, question2, question3, question4, question5];

numberOfQuestions = document.getElementById("number_of_questions").value
choice = document.getElementById("choices");

document.getElementById("submitter").addEventListener("click", given_answer);
document.getElementById("next").addEventListener("click", next_question);


function given_answer() {
    var answer = document.getElementById("user_answer").value.toUpperCase();
    update_question_result(is_correct_answer(answer));
}

function is_correct_answer(answer_text) {
  if (answer_text === document.getElementById("answer" + questionNumber).value) {
    score++
    return true;
  } else {
    return false;
  }
} 

function update_question_result(correct) {
  if (correct) {
    document.getElementById("question_result").innerText = "Success!";
  } else {
    document.getElementById("question_result").innerText = "Sorry, wrong answer";
  }
}


function next_question() {
  // questionNumber = parseInt(document.getElementById("question_number").value)
  questionNumber++
  if (questionNumber <= numberOfQuestions) {
    clear_fields(questionNumber);
    set_next_question(questionNumber);
  } else {
    final_score(questionNumber);
  }
}

function clear_fields() {
  document.getElementById("user_answer").value = null;
  document.getElementById("question_result").innerText = "";
  document.getElementById("question" + (questionNumber-1)).classList.remove("unhide");
  document.getElementById("choice" + (questionNumber-1)).classList.remove("unhide");
}

function set_next_question(questionNumber) {
  document.getElementById("question" + (questionNumber)).classList.add("unhide");
  document.getElementById("choice" + (questionNumber)).classList.add("unhide");
}

function final_score(questionNumber) {
  clear_fields();
  document.getElementById("total_result").innerText = "You scored " + (score/(questionNumber-1))*100 + "%";
}

// document.getElementById("submitter").onclick = process_answer_submission;
