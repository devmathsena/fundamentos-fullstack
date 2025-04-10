/* ## Tic-Tac-Toe / Jogo da Velha

Construa um jogo tic-tac-toe, conhecido em português como jogo da velha, utilizando HTML, CSS e Javascript. 
Você pode desenvolver com liberdade, da forma que preferir, mas o jogo precisa atender aos seguintes requisitos:

- Deve ser possível incluir os nomes dos dois jogadores;
- O nome do jogador da vez deve ser mostrado na tela e alterado a medida que os turnos vão se alternando;
- Um tabuleiro deve ser mostrado na tela e ser atualizado quando o jogador clicar na região que ele quer marcar;
- Quando um jogador clicar no tabuleiro deve ser marcado um “X” ou “O” de acordo com o jogador da vez e 
  não deve ser possível clicar naquela região novamente;
- Quando um jogador ganhar seu nome deve ser mostrado na tela e as regiões da vitória devem ser destacadas de alguma forma;
- Em caso de empate, uma mensagem de empate deve ser mostrada na tela;
- Deve ser possível reiniciar o jogo para jogar novamente.
*/

function handleClickMatrix() {
  matrix = tableToMatrix(trGameDisplay);
  checkTurn()
  checkWinner(matrix, tdGameDisplay)
}

function changeEvent(tdGameDisplay) {
  tdGameDisplay.forEach(td => td.addEventListener('click', handleClickMatrix));
}

function removeChangeEvent(tdGameDisplay) {
  tdGameDisplay.forEach(td => td.removeEventListener('click', handleClickMatrix));
}

function handleClickVisual(event) {
  let td = event.target;
  if (!td.classList.value) {
    if (piece === 'x') {
      td.classList.remove('circle');
      td.classList.add('x');
      piece = 'circle';
      return;
    }
    if (piece === 'circle') {
      td.classList.remove('x');
      td.classList.add('circle');
      piece = 'x';
      return;
    }
  }
}

function clickEvent(tdGameDisplay) {
  tdGameDisplay.forEach(function (td) {
    td.addEventListener('click', handleClickVisual);
  });
}

function removeClickEvent(tdGameDisplay) {
  tdGameDisplay.forEach(function (td) {
    td.removeEventListener('click', handleClickVisual);
  });
}

function displayStartText() {
  const startText = document.createElement("div");
  startText.textContent = "Começou!";
  startText.className = "start-text";

  setTimeout(() => {
    document.body.appendChild(startText);
  }, 250);

  setTimeout(() => {
    startText.style.opacity = "0";
  }, 2000);

  setTimeout(() => {
    startText.remove();
  }, 3000);

}

function displayWinnerText() {
  const winnerText = document.createElement("div");
  winnerText.textContent = "Vencedor!";
  winnerText.className = "winner-text";

  setTimeout(() => {
    document.body.appendChild(winnerText);
  }, 250);

  setTimeout(() => {
    winnerText.style.opacity = "0";
  }, 4000);

  setTimeout(() => {
    winnerText.remove();
  }, 5000);

}

function displayDrawText() {
  const drawText = document.createElement("div");
  drawText.textContent = "Deu velha!";
  drawText.className = "draw-text";

  setTimeout(() => {
    document.body.appendChild(drawText);
  }, 250);

  setTimeout(() => {
    drawText.style.opacity = "0";
  }, 4000);

  setTimeout(() => {
    drawText.remove();
  }, 5000);

}

function launchConfetti() {

  for (let i = 0; i < 50; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (Math.random() * 2 + 1) + "s";
    document.body.appendChild(confetti);

    let fadeOutTime = parseFloat(confetti.style.animationDuration) * 1000 + 500;

    setTimeout(() => {
      confetti.style.opacity = "0";
    }, fadeOutTime);

    setTimeout(() => confetti.remove(), fadeOutTime + 1000);
  }
}

