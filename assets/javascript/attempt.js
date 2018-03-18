
// Here are my attempts and resources for building the hangman game //

// FUNCTION # 1 // 

// 1) create and set event to hit key 
document.onkeyup = function (event) {

// 2) store key in variable
var userGuess = event.key;

// 3) get the ID and store it in var demo 
var demo = document.getElementById("demo") //< --this is where the information is going to display

// 4) take userGuess and send it to 
var demo = demo.textContent = userGuess //< --this is the information we want to display

// 4) confirming the information we want to display 
console.log(userGuess);

if (userGuess === randomWord.charAt()) { console.log('YES'); } else { console.log('UMM'); } console.log(randomWord.charAt());
}

// # 2 // 
// 1) these are hangman topics 
var word=[ "HELLO", "SO LONG"];

// 2) a random word will be stored in "var randomWord"
var randomWord = w ord[Math.floor(Math.random() * word.length)];

// 3) get the ID and store it in var demo 
var topic=d ocument.getElementById("topic") // <-- this is where the information is going to display

// 4) take userGuess and send it to var demo 
topic.textContent = randomWord // <-- this is the information we want to display

// 5) confirming the information we want to display 
console.log(randomWord);

// # 3 //
// Empty array to store var randomWord with "_" replacing each character 
var answerArray=[ ];

// A for loop that will turn the characters into "_" 
for (var i = 0; i < randomWord.length; i++) {
answerArray[i] = "_"; 

// Displaying the random word in " _ _ _ _" format 
topic.textContent = answerArray.join(" ");

// Console logging to see if answerArray will appear
    console.log(answerArray);

} for (var i = 0; i < computerChoices.length; i++) { 
    // console.log( "I love " + computerChoices[i]);
    if (computerChoices[i].indexOf() = - 1) { alert("This is working"); }
} // 4a) part 1 to display value // Randomly chooses
a choice from the options array.This is the Computer 's guess.
    // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // 3) an array


        // When click is made a function will trigger an event

        // When click is made the click will be console logged
        document.onclick = function (event) {
            console.log("click");
        }
var userText = document.getElementById("currentWord");

// When keyup is made a function will trigger an event
// When key is pressed the user's input will be displayed // document.onkeyup=f unction (event) { // userText.textContent=e
event.key; // }; // Creating variables to hold the number of wins, losses, and ties. They start at 0. var wins=0 ; var losses=0
; var ties = 0; if (answerArray[i] = "_") { (answerArray[i]); } else { console.log("Nope"); } // These will be the words users
will try to guess in the hangman game var word = ['Ball']; // Grab the #currentWord ID and store it into the variable currentWord
var currentWord = d ocument.getElementById("currentWord"); // To display all variations in the array // userText.textContent=w
ord; // Will randomized the array word // Random word will be stored in var randomWord var randomWord=w ord[Math.floor(Math.random()
    * word.length)]; // To take the var randomWord and transform it into dynamic HTML and to be displayed in the ID #currentWord
