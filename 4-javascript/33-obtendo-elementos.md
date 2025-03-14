# 📌 Selecionando Elementos do DOM com JavaScript  

Nesta etapa, você vai aprender a obter elementos HTML do DOM usando **JavaScript**! 🎯  

O **DOM (Document Object Model)** permite que interajamos com elementos específicos de uma página, como **botões, títulos e imagens**, através do JavaScript.  

## 🎯 Métodos para Selecionar Elementos  

O JavaScript oferece **diferentes métodos** para selecionar elementos do HTML, dependendo da sua necessidade. Vamos conhecer cada um deles!  

### 🔹 Selecionando **Vários** Elementos  
Alguns métodos retornam uma **coleção de elementos**, que pode ser um **HTMLCollection** (parecido com um objeto) ou uma **NodeList** (parecida com um array).  

🔹 **HTMLCollection** (objeto com elementos)  
- `document.getElementsByTagName('tag')` → Busca pelo nome da tag. **(Retorna um HTMLCollection)**  
- `document.getElementsByClassName('classe')` → Busca pela classe. **(Retorna um HTMLCollection)**  

🔹 **NodeList** (lista que lembra um array)  
- `document.getElementsByName('name')` → Busca pelo atributo `name`. **(Retorna uma NodeList)**  
- `document.querySelectorAll('seletor')` → Usa **seletores CSS** para encontrar vários elementos. **(Retorna uma NodeList)**  

### 🔸 Selecionando um **Único** Elemento  
Se você precisa de **apenas um** elemento, utilize:  
- `document.getElementById('id')` → Seleciona um elemento pelo seu **ID**. **(Retorna um único elemento)**  
- `document.querySelector('seletor')` → Seleciona o **primeiro** elemento que corresponder ao seletor CSS. **(Retorna um único elemento)**  

## 🎬 Exemplos Práticos  

### 📌 Selecionando um Elemento pelo ID  
```js
const contactList = document.getElementById("contact-list");
console.log(contactList); // Exibe o elemento no console
```
✅ Esse método retorna **apenas um** elemento, já que IDs são únicos no HTML.  

### 📌 Selecionando Todos os `<li>` da Lista  
```js
const listElements = document.getElementsByTagName("li");
console.log(listElements); // Retorna um HTMLCollection
```
✅ Retorna **todos os elementos `<li>`** da página.  

### 📌 Selecionando Elementos por Classe  
```js
const contactInputs = document.getElementsByClassName("contact-input");
console.log(contactInputs); // Retorna um HTMLCollection
```
✅ Seleciona **todos os elementos** que possuem a classe `"contact-input"`.  

### 📌 Selecionando Elementos com QuerySelectorAll  
```js
const labelsInsideList = document.querySelectorAll("#contact-list li label");
console.log(labelsInsideList); // Retorna uma NodeList
```
✅ **Mais flexível!** Usa **seletores CSS** para selecionar apenas os elementos desejados.  

## 🚀 Dica Extra: Diferença entre **HTMLCollection** e **NodeList**  

| Característica         | HTMLCollection       | NodeList |
|----------------------|--------------------|----------|
| Atualiza automaticamente? | ✅ Sim | ❌ Não |
| Possui `forEach()`? | ❌ Não | ✅ Sim |
| Usa índices numéricos? | ✅ Sim | ✅ Sim |

🔹 Se precisar de métodos de array, como **`forEach()`**, prefira **NodeList**. 😉  

---

✨ Agora que você conhece os métodos, experimente aplicá-los no seu código! Qual deles você achou mais útil? 🚀  
