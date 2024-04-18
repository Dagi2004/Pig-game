"use strict";
// console.log(document.querySelector(".message").textContent);
// // document.querySelector(".message").textContent = "Correct Number 🏆";
// document.querySelector(".guess").value = 23;
// console.log((document.querySelector(".guess").value = 23));

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //   console.log(typeof guess, guess);

  if (!guess) {
    displayMessage("🚩No Number");
  } else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📉too high" : "📈too low";

      score--;
      console.log((document.querySelector(".score").textContent = score));
    } else {
      displayMessage("🙉Game over");
      console.log((document.querySelector(".score").textContent = 0));
    }
  } else if (guess === secretNumber) {
    console.log((document.querySelector(".number").textContent = secretNumber));
    displayMessage("🏆Congra");

    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      console.log(
        (document.querySelector(".highscore").textContent = highscore)
      );
    }
  }
});

// document.querySelector(".again").addEventListener("click", function () {
//   let score = 20;

//   let secretNumber = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector(".message").textContent = "Start guessing...";
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".guess").value = "";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".number").style.width = "15rem";
// });
