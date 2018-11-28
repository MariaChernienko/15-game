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

  const winAlert = (gameCells) => {
    const compareArr = [];
    for (let i = 0; i < 16; i++) {
      const newCell = {
        text: i + 1,
        status: false,
      };
      compareArr.push(newCell);
    }
    compareArr[15].status = true;
    console.log(compareArr);
    for (let j = 0; j < gameCells.length; j++) {
      for (let k = 0; k < compareArr.length; k++) {
        if (gameCells[j] === compareArr[k]) {
          console.log('you win!!');
        }
      }
    }
  };

  gameCells[15].status = true;
  render(gameCells);

  window.addEventListener('keydown', (event) => {
    const arrowDirection = event.key;
    if (arrowDirection === 'ArrowLeft') {
      for (let i = 0; i < gameCells.length; i++) {
        if (gameCells[i].status && i !== 0 && i !== 4 && i !== 8 && i !== 12) {
          const temp = gameCells[i - 1];
          gameCells[i - 1] = gameCells[i];
          gameCells[i] = temp;
          render(gameCells);
          winAlert(gameCells);
        }
      }
    } else if (arrowDirection === 'ArrowRight') {
      for (let i = 0; i < gameCells.length; i++) {
        if (gameCells[i].status && i !== 3 && i !== 7 && i !== 11 && i !== 15) {
          const temp = gameCells[i + 1];
          gameCells[i + 1] = gameCells[i];
          gameCells[i] = temp;
          render(gameCells);
         
          break;
        }
      }
      winAlert(gameCells);
    } else if (arrowDirection === 'ArrowUp') {
      for (let i = 0; i < gameCells.length; i++) {
        if (gameCells[i].status && i !== 0 && i !== 1 && i !== 2 && i !== 3) {
          const temp = gameCells[i - 4];
          gameCells[i - 4] = gameCells[i];
          gameCells[i] = temp;
          render(gameCells);
        }
      }
    } else if (arrowDirection === 'ArrowDown') {
      for (let i = 0; i < gameCells.length; i++) {
        if (
          gameCells[i].status
          && i !== 12
          && i !== 13
          && i !== 14
          && i !== 15
        ) {
          const temp = gameCells[i + 4];
          gameCells[i + 4] = gameCells[i];
          gameCells[i] = temp;
          render(gameCells);
          break;
        }
      }
    }
  });

  const btn = document.querySelector('button');
  function shuffle(arr) {
    let j;
    let temp;
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
  });
}());
