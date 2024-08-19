"use strict";

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Crroct Number :))))";
    document.querySelector(".number").textContent = secretNumber;

    // manipulating css
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // When the gusee is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High , buddy";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Losser";
      document.querySelector(".score").textContent = 0;
    }

    // when the guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low :/";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Losser";
      document.querySelector(".score").textContent = 0;
    }
  }
});
