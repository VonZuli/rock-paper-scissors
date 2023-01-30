"use strict";

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors";
      break;
    default:
      console.warn("An error has occurred.");
      break;
  }
  return choice;
}

function getPlayerSelection() {
  let playerChoice = prompt("Select Rock, Paper or Scissors by typing below:");
  switch (playerChoice) {
    case "rock":
    case "Rock":
    case "ROCK":
    case "💎":
      playerChoice = "rock";
      break;
    case "paper":
    case "Paper":
    case "PAPER":
    case "📃":
      playerChoice = "paper";
      break;
    case "scissors":
    case "Scissors":
    case "SCISSORS":
    case "✂":
      playerChoice = "scissors";
      break;
    default:
      console.warn("Entry invalid. Please enter Rock, Paper or Scissors.");
      getPlayerSelection();
      break;
  }
  return playerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  } else {
    return `Draw! ${playerSelection} and ${computerSelection} were the same.`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
  }
}

playGame();
