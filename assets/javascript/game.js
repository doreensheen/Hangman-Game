// -----------------------------------------------------------------------------------------------------------
// Holds my functions and stores their definition
var myFunctions = {   

    // Determine whether key pressed is a correct guess, if so, do the following:
    displayCorrectLetter: function(keyPressed) {
        // if key pressed is a correct letter...
        if (keyPressed === wordArray[j]) {
            // 1. display letter in place of dash under "Current Word"
            var removedElements = dashesArray.splice(j, 1, keyPressed);
            dashes = dashesArray.join("");

            document.getElementById("mysteryWord").innerHTML = dashes;
        }
    },
    
    // Determine whether key pressed is an incorrect guess, if so, do the following: 
    // Display Letters Guessed
    displayLettersGuessed: function(keyPressed) {
    
        // Possible 'key' guesses
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
                
            // Determine whether key pressed is found in array alphabet; if key is not in alphabet, index = -1
            index = alphabet.indexOf(keyPressed);
            if (index === -1) {
                alert("That is not a letter. Try again.");
            }else {
                // Display key pressed by player
                var counterLetters = keyPressed;
                document.getElementById("letters").innerHTML += ("  " + counterLetters + "  ");
            };
    },
};

// -------------------------------------------------------------------------------------------------------------
// Generate counters and display correct count to html
var counterLettersCorrect = 0;
var counterGuessesLeft = 10;
var counterWordsCorrect = 0;

var counterWins = counterWordsCorrect;
    document.getElementById("wins").innerHTML = counterWins;

var counterGuesses = counterGuessesLeft;
    document.getElementById("guesses").innerHTML = counterGuesses;

// -----------------------------------------------------------------------------------------------------------
// Display Mystery Word in Dashes:


// Generate random word
var listOfWords = ["mystery"];
var randomNumber = Math.floor(Math.random()*listOfWords.length);
var randomWord = listOfWords[randomNumber];
var wordArray = randomWord.split("");

// Display random word to html letter by letter
for (i = 0; i < wordArray.length; i++) {
    var oneLetterOfWord = wordArray[i];
    console.log(oneLetterOfWord);
    var dash = "-";
    dashes = document.getElementById("mysteryWord").innerHTML += (dash);
};

var dashesArray = dashes.split("");
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// -----------------------------------------------------------------------------------------------------------
// Logic for Sequence of Actions when key Pressed
document.onkeyup = function(letter) {
    var keyPressed = letter.key;
    console.log("keyPressed: " + keyPressed);
    
    for (j = 0; j < wordArray.length; j++) {
        myFunctions.displayCorrectLetter(keyPressed);
    };
    var indexOfWord = wordArray.indexOf(keyPressed);
    if (indexOfWord === -1) {
        myFunctions.displayLettersGuessed(keyPressed);
    }
};
    

    


