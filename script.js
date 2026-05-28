const startScreen = document.querySelector(".screen--start");
const gameScreen = document.querySelector(".screen--game");
const endScreen = document.querySelector(".screen--end");

const playButton = document.querySelector("#start-game-button");
const playAgainButton = document.querySelector("#play-again-button");
const mainMenuButton = document.querySelector("#main-menu-button")

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

const choiceButtons = document.querySelectorAll(".screen__buttons");
const currentRound = document.querySelector("#current-round");

const playerPoints = document.querySelector("#player-score");
const computerPoints = document.querySelector("#computer-score");

const finalPlayerPoints = document.querySelector("#final-player-score");
const finalComputerPoints = document.querySelector("#final-computer-score");

const gameMessage = document.querySelector(".screen__message");
const gameOverMessage = document.querySelector("#game-over-text");

const playerChoiceImg = document.querySelector("#player-choice-img");
const computerChoiceImg = document.querySelector("#computer-choice-img");

let roundCounter = 1;
const maxRounds = 5;
let humanScore = 0;
let computerScore = 0;

playButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
})

playAgainButton.addEventListener("click", () => {
  roundCounter = 1;
  humanScore = 0;
  computerScore = 0;

  currentRound.textContent = roundCounter;
  playerPoints.textContent = humanScore;
  computerPoints.textContent = computerScore;

  endScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
})

mainMenuButton.addEventListener("click", () => {
  roundCounter = 1;
  humanScore = 0;
  computerScore = 0;

  currentRound.textContent = roundCounter;
  playerPoints.textContent = humanScore;
  computerPoints.textContent = computerScore;

  endScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
})

rockButton.addEventListener("click", () => {
  let input = "rock";
  let computerChoice = getComputerChoice();
  roundCounter++;
  currentRound.textContent = roundCounter;
  playRound(input, computerChoice);
})

paperButton.addEventListener("click", () => {
  let input = "paper";
  let computerChoice = getComputerChoice();
  roundCounter++;
  currentRound.textContent = roundCounter;
  playRound(input, computerChoice);
})

scissorsButton.addEventListener("click", () => {
  let input = "scissors";
  let computerChoice = getComputerChoice();
  roundCounter++;
  currentRound.textContent = roundCounter;
  playRound(input, computerChoice);
})

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else
    return "scissors";
}

function playRound(humanChoice, computerChoice) {

  if (roundCounter < maxRounds) {

    playerChoiceImg.src = `assets/hand-${humanChoice}.svg`;
    computerChoiceImg.src = `assets/hand-${computerChoice}.svg`;

      if (humanChoice === "Invalid Input") {
        console.log("Invalid Input");
        return;
      }
      
      if (humanChoice === computerChoice) {
        gameMessage.classList.remove("hidden");
        gameMessage.textContent = "It's a draw!".toUpperCase();
      } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        currentRound.textContent = roundCounter;
        computerPoints.textContent = computerScore;
        gameMessage.classList.remove("hidden");
        gameMessage.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`.toUpperCase();
        
      } else {
        humanScore++;
        currentRound.textContent = roundCounter;
        playerPoints.textContent = humanScore;
        gameMessage.classList.remove("hidden");
        gameMessage.textContent = `You win! ${humanChoice} beats ${computerChoice}!`.toUpperCase();
        
      }
    } else {
      endScreen.classList.remove("hidden");
      gameScreen.classList.add("hidden");
      gameMessage.classList.add("visible");
      gameMessage.textContent = "CHOOSE YOUR WEAPON"
      playerChoiceImg.src = "";
      computerChoiceImg.src = "";
      finalPlayerPoints.textContent = humanScore;
      finalComputerPoints.textContent = computerScore;

      if (humanScore > computerScore) {
        gameOverMessage.textContent = "Congratulations! You won the match!";
      } else if (computerScore > humanScore) {
        gameOverMessage.textContent = "Too bad! The CPU won the match!";
      } else {
        gameOverMessage.textContent = "It's a tie!";
      }
    }
  }