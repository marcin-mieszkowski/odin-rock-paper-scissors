console.log("Play the game!");

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return "tie";
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        return "human";
    } else {
        computerScore++;
        return "computer";
    }
}

function playFiveRounds() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let roundWinner = playRound(humanChoice, computerChoice);
        logChoices(humanChoice, computerChoice);
        logRoundWinner(roundWinner);
    }
}

function logRoundWinner(winner) {
    if (winner === "human") {
        console.log("Human wins the round!");
    } else if (winner === "computer") {
        console.log("Computer wins the round!");
    } else {
        console.log("It's a tie!");
    }
}

function logGameWinner() {
    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}

function logScore() {
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

function logChoices(humanChoice, computerChoice) {
    console.log(`Human choice: "${humanChoice}"`);
    console.log(`Computer choice: "${computerChoice}"`);
}

function playGame() {
    playFiveRounds();
    logScore();
    logGameWinner();
}

playGame();
