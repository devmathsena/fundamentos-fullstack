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
  console.log(checkWinner(matrix, tdGameDisplay));
}

function changeEvent(tdGameDisplay) {
  tdGameDisplay.forEach(td => td.addEventListener('click', handleClickMatrix));
}

function removeChangeEvent(tdGameDisplay) {
  tdGameDisplay.forEach(td => td.removeEventListener('click', handleClickMatrix));
}

// Função de callback nomeada
function handleClickVisual(event) {
  let td = event.target; // Obtém o elemento que disparou o evento
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
      td.addEventListener('click', handleClickVisual); // Usa a função nomeada diretamente
  });
}

// Função para remover o evento de click
function removeClickEvent(tdGameDisplay) {
  console.log('removeClickEvent');
  tdGameDisplay.forEach(function (td) {
      td.removeEventListener('click', handleClickVisual); // Remove o mesmo evento
  });
}

function checkWinner(matrix) {

  for (let index = 0; index < 3; index++) {
    if (matrix[index][0] !== "" && matrix[index][0] === matrix[index][1] && matrix[index][1] === matrix[index][2]) {
      removeChangeEvent(tdGameDisplay)
      removeClickEvent(tdGameDisplay)
      return matrix[index][0]; // Retorna o vencedor ('X' ou 'O')
    }
  }

  // Verifica colunas
  for (let index = 0; index < 3; index++) {
    if (matrix[0][index] !== "" && matrix[0][index] === matrix[1][index] && matrix[1][index] === matrix[2][index]) {
      removeChangeEvent(tdGameDisplay)
      removeClickEvent(tdGameDisplay)
      return matrix[0][index];
    }
  }

  // Verifica diagonal principal
  if (matrix[0][0] !== "" && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
    removeChangeEvent(tdGameDisplay)
    removeClickEvent(tdGameDisplay)
    return matrix[0][0];
  }

  // Verifica diagonal secundária
  if (matrix[0][2] !== "" && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
    removeChangeEvent(tdGameDisplay)
    removeClickEvent(tdGameDisplay)
    return matrix[0][2];
  }

  const draw = matrix.flat().every(celula => celula !== "");
  if (draw) {
    removeChangeEvent(tdGameDisplay)
    removeClickEvent(tdGameDisplay)
    return "empate"
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

function execute(trGameDisplay, tdGameDisplay) {
  let matrix = tableToMatrix(trGameDisplay)
  clickEvent(tdGameDisplay)
  changeEvent(tdGameDisplay, matrix)
}

const trGameDisplay = document.querySelectorAll('#gameDisplay tr')
const tdGameDisplay = document.querySelectorAll('#gameDisplay td')
let piece = 'circle'


execute(trGameDisplay, tdGameDisplay)



