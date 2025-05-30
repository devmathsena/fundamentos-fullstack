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
  player.setAttribute("playerNumber", playerNumber);
  player.setAttribute("playerName", playerName);
  player.setAttribute("playerPosition", playerPosition);

  return player;
}

function selectPlayer() {
  const player = getInputs();
  const playerNumber = player.playerNumber.value;
  const playerName = player.playerName.value;
  const playerPosition = player.playerPosition.value;

  if (playerNumber === "" || playerName === "" || playerPosition === "") {
    alert("Prencha todos os dados do jogador para poder escalar!");
    return;
  }

  const confirmation = confirm(`
      Deseja criar o jogador abaixo?
      Número da camisa: ${playerNumber}.
      Nome do jogador: ${playerName}.
      Posição do jogador: ${playerPosition}.
    `)

  if (confirmation) {
    const player = createPlayer(playerNumber, playerName, playerPosition);
    const list = getList();

    list.appendChild(player);
    alert("Jogador escalado!");

    cleanInputs();
  } else {
    alert("Escalação cancelada.")
    cleanInputs();
  }

}

function getInputs() {
  const inputs = {};
  inputs.playerNumber = document.getElementById("playerNumber");
  inputs.playerName = document.getElementById("playerName");
  inputs.playerPosition = document.getElementById("playerPosition");

  return inputs;
}

function cleanInputs() {
  const inputs = getInputs();
  inputs.playerNumber.value = "";
  inputs.playerName.value = "";
  inputs.playerPosition.value = "";
}

function getList() {
  const list = document.getElementById("team__lineup");

  return list;
}

function removePlayer() {

  let excluded = false;

  const list = getList();
  const listItems = Array.from(list.children);

  const playerNumberToRemove = document.getElementById("playerNumberToRemove");

  if (playerNumberToRemove.value === "") {
    alert("Digite a camisa do jogador primeiro!");
    return;
  }

  let player = document.querySelector(`#team__lineup > li[playerNumber="${playerNumberToRemove.value}"]`);

  listItems.forEach(listItem => {
    if (listItem.getAttribute("playerNumber") == playerNumberToRemove.value) {

      const confirmation = confirm(`
          Deseja excluir o jogador abaixo?
          Número da camisa: ${player.getAttribute("playerNumber", playerNumber)}.
          Nome do jogador: ${player.getAttribute("playerName", playerName)}.
          Posição do jogador: ${player.getAttribute("playerPosition", playerPosition)}.
        `)

      if (!confirmation) {
        return;
      }

      listItem.remove();
      excluded = true;
      playerNumberToRemove.value = "";
      alert("Jogador excluído!");
    }
  });

  if (!excluded) {
    playerNumberToRemove.value = "";
    alert("Jogador não localizado.");
  }
}
