function computerPlay() {
  const selection = ["rock", "paper", "scissors"];
  const selected = selection[Math.floor(Math.random() * 3)];
  return selected;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "player wins";
    } else {
      return "computer wins";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "player wins";
    } else {
      return "computer wins";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "player wins";
    } else {
      return "computer wins";
    }
  }
}

function game() {
  let playerScore = 0;
  let compScore = 0;
  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay();
    let playerPrompt = prompt("enter 'rock', 'paper', or 'scissors'", "");
    let playerSelection = playerPrompt? playerPrompt.toLowerCase() : "";
    const roundResult = playRound(playerSelection, computerSelection);
    switch (roundResult) {
      case "tie":
        console.log('player : ' + playerSelection, 'computer : ' + computerSelection);
        console.log(roundResult, playerScore + ":" + compScore);
        break;
      case "player wins":
        playerScore++;
        console.log('player : ' + playerSelection, 'computer : ' + computerSelection);
        console.log(roundResult, playerScore + ":" + compScore);
        break;
      case "computer wins":
        compScore++;
        console.log('player : ' + playerSelection, 'computer : ' + computerSelection);
        console.log(roundResult, playerScore + ":" + compScore);
        break;
    }
  }
  if(playerScore === compScore){
    console.log("no one is the winner! Tie!", playerScore + ":" + compScore);
  }
  else if (playerScore > compScore) {
    console.log("player is the winner", playerScore + ":" + compScore);
  } else {
    console.log("computer is the winner", playerScore + ":" + compScore);
  }
}

game();
