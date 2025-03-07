# 🚀 High Order Functions no JavaScript

## 🎯 O que são High Order Functions?

High Order Functions (Funções de Alta Ordem) são funções que:
- Recebem outras funções como parâmetros;
- Retornam uma função.

Isso é possível porque, no JavaScript, funções são tratadas como valores e podem ser passadas como argumentos ou armazenadas em variáveis.

## 🛠️ Implementação Prática

Vamos criar uma função `calcular` que recebe dois números e uma operação (que será uma função).

```js
function calcular(a, b, operacao) {
    console.log("Realizando uma operação...");
    const resultado = operacao(a, b);
    return resultado;
}
```

Agora, criamos uma função `somar` e passamos ela como argumento:

```js
function somar(x, y) {
    console.log("Realizando uma soma...");
    return x + y;
}

console.log(calcular(3, 5, somar)); // Resultado: 8
```

## ⚡ Utilizando Funções Anônimas

Podemos definir a função diretamente no argumento, sem precisar nomeá-la:

```js
console.log(calcular(8, 4, function(x, y) {
    console.log("Realizando uma subtração...");
    return x - y;
}));
```

Isso permite criar funções dinâmicas sem precisar armazená-las separadamente.

## 📌 Aplicação Prática com Arrays

Um uso comum de High Order Functions é nos métodos de arrays, como `forEach`, `map`, `filter` e `reduce`. Vamos ver um exemplo com `forEach`:

```js
const lista = ["Maçã", "Banana", "Laranja", "Limão"];

lista.forEach(function(elemento, indice, array) {
    console.log(`Elemento: ${elemento}, Índice: ${indice}, Array: ${array}`);
});
```

Aqui, `forEach` recebe uma função como argumento e executa essa função para cada item do array.

## 🎯 Conclusão

- **High Order Functions** permitem passar funções como parâmetros e manipulá-las de forma flexível.
- **Facilitam a reutilização de código** e tornam o JavaScript mais dinâmico.
- **São amplamente usadas em arrays e manipulação de dados.**

🔥 Agora que você entendeu o conceito, experimente criar suas próprias High Order Functions! 😉

