/*Visitando Novas Cidades

Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade.
Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se 
o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, 
quantas e quais cidades ele visitou.
*/


const turist = prompt("E aí, turista! Qual é o seu nome?");
let cities = "";
let count = 0;

let proceed = prompt("Você visitou alguma cidade? (Sim/Não)");


while (proceed === "Sim") {
  let cidade = prompt("Qual é o nome da cidade visitada?");
  cities += " - " + cidade + "\n";
  count++;
  proceed = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}

alert(
  "Turista: " + turist +
  "\nQuantidade de cidades visitadas: " + count +
  "\nCidades visitadas:\n" + cities
)