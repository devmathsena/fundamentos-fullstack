/*### Escalação do Time

Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador
      e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador
      e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value.
*/

function createPlayer() {
  const playerName = document.getElementById("playerName");
  const playerPosition = document.getElementById("playerPosition");
  const playerNumber = document.getElementById("playerNumber");
  const player = document.createElement("li");

  player.innerText = `${playerNumber} - ${playerName} - ${playerPosition}`;
  player.playerPosition = `${playerPosition}`;
  player.playerNumber = `${playerNumber}`;

  return player;
}

function selectPlayer() {
  const player = createPlayer();
  const list = document.getElementById("team__lineup");

  list.appendChild(player);
}