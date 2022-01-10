var scoreName = document.querySelector("#score-name")
var scoreNumber = document.querySelector("#score-number")

var loadScores = function () {
    var savedScores = localStorage.getItem("playerScore")

    if (savedScores === null) {
        return false;
    }

    savedScores = JSON.parse(savedScores);
    console.log(savedScores)

    var name = savedScores.initials
    scoreName.textContent = name

    var number = savedScores.score
    scoreNumber.textContent = number
}

loadScores()