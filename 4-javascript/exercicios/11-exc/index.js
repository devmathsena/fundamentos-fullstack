/*Fila de Espera

Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 
O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes 
esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 

O menu também deve permitir escolher entre as opções de “Novo paciente”, 
para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, 
que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. 

O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/


const queue = [];
let option;

do {
  let pacientList = "";
  let counter = 1;
  for(let index=0; index < queue.length; index++){
    if(queue[index] !== undefined) {
      pacientList += `\n${counter}º ${queue[index]}\n`;
      counter++;
    }
  }

  option = parseInt(prompt(
    `Pacientes:
    ${pacientList}
    Escolha uma opção abaixo:\n
    1 - Novo paciente\n
    2 - Consultar paciente\n
    3 - Sair`
  ));

  switch(option) {
    case 1:
      queue.push(prompt("Qual o nome do novo paciente?"));
      break;
    case 2:
      queue.shift();
      break;
    case 3:
      option = 3;
      break;
    default:
      alert("Opção inválida!")
  }

} while (option !== 3);
