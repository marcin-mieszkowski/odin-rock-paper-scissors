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

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    logChoices(humanChoice, computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("Human wins the round!");
    } else {
        computerScore++;
        console.log("Computer wins the round!");
    }
    logScore();
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`------ Round ${i + 1} ------`);
        playRound();
    }
    logGameWinner();
}

playGame();
