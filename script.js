function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else
    return "scissors";
}

function getHumanChoice() {
  const validInput = ["rock", "paper", "scissors"];

  let input = prompt("What do you choose?");

  if (validInput.includes(input)) {
    return input;
  } else
    return "Invalid Input"
}