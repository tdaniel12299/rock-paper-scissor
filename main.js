//get plchoice
//get comp choice
//determine winner 

const cOptions = ["rock", "paper", "scissors"];
let resultsDisplay = document.getElementById("resultsDisplay")
let humanDiplay = document.getElementById("humanDisplay")
let aiDisplay = document.getElementById("aiDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

let playGame = (playerChoice) => {

    const computerChoice = cOptions[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "Stalemale Tie!"
    } else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You slayed the Dragon! You Win!" : "Fallen Hero, You Lose.";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You slayed the Dragon! You Win!" : "Fallen Hero, You Lose.";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You slayed the Dragon! You Win!" : "Fallen Hero, You Lose.";
                break;
        }
    }

    switch(result){
        case "You slayed the Dragon! You Win!":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
            case "Fallen Hero, You Lose.":
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                break;
    }
    
    playerDisplay.textContent = `Hero: ${playerChoice}`;
    aiDisplay.textContent = `Dragon: ${computerChoice}`;
    resultsDisplay.textContent = result;

}