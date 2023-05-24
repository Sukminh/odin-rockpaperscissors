let winner = "";

function getComputerChoice() {
    const compSel = Math.floor(Math.random() * 3);
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

function game() {
    let playScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let sign = prompt("What's your choice? (rock, paper, or scissors)");
        console.log(playRound(sign, getComputerChoice()));
        if(winner == "Player") {
            playScore++;
        }
        else if(winner == "Comp") {
            compScore++;
        }
        console.log("Score |  Player: " + playScore + " Computer: " + compScore);
    }
    if(playScore > compScore) {
        console.log("You won Rock, Paper, Scissors against Computer!");
    }
    else if(playScore < compScore) {
        console.log("You lose Rock, Paper, Scissors against Computer!");
    }
    else {
        console.log("You tie Rock, Paper, Scissors against Computer!");
    }
}

game();
