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

function clickEvent(tdGameDisplay) {
  tdGameDisplay.forEach(function (td) {
    td.addEventListener('click', function () {
      if (!td.classList.value) {
        if (piece === 'x') {
          td.classList.remove('circle');
          td.classList.add('x');
          piece = 'circle';
          return
        }
        if (piece === 'circle') {
          td.classList.remove('x');
          td.classList.add('circle');
          piece = 'x';
          return
        }
      }
    });
  });
}

function tableToMatrix(trGameDisplay) {
  let matrix = [];

  trGameDisplay.forEach((tr, index) => {
    const cells = tr.querySelectorAll("td");

    matrix[index] = Array.from(cells).map(td => td.className);
  });

  return matrix
}

function changeEvent(tdGameDisplay, matrix) {
  tdGameDisplay.forEach(function (td) {
    td.addEventListener('click', function () {
      matrix = tableToMatrix(trGameDisplay)
      console.log(matrix);
    })
  })
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



