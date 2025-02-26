/**
 * Teste de Velocidade
 * Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos
 * e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)
 */

let carName1 = prompt("Digite o nome do primeiro carro:")
let carName2 = prompt("Digite o nome do segundo carro:")
let carSpeed1 = parseInt(prompt("Digite a velocidade do primeiro carro:"));
let carSpeed2 = parseInt(prompt("Digite a velocidade do segundo carro:"));

if (carSpeed1 > carSpeed2) {
    alert("O carro mais rápido é: " + carName1)
} else if (carSpeed1 < carSpeed2) {
    alert("O carro mais rápido é: " + carName2)
} else {
    alert("Os carros tem velocidades iguais.")
}