/* eslint-disable no-restricted-syntax */
(function anon() {
  const gameCells = [];
  for (let i = 0; i < 16; i++) {
    const newCellItem = {
      text: i + 1,
      status: false,
    };
    gameCells.push(newCellItem);
  }

  const render = (gameCells) => {
    const gameField = document.querySelector('.game');
    gameField.innerHTML = '';
    gameCells.forEach((element) => {
      const gameCell = document.createElement('li');
      gameCell.textContent = element.text;
      gameCell.classList.add('cell');
      gameField.appendChild(gameCell);
      if (element.status) {
        gameCell.classList.add('empty');
      }
    });
  };

  gameCells[11].status = true;
  render(gameCells);

  window.addEventListener('keydown', (event) => {
    const arrowDirection = event.key;

    if (arrowDirection === 'ArrowLeft') {
      for(let i = 0; i < gameCells.length; i++) {
        if (gameCells[i].status) {
          let temp = gameCells[i-1];
          gameCells[i-1] = gameCells[i];
          gameCells[i] = temp;
          render(gameCells);
        }
      }
    } else if (arrowDirection === 'ArrowRight') {
      for(let i = 0; i < gameCells.length; i++) {
        if (gameCells[i].status) {
          console.log(gameCells[i]);
          let temp = gameCells[i+1];
          gameCells[i+1] = gameCells[i];
          gameCells[i] = temp;
          render(gameCells);
        }
      }
    }
  });
}());
