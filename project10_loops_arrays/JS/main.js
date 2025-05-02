// below holds the answer as well as creates an empty array to store the guesses 
let game = {
    answer: 17,
    guesses: [] 
  };
  
  // Function to handle the user's guess
  function startGame() {
    let guessInput = document.getElementById("userGuess"); 
    let guess = Number(guessInput.value);
    game.guesses.push(guess); // push is a js function that will add on elements(user's input) to 
    //the array named "guesses" and updates the lentgh.
  
    //a while loop to check if guess is between 1–10
    while (guess < 1 || guess > 20) { //checks if the guess is less than 1 or greater than 15
      document.getElementById("result").textContent = "Please enter a number between 1 and 20.";
      return; // exits function 
    }
  
    // i wrote various comparisons to  result in displaying different messages based on the answer 
    //so the game would feel more interactive. 
    if (guess === game.answer) {
      document.getElementById("result").textContent = "CORRECT! Ryuk is very pleased";
    } 
    else if (guess === 5) {  //if guess is equal to 5
        document.getElementById("result").textContent = "come on, do you really think " + 
        "Ryuk wants just 5 apples?";
    }
    
    else if (guess <= 4) { //if guess is less than or equal to 4
        document.getElementById("result").textContent = "Ryuk is getting impatient..."
    }
    
    else if (guess === 1) { //if guess is equal to 1 
        document.getElementById("result").textContent = "now that's just insulting."
    }

    else if (guess > 14 && guess < 17) { //if guess is greater than 14 AND less than 17
        document.getElementById("result").textContent = "almost...maybe a few more?"
    }

    else if (guess > 17 && guess <= 20) { //if guess is greater than 17 AND less than or equal to 20
        document.getElementById("result").textContent = "sooo close... just a bit lower!";
    }

    else { //catches all the other possible number guesses 
        document.getElementById("result").textContent = "nope, try again.";

    }
  
    // using a for loop here to show all the previous guesses
    let guessList = "guesses: ";
    for (let Y = 0; Y < game.guesses.length; Y++) {
      guessList += game.guesses[Y] + ", ";
    }
    document.getElementById("previousGuesses").textContent = guessList;
  
    // clears so the user can guess multiple times without resetting/reloading the page
    guessInput.value = "";
  }
