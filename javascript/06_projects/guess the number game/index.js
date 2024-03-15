let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessBox");
const submit = document.querySelector("#submitButton");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".remainingGuess");
const lowOrHi = document.querySelector(".lowORhigh");
const startOver = document.querySelector(".results");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter a valid Number");
  } else if (guess < 1 || guess > 100) {
    alert("Enter a Number within range 1-100");
  } else {
    prevGuess.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You Guessed it Right 🎊");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Your Guess is Lower than the Number");
  } else if (guess > randomNumber) {
    displayMessage("Your Guess is Higher than the Number");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = ` ${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=""
        remaining.innerHTML= ` ${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true;
        lowOrHi.innerHTML=""
    })
}
