var squares;

var correctColor;
var difficulty = 6;


function RandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function GetRandomColors() {
    for(var i = 0; i < difficulty; i++) {
        squares[i].style.backgroundColor = RandomColor();
    }
}

function PickCorrectColor() {
    correctColor = squares[Math.floor(Math.random() * difficulty)];
}

function CheckAnswer(guess) {
    if(guess.style.backgroundColor === correctColor.style.backgroundColor) {
        alert("You win!");
        ResetGame();
    } else {
        alert("Wrong! Guess again.");
        HideMe(guess);
    }
}

function ShowAllSquares() {
    console.log("ok");
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.display = "";
    }
}

function HideMe(obj) {
    obj.style.display = "none";
}

function ResetGame() {
    GetRandomColors();
    PickCorrectColor();
    ShowAllSquares();
}

$(document).ready(function() {
    squares = document.querySelectorAll(".square");

    for(var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            CheckAnswer(this);
        });
    }

    ResetGame();
});