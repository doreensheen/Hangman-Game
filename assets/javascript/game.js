
// Generate counters and display correct count to html
var counterWins = "(number of wins)";
    document.getElementById("wins").innerHTML = counterWins;

var counterGuesses = "(number of guesses left)";
    document.getElementById("guesses").innerHTML = counterGuesses;


// -----------------------------------------------------------------------------------------------------------
// Display Mystery Word in Dashes:


// Generate random word
var listOfWords = ["cat", "dog", "pig"];
var randomNumber = Math.floor(Math.random()*listOfWords.length);
var randomWord = listOfWords[randomNumber];

// Display random word to html letter by letter
for (i = 0; i < randomWord.length; i++){
    console.log(randomWord[i]);
    var oneLetterOfWord = randomWord[i];
    
    document.getElementById("mysteryWord").innerHTML += (oneLetterOfWord);
}

// -----------------------------------------------------------------------------------------------------------
// Display Letters Guessed:
// 
// 
// Possible 'key' guesses
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(alphabet.length);

// Read key pressed and store info in var keyThatWasPressed
document.onkeyup = function(letter) {
    var keyThatWasPressed = letter.key;

    // Determine whether key pressed is found in array alphabet; if key is not in alphabet, index = -1
    index = alphabet.indexOf(keyThatWasPressed);
    if (index === -1) {
        alert("That is not a letter. Try again.");
    }else {
        // Display key pressed by player
        var counterLetters = keyThatWasPressed;
        document.getElementById("letters").innerHTML += ("  " + counterLetters + "  ");
    };
};


// -----------------------------------------------------------------------------------------------------------