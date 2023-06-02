'use strict';

/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `Correct Number 🥳`;

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 12;
console.log(document.querySelector(`.guess`).value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const displayNumber = function (number) {
  document.querySelector(`.number`).textContent = number;
};

const displayScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};

const displayBody = function (body) {
  document.querySelector(`body`).style.backgroundColor = body;
};

const displayNumberWidth = function (width) {
  document.querySelector(`.number`).style.width = width;
};

//document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // When There Is No Input
  if (!guess) {
    // document.querySelector(`.message`).textContent = `No Number 😭`;
    displayMessage(`No Number 😭`);

    // When Player Wins
  } else if (guess === secretNumber) {
    // document.querySelector(`.message`).textContent = `Correct Number 🥳`;
    displayMessage(`Correct Number 🥳`);
    // document.querySelector(`.number`).textContent = secretNumber;
    displayNumber(secretNumber);
    //document.querySelector(`.score`).textContent = score;
    displayScore(score);

    // document.querySelector(`body`).style.backgroundColor = `#60b347`;
    displayBody(`#60b347`);

    // document.querySelector(`.number`).style.width = `30rem`;
    displayNumberWidth(`30rem`);

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highScore`).textContent = highScore;
    }
  }
  // When guess is Wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(`.message`).textContent =
      //     guess > secretNumber ? `Too High` : `Too Low`;
      displayMessage(guess > secretNumber ? `Too High` : `Too Low`);
      score--;
      //document.querySelector(`.score`).textContent = score;
      displayScore(score);
    }
    // When Player Looses
    else {
      //document.querySelector(`.message`).textContent = `You Lost The GAME 🙁`;
      displayMessage(`You Lost The GAME 🙁`);
      //document.querySelector(`.score`).textContent = 0;
      displayScore(0);
      //   document.querySelector(`body`).style.backgroundColor = `#FF0000`;
      displayBody(`#FF0000`);
      //document.querySelector(`.number`).textContent = `😭`;
      displayNumber(`😭`);
    }
  }
  // // When guess is too High
  //   }else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(`.message`).textContent = `Too High`;
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     }
  //     // When Player Looses
  //     else {
  //       document.querySelector(`.message`).textContent = `You Lost The GAME 🙁`;
  //       document.querySelector(`.score`).textContent = 0;
  //       document.querySelector(`body`).style.backgroundColor = `#FF0000`;
  //       document.querySelector(`.number`).textContent = `😭`;
  //     }
  //   }
  //   // If Guess Is Too Low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(`.message`).textContent = `Too Low`;
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       document.querySelector(`.message`).textContent = `You Lost The GAME 🙁`;
  //       document.querySelector(`.score`).textContent = 0;
  //       document.querySelector(`body`).style.backgroundColor = `#FF0000`;
  //       document.querySelector(`.number`).textContent = `😭`;
  //     }
  //   }
});

// When Again Is Clicked
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //document.querySelector(`.message`).textContent = `You Lost The GAME 🙁`;
  displayMessage(`You Lost The GAME 🙁`);
  //document.querySelector(`.score`).textContent = score;
  displayScore(score);
  //   document.querySelector(`.number`).textContent = `?`;
  displayNumber(`?`);
  //   document.querySelector(`.number`).style.width = `15rem`;
  displayNumberWidth(`15rem`);
  //   document.querySelector(`body`).style.backgroundColor = `#222`;
  displayBody(`#222`);

  document.querySelector(`.guess`).value = ``;
});
