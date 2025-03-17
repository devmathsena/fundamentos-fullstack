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

function createPlayer(playerNumber, playerName, playerPosition) {
  const player = document.createElement("li");

  player.innerText = `${playerNumber} - ${playerName} - ${playerPosition}`;
  player.playerPosition = `${playerPosition}`;
  player.playerNumber = `${playerNumber}`;

  return player;
}

function selectPlayer() {
  const playerNumber = document.getElementById("playerNumber").value;
  const playerName = document.getElementById("playerName").value;
  const playerPosition = document.getElementById("playerPosition").value;

  const confirmation = confirm(`
      Deseja criar o jogador abaixo?
      Número da camisa: ${playerNumber}.
      Nome do jogador: ${playerName}.
      Posição do jogador: ${playerPosition}.
    `)

  if (confirmation) {
    const player = createPlayer(playerNumber, playerName, playerPosition);
    const list = document.getElementById("team__lineup");

    list.appendChild(player);
    alert("Jogador escalado!");
  } else {
    alert("Escalação cancelada.")
  }

}

