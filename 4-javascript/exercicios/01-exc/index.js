/*Cadastro de Recrutas

Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

o primeiro nome
o sobrenome
o campo de estudo
o ano de nascimento

Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade 
(apenas baseada no ano de nascimento).
 */

const data = new Date();
const ano = data.getFullYear();
let nome = prompt("Digite seu primeiro nome:");
let sobrenome = prompt("Digite seu sobrenome:");
let campoEstudo = prompt("Digite seu campo de estudo:");
let anoNascimento = prompt("Digite seu ano de nascimento:");
let idade = parseInt(ano) - parseInt(anoNascimento);

alert(
    "Nome: " + nome + "\n"
    + "Sobrenome: " + sobrenome + "\n"
    + "Campo de estudo: " + campoEstudo + "\n"
    + "Idade: " + idade
);