// Empty array to store var randomWord with "_" replacing each character in the random word var answerArray=[ ]; // A for
loop that will turn the characters into "_" for (var i = 0; i < randomWord.length; i++) {
answerArray[i] = "_"; // Displaying
    the random word in " _ _ _ _" format currentWord.textContent = a nswerArray.join(" "); // Console loggign to see if answerArray
    will appear console.log(answerArray);
} // This function is run whenever the user presses a key. document.onkeyup=f unction
(event) { // Determines which key was pressed. var userGuess=e vent.key; // If statement - when letter is guessed correctly
    replace "_" with letter guessed if (userGuess === "a") { console.log("Yes this works!") } else {
        console.log(
            "No... this doesn't work!")
    }; // if (userGuess===i ndexOf(randomWord.length())) { // console.log( "Yes this works!") // } // else { // console.log(
    "No... this doesn't work!") // }; </script>

    * var userText = document.getElementById("user-text"); document.onclick = function (event) { console.log("click"); } document.getElementById("test1").onclick
        = function (event) { console.log("test1") } document.getElementById("test2").onclick = function (event) {
            console.log("test2")
        } document.getElementById("test3").onclick = function (event) { console.log("test3") } document.getElementById("test4").onclick
            = function (event) { console.log("test4") } document.onkeyup = function (event) { userText.textContent = event.key; };

    function myFunction() {
        document.onkeyup(answerArray).innerHTML document.getElementById("currentWord").innerHTML =
            answerArray; randomWord.toString();
    }

    // 1). Array of words var word = ['Jump', 'Ball', 'Dunk']; 

    // 2). Pick a random
    word var randomWord = word[Math.floor(Math.random() * word.length)];

    // 3). Set up the answer array var answerArray = []; 

    // 4). for Loop for (var i = 0; i
    < randomWord.length; i++) {
    answerArray[i] = "_"; //answerArray.push( "_");

        //console.log(answerArray); } 
        //document.onkeyup(); 
        // user pressed key 
        // if key matches rand word then show letter
        // if key doesnt match would retun false 
        document.onkeyup = m yKeyUpHandler; function myKeyUpHandler() { var userGuess = event.key; document.getElementById("#game").textContent(userGuess) }

        // Creates an array that lists out all of the
        options(Rock, Paper, or Scissors).var computerChoices = ['Jump', 'Ball', 'Dunk'];

        // Creating variables to hold the number of wins, losses, and ties. They start at 0. 

        var wins = 0;
        var losses = 0;
        var ties = 0;
        var guessesLeft = 0;
        var guessesSoFar = 10; // Gives the user 10 guesses // This function is run whenever the user presses a key. document.onkeyup=f unction(event)
        { // Determines which key was pressed. var userGuess=e vent.key; // Randomly chooses a choice from the options array.
            This is the Computer 's guess.
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


            // 1). An array of potential answers
            var words = ["abc", "def", "ghi"];

            // 2). Pick a random word
            var randomWord = words[Math.floor(Math.random() * words.length)];

            // 3). Set up the answer array
            var answerArray = [];

            // 4). For loop 
            for (var i = 0; i < randomWord.length; i++) {
                answerArray[i] = "_";
            }



            //////// RESOURCES AND REFERENCES ////////
            // Reworked our code from last step to use "else if" instead of lots of if statements.

            // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
            if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

                if ((userGuess === "r") && (computerGuess === "s")) {
                    wins++;
                } else if ((userGuess === "r") && (computerGuess === "p")) {
                    losses++;
                } else if ((userGuess === "s") && (computerGuess === "r")) {
                    losses++;
                } else if ((userGuess === "s") && (computerGuess === "p")) {
                    wins++;
                } else if ((userGuess === "p") && (computerGuess === "r")) {
                    wins++;
                } else if ((userGuess === "p") && (computerGuess === "s")) {
                    losses++;
                } else if (userGuess === computerGuess) {
                    ties++;
                }

                // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
                var html =
                    "<p>You chose: " + userGuess + "</p>" +
                    "<p>The computer chose: " + computerGuess + "</p>" +
                    "<p>wins: " + wins + "</p>" +
                    "<p>losses: " + losses + "</p>" +
                    "<p>ties: " + ties + "</p>";
                "<p>guesses left: " + guessesLeft + "</p>";
                "<p>guesses so far: " + guessesSoFar + "</p>;"

                // Set the inner HTML contents of the #game div to our html string
                document.querySelector("#game").innerHTML = html;
            }
        };

// 1). Array of words
var word = ['Jump ', 'Ball ', 'Dunk '];

// 2). Pick a random word
var randomWord = word[Math.floor(Math.random() * word.length)];

// 3). Set up the answer array
var answerArray = [];

// 4). for Loop 
for (var i = 0; i < randomWord.length; i++) {
answerArray[i] = "_";
console.log(answerArray); 
}

/*

document.onkeyup = function(event) {

// Captures the key press, converts it to lowercase, and saves it to a variable.
var letter = String.fromCharCode(event.which).toLowerCase();

// If the letter is h, run the following functions/methods.
if (letter === "h") {
car.honk();
reWriteStats();
}

// If the letter is d, run the following functions/methods.
if (letter === "d") {
car.driveToWork();
reWriteStats();
}

// If the letter is w, run the following functions/methods.
if (letter === "w") {
car.driveAroundWorld();
reWriteStats();
}

// If the letter is t, run the following functions/methods.
if (letter === "t") {
car.getTuneUp();
reWriteStats();
}
};

var remainingLetters = word.length;
// The game loop
while (remainingLetters > 0) {

// Show the player their progress
.innerHTML(answerArray.join(" "));

// Get a guess from the player
var guess = textContent("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {

// Exit the game loop
break;
} else if (guess.length !== 1) {
alert("Please enter a single letter.");
} else {

// Update the game state with the guess
for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
    }
}
}

// The end of the game loop
}
// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);


// 2). Wins: (# of times the user has guessed the letter correctly)
//var wins = 0;
//console.log("If you can see this then your JS file is attached");

// 3). Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
//var losses = 0;

// 4). Guesses Left: (# of guesses left. This will update)
//var guessesLeft = 0;

// 5). Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
//var guessesSoFar = 0;

// 6). When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
//when you win = var win 1++

// 7). When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
//when you loss = var loss 1--



