"use strict";
const rollDiceButton = document.querySelector(".btn--roll");
const holdDiceButton = document.querySelector(".btn--hold");
const newGameButton = document.querySelector(".btn--new");
const currentScore_0 = document.querySelector("#current--0");
const currentScore_1 = document.querySelector("#current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score_0 = document.getElementById("score--0");
const score_1 = document.getElementById("score--1");
score_0.textContent = 0;
score_1.textContent = 0;

const dicePic = document.querySelector(".dice");
dicePic.classList.add("hidden");

//To switchPlayer function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // switch
  counter = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

let scores, activePlayer, counter, playing;

function newGame() {
  scores = [0, 0];
  activePlayer = 0;
  counter = 0;
  playing = true;
  score_0.textContent = 0;
  score_1.textContent = 0;
  currentScore_0.textContent = 0;
  currentScore_1.textContent = 0;

  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player1.classList.remove("player--active");
  player0.classList.add("player--active");
  dicePic.classList.add("hidden");
}

// To roll function
function rolldice() {
  if (playing) {
    const randomDiceNumber = Math.trunc(Math.random() * 6) + 1;

    dicePic.classList.remove("hidden");
    dicePic.src = `dice-${randomDiceNumber}.png`;
    if (randomDiceNumber !== 1) {
      counter += randomDiceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = counter;
    } else {
      switchPlayer();
    }
  }
}

// To Hold the dice
function holdDice() {
  if (playing) {
    scores[activePlayer] += counter;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (
      Number(document.getElementById(`score--${activePlayer}`).textContent) >=
      20
    ) {
      playing = false;
      dicePic.classList.add("hidden");

      // classList.add("player--winner");
      document
        .getElementsByClassName(`player--${activePlayer}`)[0]
        .classList.add("player--winner");
      document
        .getElementById(`name--${activePlayer}`)[0]
        .classList.add("player--winner name");
      document
        .getElementById(`player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
}

rollDiceButton.addEventListener("click", rolldice);
holdDiceButton.addEventListener("click", holdDice);
newGameButton.addEventListener("click", newGame);
