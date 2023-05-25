let winner = "";
let playScore = 0;
let compScore = 0;

function getComputerChoice() {
    let compSel = Math.floor(Math.random() * 3);
    if(compSel == 0) {
        return "Rock";
    }
    else if(compSel == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() == "ROCK") {
        if(computerSelection == "Rock") {
            winner = "Tie";
            return "You Tie! Rock ties Rock";
        }
        else if(computerSelection == "Paper") {
            winner = "Comp";
            return "You Lose! Paper beats Rock";
        }
        else {
            winner = "Player";
            return "You Win! Rock beats Scissors";
        }
    }
    else if(playerSelection.toUpperCase() == "PAPER") {
        if(computerSelection == "Rock") {
            winner = "Player";
            return "You Win! Paper beats Rock";
        }
        else if(computerSelection == "Paper") {
            winner = "Tie";
            return "You Tie! Paper ties Paper";
        }
        else {
            winner = "Comp";
            return "You Lose! Scissors beats Paper";
        }
    }
    else {
        if(computerSelection == "Rock") {
            winner = "Comp";
            return "You Lose! Rock beats Scissors";
        }
        else if(computerSelection == "Paper") {
            winner = "Player";
            return "You Win! Scissors beats Paper";
        }
        else {
            winner = "Tie";
            return "You Tie! Scissors ties Scissors";
        }
    }
}

function game(sign) {
    console.log(playRound(sign, getComputerChoice()));
    if(winner == "Player") {
        playScore++;
    }
    else if(winner == "Comp") {
        compScore++;
    }
    console.log("Score |  Player: " + playScore + " Computer: " + compScore);
    if(playScore == 5) {
        console.log("You won Rock, Paper, Scissors against Computer!");
    }
    else if(compScore == 5) {
        console.log("You lose Rock, Paper, Scissors against Computer!");
    }
}

