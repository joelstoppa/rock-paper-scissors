const scoreDiv = document.createElement('div');
scoreDiv.textContent = `Player: 0 Computer: 0`;
document.body.appendChild(scoreDiv);

let playerScore = 0;
let computerScore = 0;

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


function playRound(playerSelection) {
    
    let computerSelection = getComputerChoice()

    let win = `You win! ${playerSelection} beats ${computerSelection}!`;
    let lose = `Computer wins! ${computerSelection} beats ${playerSelection}!`;
    let tie = `It's a tie! You chose ${playerSelection} and computer chose ${computerSelection}`;
    
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        
        playerScore++;
        let result = { result: win, outcome: 'win' };
        return result;
    }
    else if (playerSelection === computerSelection) {
        
        let result = { result: tie, outcome: 'tie' };
        return result;

    }
    else {
        
        computerScore++;
        let result = {result: lose, outcome: 'lose' };
        return result;

    }
    
}
const buttons = document.querySelectorAll('button');
const resultDiv = document.getElementById('results');
const finalResultDiv = document.getElementById('final-result')


buttons.forEach(button => button.addEventListener('click', () => {
    if (playerScore < 3 && computerScore < 3) {
        let result = playRound(button.id);
        resultDiv.textContent = result.result;
        scoreDiv.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        
    }
    if (playerScore === 3) {
        finalResultDiv.textContent = `Congratulations! You won best of 5 rounds.`;
    }
    else if (computerScore === 3) {
        finalResultDiv.textContent = `Sorry, you lost best of 5 rounds.`;
    }
}));