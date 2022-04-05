const gameState = document.getElementById("game-state");
const wordText = document.getElementById("word-text");
const remainingGuesses = document.getElementById("remaining-text");
const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const randomIndex = Math.floor(Math.random() * 5);
const wordLength = document.getElementById("word-length");
const hint = document.getElementById("hint");
let g = []
let state;
let livesRemaining = 5;
// Information for the word as well as the description hint
const words = [
  ["strawberry", "A fruit with 200 seeds"],
  ["coffee", "I can't go to work without it."],
  ["guitar", "6 strings, and lots of shredding"],
  ["ghostface", "Scream"],
  ["leatherface", "Texas Chainsaw Massacre"],
];
// Gets random word from words array
const randomWord = words[randomIndex];
let answerArray = randomWord[0].split("");

// Game state logic
hint.innerText = `Your hint is: "${randomWord[1]}"`;
wordLength.innerText = `Your word has ${randomWord[0].length} letters`;

let letters = answerArray.map((letter) => "__ ");
wordText.innerText = letters.join("");

guessBtn.addEventListener("click", (e) => {
  // Logic that tells whether guess is correct
  let guess = guessInput.value;
  if (randomWord[0].includes(guess)) {
    gameState.innerText = "You guessed correctly!";
    // Logic that manipulates the array
    let newArray = answerArray.map((letter) => guess.includes(letter));
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] === true) {
        newArray[i] = guessInput.value;
      } else {
          newArray[i] = '_';
      }
    }
    console.log(newArray)
  } else {
    // Incorrect guess logic
    livesRemaining--;
    gameState.innerText = `You guessed incorrectly. You have ${livesRemaining} lives left...`;
    guess = "";
  }
});
