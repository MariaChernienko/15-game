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

  gameCells[15].status = true;
  render(gameCells);

  window.addEventListener('keydown', (event) => {
    const arrowDirection = event.key;
    console.log(gameCells.status);

    if (arrowDirection === 'ArrowLeft') {
      for (let i = 0; i < gameCells.length; i++) {
        if (gameCells[i].status) {
          const temp = gameCells[i - 1];
          gameCells[i - 1] = gameCells[i];
          gameCells[i] = temp;
          render(gameCells);
        }
      }
    } else if (arrowDirection === 'ArrowRight') {
      for (let i = 0; i < gameCells.length; i++) {
        if (gameCells[i].status) {
          console.log(gameCells[i]);
          const temp = gameCells[i + 1];
          gameCells[i + 1] = gameCells[i];
          gameCells[i] = temp;
          render(gameCells);
          break;
        }
      }
    } else if (arrowDirection === 'ArrowUp') {
      for (let i = 0; i < gameCells.length; i++) {
        if (gameCells[i].status) {
          console.log(gameCells[i]);
          const temp = gameCells[i - 4];
          gameCells[i - 4] = gameCells[i];
          gameCells[i] = temp;
          render(gameCells);
        }
      }
    } else if (arrowDirection === 'ArrowDown') {
      for (let i = 0; i < gameCells.length; i++) {
        if (gameCells[i].status) {
          console.log(gameCells[i]);
          const temp = gameCells[i + 4];
          gameCells[i + 4] = gameCells[i];
          gameCells[i] = temp;
          render(gameCells);
          break;
        }
      }
    }
    console.log(gameCells);
  });


  const btn = document.querySelector('button');
  function shuffle(arr) {
    let j; let temp;
    for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  btn.addEventListener('click', () => {
    shuffle(gameCells);
    render(gameCells);
    console.log(gameCells);
  });
}());
