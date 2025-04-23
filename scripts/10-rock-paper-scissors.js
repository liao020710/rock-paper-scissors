// || => default operator
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };
  
  updateScoreElement();
  
  // 主程式：剪刀石頭布邏輯
  function playGame(playerMove) {
    const computerMove = pickComputerMove();
  
    let result = '';
    if (playerMove === 'Scissors') {
      if (computerMove === 'Rock') {
        result = '你輸了.';
      } else if (computerMove === 'Paper') {
        result = '你贏了.';
      } else {
        result = '平手.';
      }
    } else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
        result = '你贏了.';
      } else if (computerMove === 'Paper') {
        result = '平手.';
      } else {
        result = '你輸了.';
      }
    } else if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
        result = '平手.';
      } else if (computerMove === 'Paper') {
        result = '你輸了.';
      } else {
        result = '你贏了.';
      }
    }
  
    // 更新分數
    if (result === '你贏了.') {
      score.wins++;
    } else if (result === '你輸了.') {
      score.losses++;
    } else {
      score.ties++;
    }
  
    // 儲存分數
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
  
    // 對戰結果
    document.querySelector('.js-result').innerHTML = result;
  
    // 建立正確圖片路徑（轉小寫）
    const playerImage = `images/${playerMove.toLowerCase()}-emoji.png`;
    const computerImage = `images/${computerMove.toLowerCase()}-emoji.png`;
  
    // 除錯輸出
    console.log('玩家出:', playerImage);
    console.log('電腦出:', computerImage);
  
    // 插入圖片
    document.querySelector('.js-moves').innerHTML = `
      你出 <img src="${playerImage}" class="move-icon">
      <img src="${computerImage}" class="move-icon"> 對手出
    `;
  }
  
  // 更新分數顯示
  function updateScoreElement() {
    document.querySelector('.js-score').innerHTML =
      `贏: ${score.wins} 輸: ${score.losses} 平手: ${score.ties}`;
  }
  
  // 隨機出拳
  function pickComputerMove() {
    const randomNum = Math.random();
    let computerMove = '';
  
    if (randomNum < 1 / 3) {
      computerMove = 'Rock';
    } else if (randomNum < 2 / 3) {
      computerMove = 'Paper';
    } else {
      computerMove = 'Scissors';
    }
  
    return computerMove;
  }
  