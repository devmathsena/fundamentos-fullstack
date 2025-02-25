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