// Javascript file for Hangman Game //

var arrayBasketball = ["ball", "dunk", "hoop", "court"];
    var pickedWord;
    var pickedWordArray = [];
    var pickedWordPlaceholders = [];
    var wins = 0;
    var losses = 0;
    var lettersGuessed;
    var guessesLeft;

    function newGame() {
        guessesLeft = 10;
        lettersGuessed = [];
        pickedWord = arrayBasketball[Math.floor(Math.random() * arrayBasketball.length)];
        pickedWordArray = pickedWord.split("");
        pickedWordPlaceholders = [];

        for (var i = 0; i < pickedWordArray.length; i++) {
            pickedWordPlaceholders.push("_");
            var placeHolderString = pickedWordPlaceholders.join(' ');
            document.querySelector("#guessesRemaining").innerHTML ="Lives: " + guessesLeft;
            document.querySelector("#placeholders").innerHTML = placeHolderString;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
        }
    }

    document.onkeyup = function(event) {
        var userGuess = event.key;
        lettersGuessed.push(userGuess);

        for (var i = 0; i < pickedWordArray.length; i++) {
            if (userGuess === pickedWordArray[i]) {
                pickedWordPlaceholders[i] = userGuess;
            }
        }
        document.querySelector("#placeholders").innerHTML = pickedWordPlaceholders.join(" ");
        document.querySelector("#pressedLetters").innerHTML = lettersGuessed;

        if (pickedWordPlaceholders.indexOf(userGuess) === -1) {
            guessesLeft--;
        }
        document.querySelector("#guessesRemaining").innerHTML ="Lives: " + guessesLeft;
        if (guessesLeft === 0){
            losses++;
            alert("You lose!");
            newGame();
        }
        document.querySelector("#losses").innerHTML = "Losses: " + losses;

        if (pickedWordPlaceholders.join("") === pickedWord){
            wins++;
            alert("You win!");
            newGame();
        }
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
    }

    newGame();
