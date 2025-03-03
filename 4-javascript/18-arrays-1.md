# 🚀 Trabalhando com Arrays no JavaScript

## 📝 Introdução
Nesta etapa, vamos aprender diferentes formas de trabalhar com **Arrays** no JavaScript! Vamos ver como adicionar, remover e manipular elementos de forma dinâmica.

---

## 📌 Criando o Arquivo
1. Criamos um arquivo `array.html` e `array.js`.
2. Adicionamos um array com alguns elementos para praticar as operações.

---

## ✨ Adicionando Elementos
### 🔹 `push()` – Adiciona no Final
```javascript
let arr = ["a", "b", "c"];
arr.push("d");
console.log(arr); // ["a", "b", "c", "d"]
```
✅ **Adiciona um elemento ao final do array.**

### 🔹 `unshift()` – Adiciona no Início
```javascript
arr.unshift("x");
console.log(arr); // ["x", "a", "b", "c", "d"]
```
✅ **Adiciona um elemento no início do array, empurrando os outros elementos para frente.**

---

## 🗑️ Removendo Elementos
### 🔸 `pop()` – Remove do Final
```javascript
let ultimo = arr.pop();
console.log(arr); // ["x", "a", "b", "c"]
console.log(ultimo); // "d"
```
✅ **Remove o último elemento e o retorna.**

### 🔸 `shift()` – Remove do Início
```javascript
let primeiro = arr.shift();
console.log(arr); // ["a", "b", "c"]
console.log(primeiro); // "x"
```
✅ **Remove o primeiro elemento e o retorna.**

---

## 🔄 Obtendo o Tamanho do Array
Tanto `push()` quanto `unshift()` retornam o novo tamanho do array:
```javascript
let tamanho = arr.push("e");
console.log(tamanho); // 4
```
✅ **Útil para monitoramento dinâmico do array.**

---

## 🎯 Conclusão
Os métodos `push()`, `unshift()`, `pop()` e `shift()` facilitam a manipulação dinâmica dos arrays, tornando o JavaScript mais flexível e eficiente! 🚀

