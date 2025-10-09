function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch(randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      throw new Error("Random number generation failed...");
  }
}

function addResult(results, string) {
    const currResult = document.createElement("p");
    currResult.textContent = string;
    results.appendChild(currResult);
}

function playRound(humanChoice, computerChoice, results) {
  const humanPlay = humanChoice.toLowerCase();
  const computerPlay = computerChoice.toLowerCase();

  if (humanPlay == computerPlay) {
    const firstLetter = humanChoice.charAt(0).toUpperCase()
    const play = `${firstLetter}${humanChoice.substr(1)}`;
    addResult(results, `Draw! both chose ${play}.`);
    return undefined;
  } else if (humanPlay == "paper" && computerPlay == "scissors"){
    addResult(results, "You lose! Scissors beat Paper");
    return false;
  } else if (humanPlay == "scissors" && computerPlay == "rock") {
    addResult(results, "You lose! Rock beats Scissors");
    return false;
  } else if (humanPlay == "rock" && computerPlay == "paper") {
    addResult(results, "You lose! Paper beats Rock");
    return false;
  } else if (computerPlay == "paper" && humanPlay == "scissors"){
    addResult(results, "You win! Scissors beat Paper");
    return true;
  } else if (computerPlay == "scissors" && humanPlay == "rock") {
    addResult(results, "You win! Rock beats Scissors");
    return true;
  } else if (computerPlay == "rock" && humanPlay == "paper") {
    addResult(results, "You win! Paper beats Rock");
    return true;
  }

}

function removeResetResults(results, score) {
  humanScore = 0;
  computerScore = 0;
  results.childNodes.forEach((node) => {
    if (node.tagName === 'P')
      node.textContent = "";
    });
  score.textContent = `You ${humanScore}, PC ${computerScore}`;
}

function updateGame(humanWin, score, results) {
  if (humanWin) {
    humanScore += 1;
  } else if (humanWin === false) {
    computerScore += 1;
  }
  score.textContent = `You ${humanScore}, PC ${computerScore}`;
  if (computerScore == 5) {
    alert(`You lost ${computerScore} - ${humanScore}! Try again 🫩`);
  } else if (humanScore == 5) {
    alert(`You won ${humanScore} - ${computerScore} ! congrats 🤗`);
  }
}

function playGame() {
  const div = document.querySelector("div");
  const body = document.querySelector("body");
  const rockButton = document.createElement("button");
  const paperButton = document.createElement("button");
  const resetButton = document.createElement("button");
  const scissorsButton = document.createElement("button");
  const results = document.querySelector("#results");
  const score = document.createElement("span");

  rockButton.textContent = "Rock";
  paperButton.textContent = "Paper";
  scissorsButton.textContent = "Scissors";
  resetButton.textContent = "reset";
  score.textContent = `You ${humanScore}, PC ${computerScore}`;
  
  div.addEventListener("click", (event) => {
    if (humanScore >= 5 || computerScore >= 5) {
      return;
    }
    const humanSelection = event.target.textContent;
    const computerSelection = getComputerChoice();
    
    const humanWin = playRound(humanSelection, computerSelection, results);
    updateGame(humanWin, score, results);
    
  });

  resetButton.addEventListener("click", () => {
    removeResetResults(results, score);
  })

  body.append(resetButton);
  div.appendChild(rockButton);
  div.appendChild(paperButton);
  div.appendChild(scissorsButton);
  results.appendChild(score);
}

let humanScore = 0;
let computerScore = 0;

playGame();