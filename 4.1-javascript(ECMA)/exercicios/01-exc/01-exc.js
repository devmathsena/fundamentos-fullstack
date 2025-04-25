/*
Estatística na Programação

De acordo com os conhecimentos aprendidos nesse módulo sobre recursos do javascript moderno, 
crie quatro funções que aceitem qualquer quantidade de parâmetros e utilizando a sintaxe de *arrow functions* p
ara calcular as operações abaixo.

Essas funções devem mostrar o resultado de alguma forma em texto porém não é necessário implementar uma interface. 
Para testar a função você pode fazer chamadas manuais a ela no javascript ou utilizar o console do navegador 
(qualquer função incluída na página pode ser chamada diretamente no console).

**Operações:**

Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela 
quantidade de valores.

Média Aritmética Ponderada: Semelhante à média aritmética simples, porém é possível atribuir um peso a cada 
valor informado, fazendo com que ele tenha um valor proporcionalmente diferente dos outros. 
Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o total 
pela soma dos pesos.

Mediana: Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. 
Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números.

Moda: Pode ser calculada encontrando o valor que mais se repete em um dado conjunto.
*/

function simpleArithmeticAverage(...nums) {
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    const arithmeticAverage = sum / nums.length

    return arithmeticAverage
}

function weightedArithmeticAverage(...nums) {
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue.n * currentValue.p, 0)
    const weight = nums.reduce((accumulator, currentValue) => accumulator + currentValue.p, 0)
    const arithmeticAverage = sum / weight

    return arithmeticAverage
}

function medianNum(...nums) {
    nums.sort((a, b) => a - b);
    const isOdd = nums.length % 2 !== 0;

    const median = (nums, isOdd) => {
        const mid = Math.floor(nums.length / 2);
        if (isOdd) {
            return nums[mid];
        } else {
            return (nums[mid - 1] + nums[mid]) / 2;
        }
    };

    return median(nums, isOdd);
}

function mode(...nums) {
    const count = new Map()

    for(const item of nums) {
        count.set(item, (count.get(item) || 0) +1)
    }

    const sortedByValue = [...count.entries()].sort((a, b) => b[1] - a[1])

    const [[mode]] = sortedByValue

    return mode
}