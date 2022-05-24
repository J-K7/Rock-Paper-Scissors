// Function that generates a random number and then the corresponding rock, paper or scissors.
function computerPlay() {
    let x = Math.floor(Math.random() * 3);
    
    if (x === 0) {
        return 'rock';
    } else if (x === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Global variables
let computerSelection = computerPlay();
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let i;

// Prompts the player to type their choice, either Rock, Paper, or Scissors and changes it to lower case.
// Verifies correctness of their chocie and either returns it or prompts them again.

function playerChoice() {
    playerSelection = prompt('Choose Rock, Paper, or Scissors').toLowerCase()

    if (playerSelection === 'rock' || 'paper' || 'scissors') {
        return playerSelection;
    } else {
        playerSelection = prompt('Choose Rock, Paper, or Scissors');
    }
}

// Plays a single round of rock, paper, scissors and console logs who the winner is. Incrememnts winner's score.
function playRound(playerSelection, computerSelection) {
   
    if (playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
            console.log(`You lose, ${computerSelection} beats ${playerSelection}.`);
            computerScore++;
            return `You lose, ${computerSelection} beats ${playerSelection}.`;

        } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
                   playerSelection === 'paper' && computerSelection === 'rock' ||
                   playerSelection === 'scissors' && computerSelection === 'paper') {
                        console.log(`You win, ${playerSelection} beats ${computerSelection}.`);
                        playerScore++;
                        return `You win, ${playerSelection} beats ${computerSelection}.`;
       
        } else if (playerSelection === computerSelection) {
            console.log('Round tied.');
            return 'Round tied.';
       
        } else {
            console.log('Incorrect input. Please choose Rock, Paper or Scissors.');
            return 'Incorrect input. Please choose Rock, Paper or Scissors.';
        }
}

// after rounds are completed this function determines who has the higher score and returns the winner and score.
function score() {

    if (playerScore > computerScore) {
         return `Congrats you won the Game ${playerScore} - ${computerScore}`;
   } else if (playerScore < computerScore) {
       return `Too bad, The computer won ${computerScore} - ${playerScore}.`;
   } else {
       return `Tie game ${computerScore} - ${playerScore}.`;
   }
}

// This function plays 5 rounds of Rock, Paper Scissors, and knokcs a point off if an incorrect input is given.
// Declares winner usiing score function.
function game() {

    for (let i = 0; i < 5; i++) {
        
        
        let computerSelection = computerPlay();
        playerChoice();

        if (playRound(playerSelection, computerSelection) === 'Incorrect input. Please choose Rock, Paper or Scissors.') {
            i--;
        }
    }

    return score();

}

//When game() is called multiple times the score does not reset. Will need to be updated but too much for my tiny brain right now