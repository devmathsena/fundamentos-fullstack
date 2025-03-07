# 🚀 Funções Anônimas no JavaScript

## 📌 O que são?
Funções anônimas são funções sem nome que podem ser atribuídas a variáveis. Isso permite que sejam tratadas como valores, facilitando sua manipulação no código.

## 💡 Conceito-chave
No JavaScript (e em outras linguagens com suporte a paradigma funcional), funções podem ser armazenadas em variáveis, passadas como argumentos e retornadas por outras funções.

## 🎯 Exemplo Básico
```js
const somar = function(a, b) {
    return a + b;
};
console.log(somar(4, 5)); // Saída: 9
```

Aqui, a função foi armazenada dentro da variável `somar`, sem precisar de um nome próprio.

## 🔄 Atribuindo Funções a Variáveis
Podemos armazenar funções dentro de variáveis e até sobrescrevê-las dinamicamente.

```js
let operacao = function(a, b) {
    return a + b;
};
console.log(operacao(4, 5)); // Saída: 9

operacao = function(a, b) {
    return a - b;
};
console.log(operacao(4, 5)); // Saída: -1
```

Aqui, a variável `operacao` inicialmente soma dois números, mas depois foi reatribuída para uma função que faz subtração.

## ⚠️ Cuidados ao Usar Funções Anônimas
Diferente das funções nomeadas, funções anônimas não são carregadas no topo do script (hoisting). Portanto, devem ser declaradas antes do uso.

### ❌ Erro comum:
```js
console.log(oiMundo()); // ❌ ReferenceError: Cannot access 'oiMundo' before initialization

const oiMundo = function() {
    return "Oi, mundo!";
};
```

### ✅ Correto:
```js
const oiMundo = function() {
    return "Oi, mundo!";
};

console.log(oiMundo()); // ✅ Saída: Oi, mundo!
```

## 🏆 Quando Usar Funções Anônimas?
- Quando queremos atribuir funções a variáveis.
- Para criar funções dinâmicas e flexíveis.
- Em callbacks e funções dentro de métodos como `map`, `filter` e `reduce`.

```js
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(function(num) {
    return num * 2;
});
console.log(dobrados); // Saída: [2, 4, 6, 8, 10]
```

---

🔎 **Nas próximas etapas veremos mais aplicações das funções anônimas. Fique ligado!** 😉

