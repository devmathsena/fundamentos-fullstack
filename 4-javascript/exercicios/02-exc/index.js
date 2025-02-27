/*Calculadora de 4 Operações

Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado 
das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela.
*/

let numberOne = parseFloat(prompt("Digite o primeiro número:"));
let numberTwo = parseFloat(prompt("Digite o segundo número:"));

let sum = numberOne + numberTwo;
let subtraction = numberOne - numberTwo;
let multiplication = numberOne * numberTwo;
let division = numberOne / numberTwo;

alert(
    "A soma dos dois números é: " + sum
    + "\n A subtração dos dois números é: " + subtraction
    + "\n A multiplicação dos dois números é: " + multiplication
    + "\n A divisão dos dois números é: " + division
);