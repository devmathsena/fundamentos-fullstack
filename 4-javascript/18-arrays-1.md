# 🚀 Trabalhando com Arrays no JavaScript

## 📝 Introdução
Nesta etapa, vamos aprender diferentes formas de trabalhar com **Arrays** no JavaScript! Vamos ver como adicionar, remover, pesquisar e manipular elementos de forma dinâmica.

---

## 📌 Criando o Arquivo
1. Criamos um arquivo `array.html` e `array.js`.
2. Adicionamos um array com alguns elementos para praticar as operações.

---

## ✨ Adicionando Elementos

### 🔹 push() – Adiciona no Final
```javascript
let arr = ["a", "b", "c"];
arr.push("d");
console.log(arr); // ["a", "b", "c", "d"]
```
✅ **Adiciona um elemento ao final do array.**

### 🔹 unshift() – Adiciona no Início
```javascript
arr.unshift("x");
console.log(arr); // ["x", "a", "b", "c", "d"]
```
✅ **Adiciona um elemento no início do array, empurrando os outros elementos para frente.**

---

## 🗑️ Removendo Elementos

### 🔸 pop() – Remove do Final
```javascript
let ultimo = arr.pop();
console.log(arr); // ["x", "a", "b", "c"]
console.log(ultimo); // "d"
```
✅ **Remove o último elemento e o retorna.**

### 🔸 shift() – Remove do Início
```javascript
let primeiro = arr.shift();
console.log(arr); // ["a", "b", "c"]
console.log(primeiro); // "x"
```
✅ **Remove o primeiro elemento e o retorna.**

---

## 🔍 Pesquisando por um Elemento

### 🔹 includes() – Verifica se um elemento está presente
```javascript
const inclui = arr.includes("Gandalf");
console.log(inclui);
```
✅ **Retorna `true` se o elemento estiver presente, senão `false`.**

### 🔹 indexOf() – Encontra o índice do elemento
```javascript
const indice = arr.indexOf("Gandalf");
console.log(indice);
```
✅ **Retorna o índice do elemento ou `-1` se ele não existir.**

---

## ✂️ Cortando e Concatenando

### 🔹 slice() – Copia parte do array (sem alterar o original)
```javascript
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);
```
✅ **Permite copiar partes do array sem modificá-lo.**

### 🔹 concat() – Junta arrays e/ou elementos
```javascript
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);
console.log(hobbits);
console.log(outros);
```
✅ **Cria um novo array combinando os elementos passados.**

---

## 🔄 Substituindo Elementos

### 🔹 splice() – Remove e adiciona elementos
```javascript
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(elementosRemovidos);
console.log(sociedade);
```
✅ **Remove elementos de qualquer posição e pode adicionar novos no lugar.**

---

## 🔁 Iterando sobre os Elementos

### 🔹 Percorrendo o array com `for`
```javascript
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice];
  console.log(elemento + " se encontra na posição " + indice);
}
```
✅ **Permite acessar cada elemento e sua posição no array.**

---

## 🎯 Conclusão
Os métodos `push()`, `unshift()`, `pop()`, `shift()`, `includes()`, `indexOf()`, `slice()`, `concat()`, `splice()` e a iteração com `for` tornam a manipulação de arrays muito mais poderosa e eficiente! 🚀
