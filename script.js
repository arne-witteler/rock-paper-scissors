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

  let input = prompt("What do you choose?").toLowerCase();

  if (validInput.includes(input)) {
    return input;
  } else
    return "Invalid Input"
}

function playGame() {

  const rounds = 5;

  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Invalid Input") {
      console.log("Invalid Input");
      return;
    }
    
    if (humanChoice === computerChoice) {
      return "Draw";
    } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
  }
  
  for (let i = 0; i < rounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}