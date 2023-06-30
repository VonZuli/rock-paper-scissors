"use strict";
let userTotal = 0;
let compTotal = 0;
const btnReset = document.createElement("button");
const body = document.querySelector("body");
const btnRock = document.getElementById("btn0");
const btnPaper = document.getElementById("btn1");
const btnScissors = document.getElementById("btn2");

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);

  switch (compChoice) {
    case 0:
      compChoice = "rock";
      break;
    case 1:
      compChoice = "paper";
      break;
    case 2:
      compChoice = "scissors";
      break;
    default:
      console.warn("An error has occurred.");
      break;
  }
  return compChoice;
}

//gets the selection of the player and starts the game when it has been selected
function getPlayerSelection(e) {
  //playerChoice is the target of a click event
  let playerChoice = e.target.id;
  //result of computer choice function is stored as compChoice value
  let compChoice = getComputerChoice();

  const resultText = document.getElementById("msg");

  function selectTransition() {
    e.target.style.border = "10px #ff00ff solid";
    e.target.style.transition = "all 800ms";
  }
  function removeTransition() {
    e.target.classList.add("easeOut");
    e.target.style.border = "none";
  }
  switch (playerChoice) {
    case "btn0":
      playerChoice = "rock";
      selectTransition();
      setInterval(() => {
        removeTransition();
      }, 1000);

      break;
    case "btn1":
      playerChoice = "paper";

      selectTransition();
      setInterval(() => {
        removeTransition();
      }, 1000);

      break;
    case "btn2":
      playerChoice = "scissors";

      selectTransition();
      setInterval(() => {
        removeTransition();
      }, 1000);

      break;
    default:
      resultText.textContent =
        "Invalid Selection. Please select Rock, Paper or Scissors.";
      // getPlayerSelection();
      break;
  }

  return playGame(playerChoice, compChoice);
}

function playAgain() {
  const btnRock = document.getElementById("btn0");
  const btnPaper = document.getElementById("btn1");
  const btnScissors = document.getElementById("btn2");
  userTotal = 0;
  compTotal = 0;
  btnRock.style.filter = "none";
  btnPaper.style.filter = "none";
  btnScissors.style.filter = "none";
  btnRock.disabled = false;
  btnPaper.disabled = false;
  btnScissors.disabled = false;
  userScore.textContent = 0;
  compScore.textContent = 0;
}

function gameOver() {
  const btnRock = document.getElementById("btn0");
  const btnPaper = document.getElementById("btn1");
  const btnScissors = document.getElementById("btn2");
  body.appendChild(btnReset);
  btnReset.textContent = "Play Again?";
  btnRock.style.filter = "grayscale(100%)";
  btnPaper.style.filter = "grayscale(100%)";
  btnScissors.style.filter = "grayscale(100%)";
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
}
function checkGameStatus() {
  if (userTotal === 5 || compTotal === 5) {
    gameOver();
  }
}
function playRound(playerSelection, computerSelection) {
  do {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      let userScore = document.getElementById("userScore");
      userTotal++;
      userScore.textContent = userTotal;
      checkGameStatus();
      return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
    } else if (
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "rock" && computerSelection === "paper")
    ) {
      let compScore = document.getElementById("compScore");
      compTotal++;
      compScore.textContent = compTotal;
      checkGameStatus();
      return `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
    } else if (playerSelection === computerSelection) {
      return `Draw! ${playerSelection.toUpperCase()} and ${computerSelection.toUpperCase()} were the same.`;
    }
  } while (userTotal < 5 || compTotal < 5);
}

function playGame(getPlayerSelection, getComputerChoice) {
  let resultText = document.getElementById("result");
  let playerSelection = getPlayerSelection;
  let computerSelection = getComputerChoice;
  let result = playRound(playerSelection, computerSelection);
  resultText.textContent = result;

  // console.log(
  //   "U",
  //   userTotal,
  //   typeof userTotal,
  //   "C",
  //   compTotal,
  //   typeof compTotal
  // );
}

//Builds the game board adds an event listener to the buttons
function buildGame() {
  const container = document.createElement("div");
  const head1 = document.createElement("h1");
  const userScore = document.createElement("p");
  const compScore = document.createElement("p");

  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.justifyContent = "center";
  body.style.flexWrap = "nowrap";

  container.className = "container";
  container.style.display = "flex";
  container.style.justifyContent = "center";

  head1.textContent = "ROCK-PAPER-SCISSORS";
  head1.style.color = "#99ff85";
  head1.style.alignSelf = "center";
  head1.style.fontSize = "50px";
  head1.style.fontFamily = "arial";

  userScore.textContent = 0;
  userScore.id = "userScore";
  userScore.style.color = "#99ff85";
  userScore.style.font = "bold 100px arial";
  userScore.style.margin = "0";
  userScore.style.height = "100px";
  userScore.style.alignSelf = "center";
  userScore.style.marginRight = "40px";

  compScore.textContent = 0;
  compScore.id = "compScore";
  compScore.style.color = "#99ff85";
  compScore.style.font = "bold 100px arial";
  compScore.style.margin = "0";
  compScore.style.height = "100px";
  compScore.style.alignSelf = "center";
  compScore.style.marginLeft = "40px";

  btnReset.addEventListener("click", playAgain);
  btnReset.style.color = "white";
  btnReset.style.backgroundColor = "red";
  btnReset.style.font = "bold 20px arial";
  btnReset.style.maxWidth = "200px";
  btnReset.style.margin = "0 auto";
  btnReset.style.padding = "5px";

  body.appendChild(head1);
  body.appendChild(container);
  container.insertBefore(userScore, container.firstChild);

  for (let i = 0; i < 3; i++) {
    const btn = document.createElement("button");
    btn.style.margin = "5px";
    btn.style.width = "200px";
    btn.style.height = "200px";
    btn.style.fontWeight = "bold";
    btn.style.fontSize = "100px";
    btn.textContent = `Btn${i}`;
    btn.id = `btn${i}`;
    btn.style.backgroundColor = "#99ff85";
    switch (btn.id) {
      case "btn0":
        btn.textContent = `💎`;
        break;
      case "btn1":
        btn.textContent = `📃`;
        break;
      case "btn2":
        btn.textContent = `✂`;
        break;
      default:
        break;
    }
    container.appendChild(btn);
    btn.addEventListener("click", getPlayerSelection);
  }
  container.appendChild(compScore);

  const result = document.createElement("div");
  const resultText = document.createElement("h2");

  result.id = "result";
  resultText.id = "msg";

  body.appendChild(result);

  result.style.display = "flex";
  result.style.fontFamily = "arial";
  result.style.fontSize = "30px";
  result.style.width = "60%";
  result.style.margin = "0 auto";
  result.style.color = "#99ff85";
  result.appendChild(resultText);
  resultText.textContent = "Make a selection!";
  result.style.justifyContent = "center";
}
buildGame();
