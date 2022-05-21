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

let computerSelection = computerPlay();
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let i;

function playerChoice() {
    playerSelection = prompt('Choose Rock, Paper, or Scissors').toLowerCase()

    if (playerSelection === 'rock' || 'paper' || 'scissors') {
        return playerSelection;
    } else {
        playerSelection = prompt('Choose Rock, Paper, or Scissors');
    }
}
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

function game() {

    for (let i = 0; i < 5; i++) {
       
        let computerSelection = computerPlay();
        playerChoice();

        if (playRound(playerSelection, computerSelection) === 'Incorrect input. Please choose Rock, Paper or Scissors.') {
            i--;
        }
    }

    if (playerScore > computerScore) {
        return `Congrats you won the Game ${playerScore} - ${computerScore}`;
    } else if (playerScore < computerScore) {
        return `Too bad, The computer won ${computerScore} - ${playerScore}.`;
    } else {
        return `Tie game ${computerScore} - ${playerScore}.`;
    }
}