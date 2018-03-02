// -----------------------------------------------------------------------------------------------------------
// Display Letters Guessed:
var myFunctions = {

    displayLettersGuessed: function() {
    
        // Possible 'key' guesses
        var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        // console.log(alphabet.length);
    
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
    },
};
// -------------------------------------------------------------------------------------------------------------
// Generate counters and display correct count to html
var counterWins = "(number of wins)";
    document.getElementById("wins").innerHTML = counterWins;

var counterGuesses = "(number of guesses left)";
    document.getElementById("guesses").innerHTML = counterGuesses;


// -----------------------------------------------------------------------------------------------------------
// Display Mystery Word in Dashes:


// Generate random word
var listOfWords = ["cac", "dod", "pip"];
var randomNumber = Math.floor(Math.random()*listOfWords.length);
var randomWord = listOfWords[randomNumber];

// Display random word to html letter by letter
for (i = 0; i < randomWord.length; i++) {
    var oneLetterOfWord = randomWord[i];
    console.log(oneLetterOfWord);
    var dash = "-";
    
    // document.getElementById("mysteryWord").innerHTML += (oneLetterOfWord);
    dashes = document.getElementById("mysteryWord").innerHTML += (dash);
    // dashes = document.getElementById("mysteryWord").innerHTML = [0,1,2];
};
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var counterLettersCorrect = 0;

document.onkeyup = function(letter) {
    var keyPressed = letter.key;
    console.log("keyPressed: " + keyPressed);
    
    for (j = 0; j < randomWord.length; j++) {
        if (keyPressed === randomWord[j]) {
            var nth = 0;
            dashes = dashes.replace(/-/g, function(match, i, original){
                nth++;
                return (nth === (j+1)) ? (keyPressed) : match;
            });
            // var str = document.getElementById("mysteryWord").innerHTML;
            // var rep = str.replace(dashes[j],keyPressed);
            document.getElementById("mysteryWord").innerHTML = dashes;
            console.log("dashes = " + dashes);
            counterLettersCorrect = counterLettersCorrect + 1;
            console.log("counterLettersCorrect: " + counterLettersCorrect);
        } else {
            myFunctions.displayLettersGuessed(); 
        } 
    };
};
    

    


