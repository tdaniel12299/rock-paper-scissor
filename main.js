//get player choice
//get comp choice
//determine winner 

const cOptions = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;
let playerChoice = prompt("Please enter rock, paper, or scissors: ");
let getComputerChoice = cOptions[Math.floor(Math.random() * cOptions.length)];


if (playerChoice != 'rock' || 'paper' || 'scissors') {
    console.log()
} else {
    console.log('Invalid option, please choose again')
};

let singleRound = (playerChoice, getComputerChoice) => {
    switch (true) {
        case playerChoice === getComputerChoice:
            return 'Its a Draw!'
        case playerChoice === 'rock' && getComputerChoice === 'paper':
            return compScore++  
        case playerChoice === 'rock' && getComputerChoice === 'scissors':
            return  playerScore++
        case playerChoice === 'scissors' && getComputerChoice === 'rock':
            return compScore++ 
        case playerChoice === 'scissors' && getComputerChoice === 'paper':
            return  playerScore++  
        case playerChoice === 'paper' && getComputerChoice === 'rock':
            return  playerScore++ 
        case playerChoice === 'paper' && getComputerChoice === 'scissors':
            return compScore++ 
    }
}

// const getScore = () => {
//     
// }

const game = () => {
    console.log(playerChoice);
    console.log(getComputerChoice);
    console.log(singleRound(playerChoice, getComputerChoice));
    // console.log(playerScore)
    
}



game();