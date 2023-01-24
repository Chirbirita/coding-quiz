// The timer, navigate the questions, etc.

// variable to keep track of quiz progress
let currentQuestionsIndex = 0;
let time = questions.length * 15;
let timerID;


//HTML elements
let questionsElement = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("choices");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialsElement = document.getElementById("initials");
let feedbackElement = document.getElementById("feedback");

let soundRight = new Audio("/assets/sfx/correct.wav");

function startQuiz