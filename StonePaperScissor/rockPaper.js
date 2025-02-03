document.addEventListener("DOMContentLoaded", () => {
    const rock = document.getElementById('stone');
    const paper = document.getElementById('paper');
    const scissor = document.getElementById('scissor');
    const resultContainer = document.getElementById('resultContainer');
    const finalResult = document.getElementById('result');
    const reset = document.getElementById('reset');

    const scores = document.getElementById('new');

    let userScore = 0;
    let computerScore = 0;

    function getComputerMove() {
        let randomValue = Math.random();
        if(randomValue < 1/3) 
            return 'rock';
        else if(randomValue < 2/3) 
            return 'paper';
        else 
            return 'scissor';
    }

    function playGame(playerMove) {
        let computerMove = getComputerMove();
        let result = '';

        if (playerMove === computerMove) {
            result = 'Tie.';
        } else if (
            (playerMove === 'rock' && computerMove === 'scissor') ||
            (playerMove === 'paper' && computerMove === 'rock') ||
            (playerMove === 'scissor' && computerMove === 'paper')
        ) {
            result = 'You Win!';
            userScore++;
        } else {
            result = 'You Lose!';
            computerScore++;
        }

        finalResult.innerHTML = `Your move is '${playerMove}', and the computer's move is '${computerMove}'. So, ${result}`;
        resultContainer.style.display = 'block';

        scores.innerHTML = `Your's score: ${userScore} & Computer's score: ${computerScore}`;
    }

    rock.addEventListener('click', () => playGame('rock'));
    paper.addEventListener('click', () => playGame('paper'));
    scissor.addEventListener('click', () => playGame('scissor'));

    reset.addEventListener('click', ()=> 
    {
        result.innerHTML = "";
        userScore = 0;
        computerScore = 0;
        scores.innerHTML = "";
    })
});
