// GLOBAL VARIABLES
//======================================================

var wordOptions = ["gluttony", "pride", "sloth", "envy", "wrath", "lust", "greed"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//FUNCTIONS
//=======================================================
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)]
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i=0; i<numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;


    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses)
    alert("Welcome to Hell");
    alert("If you want to leave, you must know why you're here.");
    alert("Good luck...");
}

function checkLetters(letter) {
    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
            alert("Letter found!")
        }
    }
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (selectedWord[i] === letter) {
                console.log("This letter is in the " + [i] + " position!");
                blanksAndSuccesses[i] = letter;
            }
        }
    }

    else {
        wrongLetters.push(letter);
        guessesLeft--;
    }
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);
     
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
         winCount++;
         alert("You won!");

         document.getElementById("winCounter").innerHTML = winCount;

         startGame();
     }
     else if (guessesLeft == 0) {
         lossCount++;
         alert("You lost. Burn in Hell!");
     

     document.getElementById("lossCounter").innerHTML = lossCount;
     

     startGame();
     }
}

//MAIN PROCESS
//=======================================================
startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(letterGuessed);
    checkLetters(letterGuessed);
    console.log(blanksAndSuccesses);
    console.log(guessesLeft)
    roundComplete();
};



