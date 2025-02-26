/*Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de 
pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano 
causado baseado nas seguintes regras:

Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença 
entre o ataque e a defesa.

Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade 
da diferença entre o ataque e a defesa.

Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e 
exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.
*/ 

let damage = 0;
let playerOneName = prompt("Digite o nome do primeiro personagem:");
let attackPower = parseInt(prompt("Digite o poder de ataque do primeiro personagem:"));

let playerTwoName = prompt("Digite o nome do segundo personagem:");
let lifePoints = parseInt(prompt("Digite a quantidade de pontos de vida do segundo personagem:"));
let defensePower = parseInt(prompt("Digite o poder de defesa do segundo personagem:"));
let shield = confirm("O segundo personagem, possui escudo?");

if (attackPower > defensePower && shield === false) {
    damage = attackPower - defensePower;
}

if (attackPower > defensePower && shield === true) {
    damage = (attackPower - defensePower) / 2;
}

if (attackPower <= defensePower) {
    damage = 0;
}

lifePoints -= damage;

alert(
    "Quantidade de dano causado: " + damage +
    "\nNome do primeiro personagem: " + playerOneName +
    "\nPoder de ataque do primeiro personagem: " + attackPower +
    "\n\nNome do segundo personagem: " + playerTwoName +
    "\nPontos de vida do segundo personagem: " + lifePoints +
    "\nPoder de defesa do segundo personagem: " + defensePower +
    "\nO segundo personagem possui escudo? " + shield
);