function checkWinner(matrix, tdGameDisplay) {

  let winner = false

  for (let index = 0; index < 3; index++) {
    if (matrix[index][0] !== "" && matrix[index][0] === matrix[index][1] && matrix[index][1] === matrix[index][2]) {

      removeChangeEvent(tdGameDisplay)
      removeClickEvent(tdGameDisplay)

      let allTds = trGameDisplay[index].querySelectorAll('td')

      allTds.forEach((td) => {
        td.classList.add('marked')
      })
      
      displayWinnerText()
      setTimeout(launchConfetti, 250);
      setTimeout(launchConfetti, 1000);
      setTimeout(launchConfetti, 1750);
      setTimeout(launchConfetti, 2450);

      setWinner(`${matrix[index][0]}`)
      winner = true
    }
  }

  for (let index = 0; index < 3; index++) {
    if (matrix[0][index] !== "" && matrix[0][index] === matrix[1][index] && matrix[1][index] === matrix[2][index]) {

      removeChangeEvent(tdGameDisplay)
      removeClickEvent(tdGameDisplay)

      if (index === 0) {
        tdGameDisplay[index].classList.add('marked')
        tdGameDisplay[index + 3].classList.add('marked')
        tdGameDisplay[index + 6].classList.add('marked')

        displayWinnerText()
        setTimeout(launchConfetti, 250);
        setTimeout(launchConfetti, 1000);
        setTimeout(launchConfetti, 1750);
        setTimeout(launchConfetti, 2450);
      }

      if (index === 1) {
        tdGameDisplay[index].classList.add('marked')
        tdGameDisplay[index + 3].classList.add('marked')
        tdGameDisplay[index + 6].classList.add('marked')

        displayWinnerText()
        setTimeout(launchConfetti, 250);
        setTimeout(launchConfetti, 1000);
        setTimeout(launchConfetti, 1750);
        setTimeout(launchConfetti, 2450);
      }

      if (index === 2) {
        tdGameDisplay[index].classList.add('marked')
        tdGameDisplay[index + 3].classList.add('marked')
        tdGameDisplay[index + 6].classList.add('marked')

        displayWinnerText()
        setTimeout(launchConfetti, 250);
        setTimeout(launchConfetti, 1000);
        setTimeout(launchConfetti, 1750);
        setTimeout(launchConfetti, 2450);
      }

      setWinner(`${matrix[0][index]}`)
      winner = true
    }
  }

  if (matrix[0][0] !== "" && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {

    removeChangeEvent(tdGameDisplay)
    removeClickEvent(tdGameDisplay)

    tdGameDisplay[0].classList.add('marked')
    tdGameDisplay[4].classList.add('marked')
    tdGameDisplay[8].classList.add('marked')

    displayWinnerText()
    setTimeout(launchConfetti, 250);
    setTimeout(launchConfetti, 1000);
    setTimeout(launchConfetti, 1750);
    setTimeout(launchConfetti, 2450);

    setWinner(`${matrix[0][0]}`)
    winner = true
  }

  if (matrix[0][2] !== "" && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {

    removeChangeEvent(tdGameDisplay)
    removeClickEvent(tdGameDisplay)

    tdGameDisplay[2].classList.add('marked')
    tdGameDisplay[4].classList.add('marked')
    tdGameDisplay[6].classList.add('marked')

    displayWinnerText()
    setTimeout(launchConfetti, 250);
    setTimeout(launchConfetti, 1000);
    setTimeout(launchConfetti, 1750);
    setTimeout(launchConfetti, 2450);

    setWinner(`${matrix[0][2]}`)
    winner = true
  }

  const draw = matrix.flat().every(celula => celula !== "");
  if (draw && winner === false) {
    removeChangeEvent(tdGameDisplay)
    removeClickEvent(tdGameDisplay)
    displayDrawText()
  }

  return null;
}

function tableToMatrix(trGameDisplay) {
  let matrix = [];

  trGameDisplay.forEach((tr, index) => {
    const cells = tr.querySelectorAll("td");
    matrix[index] = Array.from(cells).map(td => td.className);
  });

  return matrix
}

function resetEvent() {
  const resetButton = document.getElementById('resetButton')
  resetButton.addEventListener('click', function () {
    window.location.reload();
  })
}

function inputsDisabled() {
  const playersInput = document.querySelectorAll('input')
  playersInput.forEach(function (input) {
    input.setAttribute("disabled", "")
  })
}

function checkTurn() {
  player1.value = player1.value.replace(" 👈", "");
  player2.value = player2.value.replace(" 👈", "");

  if (piece === 'circle') {
    player1.value += " 👈";
  } else if (piece === 'x') {
    player2.value += " 👈";
  }
}

function setWinner(winner) {
  player1.value = player1.value.replace(" 👈", "");
  player2.value = player2.value.replace(" 👈", "");

  if (winner === 'circle') {
    player1.value += " 🥇💯";
  } else if (winner === 'x') {
    player2.value += " 🥇💯";
  }
}


function execute(trGameDisplay, tdGameDisplay) {
  const matrix = tableToMatrix(trGameDisplay)
  inputsDisabled()
  resetEvent()
  clickEvent(tdGameDisplay)
  changeEvent(tdGameDisplay, matrix)
  checkTurn()
}

let piece = 'circle'
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const trGameDisplay = document.querySelectorAll('#gameDisplay tr')
const tdGameDisplay = document.querySelectorAll('#gameDisplay td')
const startButton = document.getElementById('startButton')
let alert = document.getElementById("alert");


startButton.addEventListener('click', function () {
  if (player1.value !== '' && player2.value !== '') {
    displayStartText()
    execute(trGameDisplay, tdGameDisplay)
  } else {
    alert.innerText = "Preencha os nomes dos players!";
    alert.style.display = "block";
    alert.style.opacity = "1";

    setTimeout(() => {
      alert.style.opacity = "0";

      setTimeout(() => {
        alert.style.display = "none";
      }, 1000);
    }, 3000);
  }
})



