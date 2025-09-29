function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

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

function getHumanChoice() {
  return prompt("Rock, Paper or Scissors ?");
}

function playRound(humanChoice, computerChoice) {
  let humanPlay = humanChoice.toLowerCase();
  let computerPlay = computerChoice.toLowerCase();
  
  if (humanPlay == computerPlay) {
    let firstLetter = humanChoice.charAt(0).toUpperCase()
    humanPlay = `${firstLetter}${humanChoice.substr(1)}`;
    console.log(`Draw! both chose ${humanPlay}.`);
    return undefined;
  } else if (humanPlay == "paper" && computerPlay == "scissors"){
    console.log("You lose! Scissors beat Paper");
    return false;
  } else if (humanPlay == "scissors" && computerPlay == "rock") {
    console.log("You lose! Rock beats Scissors");
    return false;
  } else if (humanPlay == "rock" && computerPlay == "paper") {
    console.log("You lose! Paper beats Rock");
    return false;
  } else if (computerPlay == "paper" && humanPlay == "scissors"){
    console.log("You win! Scissors beat Paper");
    return true;
  } else if (computerPlay == "scissors" && humanPlay == "rock") {
    console.log("You win! Rock beats Scissors");
    return true;
  } else if (computerPlay == "rock" && humanPlay == "paper") {
    console.log("You win! Paper beats Rock");
    return true;
  }

}

function playGame() {
  let humanScore = 0;
  let computerSocre = 0;

  for (let i = 0; i < 5; i += 1) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    let humanWin = playRound(humanSelection, computerSelection);
    
    if (humanWin) {
      humanScore += 1;
    } else if (humanWin === false) {
      computerSocre += 1;
    }
  } 

  if (humanScore < computerSocre) {
    console.log(`You lose ${computerSocre} to ${humanSocre} ! Try again.`)
  } else {
    console.log(`You won ${humanScore} to ${computerSocre} ! Congrats.`)
  }
}

playGame()