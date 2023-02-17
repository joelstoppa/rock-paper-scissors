function getComputerChoice() {
    let random = Math.round(Math.random() * 10);

    if (random <= 3) {
        return 'rock';
    }
    else if (random <= 6) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}



function playRound(playerSelection, computerSelection) {
    
    let win = `You win! ${playerSelection} beats ${computerSelection}!`;
    let lose = `Computer wins! ${computerSelection} beats ${playerSelection}!`;
    let tie = `It's a tie! You chose ${playerSelection} and computer chose ${computerSelection}`;
    
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        
        return { result: win, outcome: 'win' };
    }
    else if (playerSelection === computerSelection) {
        return { result: tie, outcome: 'tie' };
    }
    else {
        return {result: lose, outcome: 'lose' };
    }
    
    
    }



function playGame() {
    
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        
        let computerSelection = getComputerChoice();
        let playerSelection = prompt('Rock paper or scissors?').toLowerCase();
        let roundResult = playRound(playerSelection, computerSelection);

        console.log(roundResult.result);

        if (roundResult.outcome === 'win') {
            playerScore++;
        }
        else if (roundResult.outcome === 'lose') {
            computerScore++;
        }

        console.log('Player score: ' + playerScore);
        console.log('Computer score: ' + computerScore);

        if (playerScore >= 3 || computerScore >= 3) {
            break;
        }

    }

    if (playerScore > computerScore) {
        console.log('You won the game!');
    }
    else if (playerScore < computerScore) {
        console.log('You lost the game.');
    }
    else {
        console.log('The game was a tie.');
    }

        

    }





playGame();
