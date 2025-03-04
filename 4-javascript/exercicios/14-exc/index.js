/*Calculadora Geométrica

Escreva um programa em javascript para calcular a área de diferentes formas geométricas.

O programa deve iniciar com um menu contendo as diferentes opções de cálculos. As opções devem ser:

área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. 
O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.
*/


function triangleArea(base, height) {
  return (base * height) / 2;
}

function rectangleArea(base, height) {
  return base * height;
}

function squareArea(side) {
  return side ** 2;
}

function trapeziumArea(higherBase, lowerBase, height) {
  return ((higherBase + lowerBase) * height) / 2;
}

function circleArea(radius) {
  const pi = 3.14;
  return pi * (radius ** 2);
}

function alertResult(result) {
  alert(`O resultado é ${result}cm².`);
}

let option;

do {
  option = parseInt(prompt(
    `
      Escolha uma das opções abaixo:\n
      1 - Área do triângulo
      2 - Área do retângulo
      3 - Área do quadrado
      4 - Área do trapézio
      5 - Área do círculo
      6 - Sair
    `
  ));

  switch (option) {
    case 1:
      let base1 = parseFloat(prompt("Informe a base(cm):"));
      let height1 = parseFloat(prompt("Informe a altura(cm):"));
      const result1 = triangleArea(base1, height1);
      alertResult(result1);
      break;

    case 2:
      let base2 = parseFloat(prompt("Informe a base(cm):"));
      let height2 = parseFloat(prompt("Informe a altura(cm):"));
      const result2 = rectangleArea(base2, height2);
      alertResult(result2);
      break;

    case 3:
      let side = parseFloat(prompt("Digite o tamanho do lado(cm):"));
      const result3 = squareArea(side);
      alertResult(result3);
      break;

    case 4:
      let higherBase = parseFloat(prompt("Digite a base maior(cm):"));
      let lowerBase = parseFloat(prompt("Digite a base menor(cm):"));
      let height4 = parseFloat(prompt("Informe a altura(cm):"));
      const result4 = trapeziumArea(higherBase,lowerBase,height4);
      alertResult(result4);
      break;

    case 5:
      let radius = parseFloat(prompt("Digite o raio(cm):"))
      const result5 = circleArea(radius);
      alertResult(result5);
      break;

    case 6:
      option = 6;
      break;

    default:
      alert("Opção inválida!");
  }

} while (option !== 6)