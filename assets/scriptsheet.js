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