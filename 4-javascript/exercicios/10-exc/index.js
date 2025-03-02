/*Procurando Palíndromos

Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo.

Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. 
O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela 
palavra é ou não um palíndromo.

Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.
*/


let word = prompt("Digite a palavra a ser verificada:");
let palindrome;

for(let index=0; index < word.length; index++) {
  let oppositeIndex = word.length - 1 - index;

  if(word[index] !== word[oppositeIndex]){
    palindrome = false;
  } else {
    palindrome = true;
  }
}

if(palindrome === true) {
  alert("É um palíndromo!");
}else {
  alert("Não é um palíndromo!");
}