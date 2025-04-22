 // || => default operator
 let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

//querySelector 選元素時記得要加.

/*
if(score === null){ //default score
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
*/
function playGame(playerMove) {
    const computerMove = pickComputerMove(); //再執行pickComputerMove function

    let result = '';
    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = '你輸了.';
        } else if (computerMove === 'Paper') {
            result = '你贏了.';
        } else if (computerMove === 'Scissors') {
            result = '平手.';
        }

    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = '你贏了.';
        } else if (computerMove === 'Paper') {
            result = '平手.';
        } else if (computerMove === 'Scissors') {
            result = '你輸了.';
        }

    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = '平手.';
        } else if (computerMove === 'Paper') {
            result = '你輸了.';
        } else if (computerMove === 'Scissors') {
            result = '你贏了.';
        }
    }

    if (result === '你贏了.') {
        score.wins++;
    } else if (result === '你輸了.') {
        score.losses++;
    } else if (result === '平手.') {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));
    //JSON 只支援字串所以用JSON.stringity把物件轉成字串
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `你出 <img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">對手出`;

}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `贏: ${score.wins} 輸: ${score.losses} 平手: ${score.ties}`;
}

function pickComputerMove() {
    const randomNum = Math.random();
    let computerMove = '';

    if (randomNum >= 0 && randomNum < 1 / 3) {
        computerMove = 'Rock'
    } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        computerMove = 'Paper'
    } else if (randomNum >= 2 / 3 && randomNum < 1) {
        computerMove = 'Scissors'
    }
    return computerMove;
}