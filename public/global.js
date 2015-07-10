// var question1 = {possibleAnswers: "A.1\rB. 55\rC. 345\rD. 7\rE. 4", answer: "D"};
// var question2 = {possibleAnswers: "A. 1\rB. 55\rC. 345\rD. 7\rE. 4", answer: "E"};
// var question3 = {possibleAnswers: "A. 1\rB. 55\rC. 345\rD. 7\rE. 3", answer: "E"};
// var question4 = {possibleAnswers: "A.\rB.\rC.\rD.\rE.", answer: "B"};
// var question5 = {possibleAnswers: "A. Yes\rB. No\rC. Not Sure\rD. Maybe", answer: "A"}

var score = 0;
var count = 1;
var quest;
var choice;

// var questionsArray = [question1, question2, question3, question4, question5];

quest = document.getElementById("question");
choice = document.getElementById("choices");

document.getElementById("submitter").addEventListener("click", given_answer);
document.getElementById("next").addEventListener("click", next_question);


// quest.innerText = questionsArray[count].question;
// choice.innerText = questionsArray[count].possibleAnswers;



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
  if (count <= document.getElementById("number_of_questions").value) {
    clear_fields();
    set_next_question(count);
  } else {
    final_score(count);
  }
  ++count
}

function clear_fields() {
  document.getElementById("user_answer").value = null;
  document.getElementById("question_result").innerText = "";
  document.getElementById("question" + count).classList.remove("unhide");
  document.getElementById("choice" + count).classList.remove("unhide");
}

function set_next_question(count) {
  // document.getElementById("question" + count).classList.add("unhide");
  // document.getElementById("choice" + count).classList.add("unhide");
}

function final_score(count) {
  clear_fields();
  document.getElementById("total_result").innerText = "You scored " + (score/count)*100 + "%";
}

// document.getElementById("submitter").onclick = process_answer_submission;
