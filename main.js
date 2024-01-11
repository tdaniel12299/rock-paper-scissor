//get plchoice
//get comp choice
//determine winner 

const cOptions = ["rock", "paper", "scissors"];
const humanScore = document.getElementById("humanScore");
const aiScore = document.getElementById("aiScore")

let playGame = (playerChoice) => {

    const computerChoice = cOptions[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "Stalemale Tie!"
    } else {
        switch(playerChoice){}