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

function checkWinner(matrix, tdGameDisplay) {

  for (let index = 0; index < 3; index++) {
    if (matrix[index][0] !== "" && matrix[index][0] === matrix[index][1] && matrix[index][1] === matrix[index][2]) {
      removeChangeEvent(tdGameDisplay)
      removeClickEvent(tdGameDisplay)
      console.log(`O vencedor é o: ${matrix[index][0]}`);
      //CORRIGIR LOCALIZAÇÃO DE TR PARA EFETUAR O RISCO
      tdGameDisplay[index].parentElement.classList.add('crossed')
    }
  }

  // Verifica colunas
  for (let index = 0; index < 3; index++) {
    if (matrix[0][index] !== "" && matrix[0][index] === matrix[1][index] && matrix[1][index] === matrix[2][index]) {
      removeChangeEvent(tdGameDisplay)
      removeClickEvent(tdGameDisplay)
      console.log(`O vencedor é o: ${matrix[0][index]}`);
    }
  }

  // Verifica diagonal principal
  if (matrix[0][0] !== "" && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
    removeChangeEvent(tdGameDisplay)
    removeClickEvent(tdGameDisplay)
    console.log(`O vencedor é o: ${matrix[0][0]}`);
  }

  // Verifica diagonal secundária
  if (matrix[0][2] !== "" && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
    removeChangeEvent(tdGameDisplay)
    removeClickEvent(tdGameDisplay)
    console.log(`O vencedor é o: ${matrix[0][2]}`);
  }

  // CORRIGIR CONSIDERAÇÃO DE EMPATE - VITORIA COM TDS PEÇAS PREENCHIDAS INFORMA EMPATE TBM
  const draw = matrix.flat().every(celula => celula !== "");
  if (draw) {
    removeChangeEvent(tdGameDisplay)
    removeClickEvent(tdGameDisplay)
    console.log('Empate!');
  }

  // Se ninguém ganhou
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
  resetButton.addEventListener('click', function() {
    window.location.reload();
  })
}

function execute(trGameDisplay, tdGameDisplay) {
  let matrix = tableToMatrix(trGameDisplay)
  resetEvent()
  clickEvent(tdGameDisplay)
  changeEvent(tdGameDisplay, matrix)
  
}

const trGameDisplay = document.querySelectorAll('#gameDisplay tr')
const tdGameDisplay = document.querySelectorAll('#gameDisplay td')
let piece = 'circle'

console.log(tdGameDisplay);
execute(trGameDisplay, tdGameDisplay)



