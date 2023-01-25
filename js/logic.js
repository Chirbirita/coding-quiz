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

function questionClick() {
    if (this.value !== questions[currentQuestionsIndex].answer) {
        time -= 15;

        if (time < 0) {
            time = 0;
        }

        timerElement.textContent = time;

        feedbackElement.textContent = "Sorry, wrong answer"
    } else {
        soundRight.play();
        feedbackElement.textContent = "That's right!"
    }

    feedbackElement.setAttribute("class", "feedback");

    setTimeout(function(){
        feedbackElement.setAttribute("class", "feedback hide")
    })
}

function getQuestion() {
    let currentQuestion = questions[currentQuestionsIndex];

    let titleElement = document.getElementById("question-title");

    titleElement.textContent = currentQuestion.title;

    choicesElement.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, index) {
        let choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = `${index = 1}. ${choice}`;

        choiceButton.addEventListener("click", questionClick);

        choicesElement.appendChild(choiceButton);
    })
}


function startQuiz() {
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide");

    questionsElement.removeAttribute("class");

    timerID = setInterval(clockTick, 1000);

    timerElement.textContent = time;

    getQuestion();
}

function endQuiz() {
    clearInterval(timerID);

    let endScreenElement = document.getElementById("end-screen");
    // endScreenElement.removeAttribute("class");

    /**
     * ? get all the classes from the class attribute and remove class 'hide'
     * ? then add class 'start' - which aligns text center
     */
    endScreenElement.classList.remove("hide")
    endScreenElement.classList.add("start")

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    questionsElement.setAttribute("class", "hide");
}

function clockTick() {
    time--;
    timerElement.textContent = time;

    if (time <= 0) {
        endQuiz();
    }
}

function saveHighScore() {

}

function checkForEnter() {

}


startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", saveHighScore);

initialsElement.addEventListener("keyup", checkForEnter);
