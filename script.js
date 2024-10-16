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
        return `Tie - both chose: "${humanSelection}"`;
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        humanScore++;
        return "Human wins this round";
    } else if (humanSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "Computer wins this round";
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        humanScore++;
        return "Human wins this round";
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "Computer wins this round";
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "Computer wins this round";
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        humanScore++;
        return "Human wins this round";
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        let humanSelection = getHumanChoice();
        console.log(`Human choice: "${humanSelection}"`);

        let computerSelection = getComputerChoice();
        console.log(`Computer choice: "${computerSelection}"`);

        console.log(playRound(humanSelection, computerSelection));
    }
    if (humanScore > computerScore) {
        console.log("Human wins the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

playGame();
