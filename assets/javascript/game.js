
// Generate counters and display correct count to html
var counterWins = "(number of wins)";
    document.getElementById("wins").innerHTML = counterWins;

var counterGuesses = "(number of guesses left)";
    document.getElementById("guesses").innerHTML = counterGuesses;

var counterLetters = "(array of letters guessed incorrectly)";
    document.getElementById("letters").innerHTML = counterLetters;

// Generate random word and display to html
var listOfWords = ["cat", "dog", "pig"];
    var randomNumber = Math.floor(Math.random()*listOfWords.length);
    var randomWord = listOfWords[randomNumber];
    document.getElementById("mysteryWord").innerHTML = randomWord;
    // console.log(randomNumber);