/*Menu Interativo

Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. 
O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma 
funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções 
uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente
o menu com as 5 opções. 

Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo 
que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.
*/


let option;
let condition;

do {
  option = parseInt(prompt(
    "Selecione uma opção: " +
    "\n 1 - Abrir" +
    "\n 2 - Instalar" +
    "\n 3 - Verificar" +
    "\n 4 - Localizar" +
    "\n 5 - Encerrar"
  ));

  switch (option) {
    case 1:
      alert("Aberto!");
      break;
    case 2:
      alert("Instalado!");
      break;
    case 3:
      alert("Verificado!");
      break;
    case 4:
      alert("Localizado!");
      break;
    case 5:
      condition = false;
      break;
    default:
      alert("Opção inexistente!");
  }

} while (condition !== false);