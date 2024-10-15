console.log("Hello World!");

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

let computerSelection = getComputerChoice();
console.log(`Computer choice: "${computerSelection}"`);

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors");
    return humanChoice.toLowerCase();
}

let humanSelection = getHumanChoice();
console.log(`Human choice: "${humanSelection}"`);

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return "Tie";
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        humanScore++;
        return "Human wins";
    } else if (humanSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "Computer wins";
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        humanScore++;
        return "Human wins";
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "Computer wins";
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "Computer wins";
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        humanScore++;
        return "Human wins";
    }
}

console.log(playRound(humanSelection, computerSelection));
console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);

