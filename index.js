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

// single round function parameters declared and playerSelection verified as an acceptable input
const computerSelection = computerPlay();
let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();

while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
}
// Function to play a single round of rock paper scissors and declare a winner
function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection ==='Paper') {
        return 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return 'Congrats! You win.';
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beats Paper.';
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return 'Congrats! You win.';
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return 'Congrats! You win.';
    } else {
        return 'Tie game. Play again';
    }
}