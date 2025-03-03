/*Pilha de Cartas

Escreva um programa em javascript para simular um baralho de cartas. 
O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que 
estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. 

Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. 
Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada.

O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

let option;
let stack = [];
let counter = 0;


do {
  option = parseInt(prompt(
    `Quantidade de cartas: ${counter}\n
     Escolha uma das opções abaixo:\n
     1 - Adicionar uma carta\n
     2 - Puxar uma carta\n
     3 - Sair
    `
  ));

  switch(option) {
    case 1:
      stack.push(prompt("Qual o nome da carta?"));
      counter++;
      break;
    case 2:
      if (stack.length < 1) {
        alert("Não há cartas no momento!");
        break;
      }
      alert(`A carta puxada foi ${stack[stack.length-1]}`);
      stack.pop();
      counter--;
      break;
    case 3:
      option = 3;
      break;
    default:
      alert("Opção inválida!")
  }
} while (option !== 3);
