const choiceButtons = document.querySelectorAll("#choiceButton");
const resetButton = document.querySelector("#resetButton");
const result = document.querySelector("#result");

choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (roundCount < 5) {
            let humanChoice = button.textContent;
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            roundCount++;

            if (roundCount === 5) {
                logGameWinner();
            }
        }
    });
});

resetButton.addEventListener("click", () => {
    resetGame();
    logScore();
});

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

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function logGameWinner() {
    const gameWinnerParagraph = document.createElement("p");
    if (humanScore > computerScore) {
        console.log("Human wins the game!");
        gameWinnerParagraph.textContent = "Human wins the game!";
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
        gameWinnerParagraph.textContent = "Computer wins the game!";
    } else {
        console.log("It's a tie!");
        gameWinnerParagraph.textContent = "It's a tie!";
    }
    result.appendChild(gameWinnerParagraph);
}

function logScore() {
    let humanScoreParagraph = document.querySelector("#human-score");
    let computerScoreParagraph = document.querySelector("#computer-score");

    if (!humanScoreParagraph) {
        humanScoreParagraph = document.createElement("p");
        humanScoreParagraph.id = "human-score";
        result.appendChild(humanScoreParagraph);
    }

    if (!computerScoreParagraph) {
        computerScoreParagraph = document.createElement("p");
        computerScoreParagraph.id = "computer-score";
        result.appendChild(computerScoreParagraph);
    }

    humanScoreParagraph.textContent = `Human score: ${humanScore}`;
    computerScoreParagraph.textContent = `Computer score: ${computerScore}`;

    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
}

function logChoices(humanChoice, computerChoice) {
    console.log(`Human choice: "${humanChoice}"`);
    console.log(`Computer choice: "${computerChoice}"`);
}

function playRound(humanChoice, computerChoice) {
    logRoundCount();
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

function logRoundCount() {
    let roundCountParagraph = document.querySelector("#round-count");
    if (!roundCountParagraph) {
        roundCountParagraph = document.createElement("p");
        roundCountParagraph.id = "round-count";
        result.appendChild(roundCountParagraph);
    }
    roundCountParagraph.textContent = `Round: ${roundCount + 1}`;
    console.log(`Round: ${roundCount + 1}`);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    result.innerHTML = "";
}
