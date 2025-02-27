/*Conversor de Medidas

Escreva um programa em javascript que funcione como um conversos de medidas. 
O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida 
esse valor deve ser convertido. As opções são:

milímetro (mm)
centímetro (cm)
decímetro (dm)
decâmetro (dam)
hectômetro (hm)
quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)
*/

let result = 0;
let meters = parseFloat(prompt("Digite o valor em metros:"));
let option = parseInt(prompt(
    "Escolha sua unidade de medida:" +
    "\n1 - milímetro (mm)" +
    "\n2 - centímetro (cm)" +
    "\n3 - decímetro (dm)" +
    "\n4 - decâmetro (dam)" +
    "\n5 - hectômetro (hm)" +
    "\n6 - quilômetro (km)"
));

switch (option) {
    case 1:
        result = meters * 1000;
        break;
    case 2:
        result = meters * 100;
        break;
    case 3:
        result = meters * 10;
        break;
    case 4:
        result = meters / 10;
        break;
    case 5:
        result = meters / 100;
        break;
    case 6:
        result = meters / 1000;
        break;
    default:
        break;
}

alert("O resultado da conversão é: " + result);