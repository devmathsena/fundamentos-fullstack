# 🚀 Arrow Functions no JavaScript

## 🧐 O que são Arrow Functions?

As **Arrow Functions** são uma forma mais **moderna** e **concisa** de escrever **funções anônimas** no JavaScript.

📌 Em vez de usar `function`, usamos o símbolo `=>`, que lembra uma seta (arrow em inglês).

```js
const soma = (a, b) => {
  return a + b;
};
```

## ✅ Vantagens

- ✨ **Sintaxe mais curta** e **limpa**
- 💡 Ótima para **funções de uma linha**
- 📖 Facilita a **leitura do código**
- 🚀 Muito usada em métodos de array como `.map()`, `.filter()` e `.reduce()`

## ⚠️ Diferenças Importantes

Arrow functions **não têm**:
- `this`
- `arguments`
- `super`
- `new.target`

🔍 Isso significa que o `this` dentro de uma arrow function **não aponta para o objeto onde ela está**, mas sim **herda o `this` do escopo onde foi definida**.

---

## ✍️ Exemplos de Sintaxe

### 🧪 Função tradicional

```js
function soma(a, b) {
  return a + b;
}
```

### 🔁 Função anônima

```js
const soma = function(a, b) {
  return a + b;
};
```

### ⚡ Arrow Function

```js
const soma = (a, b) => {
  return a + b;
};
```

### ⚡ Arrow Function de uma linha

```js
const soma = (a, b) => a + b;
```

### ⚡ Apenas 1 parâmetro? Sem parênteses!

```js
const dobro = n => `O dobro de ${n} é ${n * 2}`;
```

---

## 🔧 Usando Arrow Functions com Arrays

Muito comum em métodos como `filter`, `map`, `reduce`.

```js
const towns = ["Porto", "Paris", "Lisboa", "Madrid", "Praga"];

const startingWithP = towns.filter(town => town[0] === "P");

console.log(startingWithP); // ["Porto", "Paris", "Praga"]
```

✅ Veja como o código fica mais **enxuto** e **fácil de entender**.

---

## 🧠 Dica final

➡️ No início pode parecer estranho, mas ao se **acostumar com arrow functions**, seu código ficará **mais limpo, moderno e produtivo**.
