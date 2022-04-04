const gameState = document.getElementById("game-state");
const wordText = document.getElementById("word-text");
const remainingGuesses = document.getElementById("remaining-text");
const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const randomIndex = Math.floor(Math.random() * 5);
const wordLength = document.getElementById("word-length");
const hint = document.getElementById("hint");
let livesRemaining = 5;
const words = [
  ["strawberry", "A fruit with 200 seeds"],
  ["coffee", "I can't go to work without it."],
  ["guitar", "6 strings, and lots of shredding"],
  ["ghostface", "Scream"],
  ["leatherface", "Texas Chainsaw Massacre"],
];
const randomWord = words[randomIndex];
let answerArray = randomWord[0].split("");

hint.innerText = `Your hint is: "${randomWord[1]}"`;
wordLength.innerText = `Your word has ${randomWord[0].length} letters`;
let letters = answerArray.map((letter) => "__ ");
wordText.innerText = letters.join("");

guessBtn.addEventListener("click", (e) => {
  let guess = guessInput.value;
  if (randomWord[0].includes(guess)) {
    gameState.innerText = "You guessed correctly!";
    let newArray = answerArray.map((letter) => guess.includes(letter));
    let stringify = newArray.toString();
    let replace = stringify
      .replace(/false/gi, "__ ")
      .replace(/true/gi, guess)
      .replace(/,/g, "");
    console.log(replace);
    wordText.innerText = replace.toUpperCase();
    guess = "";
  } else {
    livesRemaining--;
    gameState.innerText = `You guessed incorrectly. You have ${livesRemaining} lives left...`;
    guess = "";
  }
});
