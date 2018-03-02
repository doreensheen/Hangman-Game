
// Generate counters and display correct count to html
var counterWins = "(number of wins)";
    document.getElementById("wins").innerHTML = counterWins;

var counterGuesses = "(number of guesses left)";
    document.getElementById("guesses").innerHTML = counterGuesses;

    
    // Generate random word and display to html
    var listOfWords = ["cat", "dog", "pig"];
    var randomNumber = Math.floor(Math.random()*listOfWords.length);
    var randomWord = listOfWords[randomNumber];
    document.getElementById("mysteryWord").innerHTML = randomWord;
    

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
        }

        // for (i=0; i < alphabet.length; i++) {
        //     if (keyThatWasPressed === alphabet[i]) {
        //         console.log("you pressed a letter");
        //     } else {
        //         console.log("that's not a letter");
        //     };   
        // };
    };