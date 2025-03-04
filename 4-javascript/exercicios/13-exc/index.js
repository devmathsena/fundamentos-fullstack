/*Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
O menu deve ter a opção de salvar um imóvel.

Para salvar um novo imóvel o programa deve pedir as seguintes informações:

Nome do proprietário.
Quantidade de quartos.
Quantidade de banheiros.
Se possui garagem.

O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/


let option;
let realState = [];

do {
  option = parseInt(prompt(
    `
      Quantidade de imóveis cadastros: ${realState.length}\n
      1 - Cadastrar novo imóvel
      2 - Listar imóveis cadastrados
      3 - Sair
    `
  ));

  switch (option) {
    case 1:
      let newRealState = {};
      newRealState.ownersName = prompt("Qual o nome do proprietário?");
      newRealState.numberOfRooms = parseInt(prompt("Qual a quantidade de quartos?"));
      newRealState.numberOfBathrooms = parseInt(prompt("Qual a quantidade de banheiros?"));
      newRealState.garage = prompt("Possui garagem? (Sim/Não)");
      newRealState.toString = function () {
        return `
          Nome do proprietário: ${this.ownersName}
          Quantidade de quartos: ${this.numberOfRooms}
          Quantidade de banheiros: ${this.numberOfBathrooms}
          Possui garagem: ${this.garage}
        `
      }

      realState.push(newRealState);
      break;
    case 2:
      if (realState.length === 0) {
        alert("Não existem imóveis cadastrados no momento.");
        break;
      }
      for (let index = 0; index < realState.length; index++) {
        alert(realState[index].toString());
      }
      break;
    case 3:
      option = 3;
      break;
    default:
      alert("Opção inválida!");
  }

} while (option !== 3);