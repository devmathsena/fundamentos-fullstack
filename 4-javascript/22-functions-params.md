# ✨ Parâmetros de Funções em JavaScript ✨

## 👨‍💻 O que são parâmetros?
Parâmetros são **entradas** de uma função, permitindo que ela receba valores para processar. Pense neles como ingredientes de uma receita 🍲!

## 🛠️ Criando uma função com parâmetro
```js
function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2));
}

dobro(5); // Exibe: "O dobro de 5 é 10"
dobro(7); // Exibe: "O dobro de 7 é 14"
```
👉 O valor passado ao chamar a função substitui `x` dentro do código.

## 🚫 O que acontece sem passar um parâmetro?
Se chamarmos `dobro()` sem passar um valor, teremos um problema!
```js
dobro(); // Exibe: "O dobro de undefined é NaN"
```
* `undefined` significa que o parâmetro não foi definido.
* `NaN` (“Not a Number”) ocorre porque tentamos multiplicar `undefined` por `2`.

## 🌟 Definindo um valor padrão
Podemos evitar esse problema definindo um valor padrão:
```js
function dizerOla(nome = "Mundo") {
    alert("Olá, " + nome + "!");
}

dizerOla("Isaac"); // Exibe: "Olá, Isaac!"
dizerOla(); // Exibe: "Olá, Mundo!"
```
💡 Se não passarmos um nome, `Mundo` será usado por padrão!

## 🤖 Funções com vários parâmetros
Podemos ter quantos parâmetros quisermos!
```js
function soma(a, b) {
    alert("Resultado da soma: " + (a + b));
}

soma(7, 6); // Exibe: "Resultado da soma: 13"
```
👉 Basta separá-los por **vírgula**.

## 🔄 Ordem dos parâmetros
A ordem dos parâmetros importa! Veja um exemplo com um objeto:
```js
function criarUsuario(nome, email, senha, tipo = "comum") {
    return {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    };
}

let usuario = criarUsuario("Ana", "ana@email.com", "12345");
console.log(usuario);
// Saída: { nome: "Ana", email: "ana@email.com", senha: "12345", tipo: "comum" }
```
🚀 Se não passarmos o tipo, ele será **"comum"** por padrão!

---

Agora você domina os parâmetros em funções JavaScript! 🎉 Continue praticando para fortalecer seus conhecimentos. 🚀

