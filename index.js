// Function for the computer to randomly generate either rock, paper, or scissors
function computerPlay() {
    let x = Math.floor(Math.random() * 3);

    if (x === 0){
        x = 'Rock';
    }else if (x === 1){
        x = 'Paper';
    } else if(x === 2){
        x = 'Scissors';
    }
    console.log(x);
    return x;
}

// Single round function parameters declared
const computerSelection = computerPlay();
let playerSelection;

// Function to verify user selection, play a single round of rock paper scissors, and declare a winner
function playRound(playerSelection, computerSelection) {

        while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase() }

        if (playerSelection === 'rock' && computerSelection ==='Paper' ||
        playerSelection === 'paper' && computerSelection === 'Scissors' ||
        playerSelection === 'scissors' && computerSelection === 'Rock') {
            return `You lose! ${computerSelection.toLowerCase()} beats ${playerSelection}.`;
            
        } else if (playerSelection === 'rock' && computerSelection === 'Scissors' ||
        playerSelection === 'paper' && computerSelection === 'Rock' ||
        playerSelection === 'scissors' && computerSelection === 'Paper') {
            return `Congrats! ${playerSelection} beats ${computerSelection.toLowerCase()} You win.`;
        
        } else {
            return 'Tie game. Play again';
        }
}



//

function game() {
    for (let i = 0; i < 5; i++) {
        computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}