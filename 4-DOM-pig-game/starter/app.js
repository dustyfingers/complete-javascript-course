/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('winner');
    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');
    document.querySelector(`.player-0-panel`).classList.add('active');
    gamePlaying = true;
}


function nextPlayer() {
    // next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector(`.player-0-panel`).classList.toggle('active');
    document.querySelector(`.player-1-panel`).classList.toggle('active');
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}

function playerWins() {
    document.querySelector(`#name-${activePlayer}`).textContent = 'WINNER!';
    document.querySelector(`#dice-1`).style.display = 'none';
    document.querySelector(`#dice-2`).style.display = 'none';
    document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
    gamePlaying = false;
}

function setWinningScore(score) {
    return score ? score : 100;
}


document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. make dice random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // 2. display result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = `dice-${dice1}.png`;
        document.getElementById('dice-2').src = `dice-${dice2}.png`;
        let dice = [dice1, dice2];

        // 3. update the roundScore if rolled number !== 1
        if (dice === [6, 6]) {
            //player loses score if roll 2 sixes in a row
            scores[activePlayer] === 0;
            document.querySelector(`#score-${activePlayer}`).textContent = '0';
            nextPlayer();
        } else if (!dice.contains(1)) {
            // add score
            roundScore += (dice[0] + dice[1]);
            document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
            nextPlayer();
        } else {
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. add currentScore to players global score
        scores[activePlayer] += roundScore;

        // 2. update ui 
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
        var input = document.querySelector('.final-score').value;
        var winningScore = setWinningScore(input);

        // 3. check if player won game
        scores[activePlayer] >= winningScore ? playerWins() : nextPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', init);