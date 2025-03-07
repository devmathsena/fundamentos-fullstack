# 📌 Funções Recursivas  

## 🔄 O que é Recursão?  
Recursão é quando uma função chama a si mesma dentro de sua execução. Isso pode ser útil para resolver problemas complexos de forma mais simplificada e estruturada.  

**⚠️ Importante:**  
Para evitar que a função entre em um loop infinito, sempre devemos definir um **caso base**, que determina quando a recursão deve parar.  

## 🎯 Exemplo Prático: Fatorial  
O fatorial de um número (representado por `n!`) é o resultado da multiplicação desse número por todos os inteiros menores que ele até `1`.  

**Exemplo Matemático:**  
```
5! = 5 × 4 × 3 × 2 × 1 = 120
```
Uma propriedade interessante do fatorial é que:  
```
n! = n × (n-1)!
```
Ou seja, `5!` pode ser visto como `5 × 4!`, e assim por diante.  

## ✍️ Implementação em Código  
Aqui está uma função recursiva que calcula o fatorial de um número:  

```javascript
function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;  // Caso base
    }
    return n * fatorial(n - 1); // Chamada recursiva
}

console.log(fatorial(5)); // Saída: 120
```

## 🔍 Como funciona?  
1. Se `n` for `0` ou `1`, retornamos `1` (caso base).  
2. Caso contrário, multiplicamos `n` pelo fatorial de `n-1`.  
3. A função continua chamando a si mesma até atingir o caso base.  
4. As chamadas anteriores começam a ser resolvidas, retornando o valor final.  

## 📌 Recursão na Prática  
Funções recursivas são úteis para problemas como:  
✅ Fatorial  
✅ Fibonacci  
✅ Percorrer árvores e grafos  
✅ Algoritmos de busca e ordenação  

**💡 Dica:** A recursão pode simplificar problemas, mas também pode consumir muita memória se não for bem utilizada. Sempre garanta que há um **caso base** para evitar loops infinitos.  

🚀 Agora que você já conhece o conceito, pratique criando suas próprias funções recursivas!
