//get plchoice
//get comp choice
//determine winner 

const cOptions = ["rock", "paper", "scissors"];
let humanScore = document.getElementById("humanScore");
let aiScore = document.getElementById("aiScore")
let humanDiplay = document.getElementById("humanDisplay")
let aiDisplay = document.getElementById("aiDisplay")

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
    
    playerDisplay.textContent = `Hero: ${playerChoice}`;
    aiDisplay.textContent = `Dragon: ${computerChoice}`;

}