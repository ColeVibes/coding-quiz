var question = document.querySelector("#question")
var choiceContainer = document.querySelector("#multiple-choice-container")
var choiceText1 = document.querySelector("#choice-text-1")
var choiceText2 = document.querySelector("#choice-text-2")
var choiceText3 = document.querySelector("#choice-text-3")
var choiceText4 = document.querySelector("#choice-text-4")
var answerText = document.querySelector("#answer-text")
var finalScore = document.querySelector("#final-score")
var timer = document.querySelector("#timer")
var submitForm = document.querySelector(".submit-form")

var questionCounter = 0 // What question are you on?
var availableQuestions = []

var timeInterval
var timeLeft = 50;

// create array to hold initials/scores for saving
var initialsScores = [];


var quizQuestions = [
    {
        question: "How do you create a function in JavaScript?",
        choice1: "function()",
        choice2: "create myFunction = function()",
        choice3: "var myFunction = function()",
        choice4: "function.create",
        answer: 3
    },
    {
        question: "What is the method that converts a JavaScript object or value into a string?",
        choice1: "JSON.stringify()",
        choice2: "make.string()",
        choice3: "JSON.parse()",
        choice4: "stringify()",
        answer: 1
    },
    {
        question: "Where does the script tag go in the HTML file? ",
        choice1: "<head> section",
        choice2: "<body> section ",
        choice3: "Both <head> or <body> section",
        choice4: "<footer> section",
        answer: 3
    },
    {
        question: "Which of the below choices can be objects?",
        choice1: "Booleans",
        choice2: "Numbers",
        choice3: "Strings",
        choice4: "All of the above",
        answer: 4
    }
];

// Timer
function countdown() {

    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timer.textContent = "Time: " + timeLeft + " seconds remaining"
            timeLeft--
        } else if
            (timeLeft === 1) {
            timer.textContent = "Time: " + timeLeft + " second remaining"
            timeLeft--
        }
        else {
            clearInterval(timeInterval)
            timer.textContent = "You ran out of time!"
            timeLeft = 0
        }
    }, 1000);
}

var getQuestion = function () {

    var currentQuestion = quizQuestions[questionCounter]
    var questionText = currentQuestion.question
    question.textContent = questionText

    var choiceTextA = currentQuestion.choice1
    choiceText1.textContent = choiceTextA

    var choiceTextB = currentQuestion.choice2
    choiceText2.textContent = choiceTextB

    var choiceTextC = currentQuestion.choice3
    choiceText3.textContent = choiceTextC

    var choiceTextD = currentQuestion.choice4
    choiceText4.textContent = choiceTextD

}

var choiceHandler = function (event) {
    var targetEl = event.target

    if (targetEl.matches("#choice-text-1")) {
        var choiceNumber = targetEl.getAttribute("data-number");
        checkAnswer(choiceNumber);
    }
    else if (targetEl.matches("#choice-text-2")) {
        var choiceNumber = targetEl.getAttribute("data-number");
        checkAnswer(choiceNumber);
    }
    else if (targetEl.matches("#choice-text-3")) {
        var choiceNumber = targetEl.getAttribute("data-number");
        checkAnswer(choiceNumber);
    }
    else if (targetEl.matches("#choice-text-4")) {
        var choiceNumber = targetEl.getAttribute("data-number");
        checkAnswer(choiceNumber);
    }
}

var checkAnswer = function (choiceNumber) {
    var correctAnswer = quizQuestions[questionCounter].answer

    if (choiceNumber == correctAnswer) {
        console.log("You answered correct!")

        answerText.textContent = "Correct!"

        questionCounter++

        if (questionCounter <= 3) {
            getQuestion()
        }
        else { 
            question.textContent = "All Done!"
            finalScore.textContent = "Your final score is: " + timeLeft
            choiceContainer.remove() 
            clearInterval(timeInterval)
            timer.remove()
            createFormEl()
        }
    }
    else {
        console.log("You answered incorrect!")

        answerText.textContent = "Incorrect!"
        subtractTime()

        questionCounter++

        if (questionCounter <= 3) {
            getQuestion()
        }
        else {
            question.textContent = "All Done!"
            finalScore.textContent = "Your final score is: " + timeLeft
            choiceContainer.remove()
            clearInterval(timeInterval)
            timer.remove()
            createFormEl()
        }
    }
}

var createFormEl = function () {
    var labelEl = document.createElement("label")
    labelEl.textContent = "Enter Initials: "

    var inputEl = document.createElement("input")
    inputEl.className = "initialsForm";

    var submitBtn = document.createElement("button")
    submitBtn.type = "submit"
    submitBtn.textContent = "Submit"

    submitForm.appendChild(labelEl)
    submitForm.appendChild(inputEl)
    submitForm.appendChild(submitBtn)

    submitBtn.addEventListener("click", scoreSaver)
}

var scoreSaver = function () {
    answerText.textContent = "Check the high scores to see where you rank!"

    var initials = document.querySelector(".initialsForm").value

    var initialsScoresDataObj = {
        score: timeLeft,
        initials: initials,
    } 

    initialsScores.push(initialsScoresDataObj)

    localStorage.setItem("playerScore", JSON.stringify(initialsScoresDataObj))
};


choiceText1.addEventListener("click", choiceHandler);
choiceText2.addEventListener("click", choiceHandler);
choiceText3.addEventListener("click", choiceHandler);
choiceText4.addEventListener("click", choiceHandler);

startQuiz()

countdown()