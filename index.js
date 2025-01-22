let playerDisplay = document.getElementById("playerDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("resultDisplay");
let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];


function playGame(move){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = ""
    if(computerChoice === move){
        result = "TIE";

    }
    else{
        switch(move){
            case "rock":
                result = (computerChoice === "scissors") ? "You Win" : "You Loose"; 

                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win" : "You Loose"; 

                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win" : "You Loose"; 
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${move}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

    if(result === "You Win"){
        resultDisplay.style.color = "green";
        playerScore ++;
    }
    else if(result === "You Loose"){
        resultDisplay.style.color = "red";
        computerScore ++; 
    }
    else{
        resultDisplay.style.color = "black";
    }

    const playerIsWinning = playerScore > computerScore;
    const computerIsWinning = computerScore > playerScore;

    playerScoreDisplay.style.color = playerIsWinning ? "green" : (playerScore < computerScore ? "red" : "black");
    computerScoreDisplay.style.color = computerIsWinning ? "green" : (computerScore < playerScore ? "red" : "black");
    
    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}