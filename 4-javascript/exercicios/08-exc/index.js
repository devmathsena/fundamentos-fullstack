/*Controle Financeiro

Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível 
e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. 
Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor 
com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. 

A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.
*/


let money;
let condition;

money = parseFloat(prompt("Qual a quantidade inicial de dinheiro disponível?"));

do {

  option = parseInt(prompt(
    "Quantidade de dinheiro disponível: " + money +
    "\nSelecione uma opção: " +
    "\n 1 - Adicionar" +
    "\n 2 - Remover" +
    "\n 3 - Sair"
  ));

  switch (option) {
    case 1:
      money += parseFloat(prompt("Qual a quantidade a ser adicionada?"));
      break;
    case 2:
      money -= parseFloat(prompt("Qual a quantidade a ser subtraída?"));
      break;
    case 3:
      condition = false;
      break;
    default:
      alert("Opção inexistente!");
  }

} while (condition !== false);