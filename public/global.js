
var score = 0;
var count = 1;
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
  if (answer_text === document.getElementById("answer").value) {
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
  if (count <= numberOfQuestions) {
    clear_fields(count);
    set_next_question(count+1);
  } else {
    final_score(questionNumber);
  }
  count++
}

function clear_fields() {
  document.getElementById("user_answer").value = null;
  document.getElementById("question_result").innerText = "";
  document.getElementById("question" + count).classList.remove("unhide");
  document.getElementById("choice" + count).classList.remove("unhide");
}

function set_next_question(count) {
  document.getElementById("question" + (count)).classList.add("unhide");
  document.getElementById("choice" + (count)).classList.add("unhide");
}

function final_score(count) {
  clear_fields();
  document.getElementById("total_result").innerText = "You scored " + (score/count)*100 + "%";
}

// document.getElementById("submitter").onclick = process_answer_submission;
