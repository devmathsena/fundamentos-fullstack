# 🎨 Seletores Básicos do CSS

## 📝 Introdução
Os seletores do CSS são usados para aplicar estilos a elementos HTML. Aqui estão os principais tipos de seletores básicos!

---

## 🌍 Seletor Universal (`*`)
```css
* {
    margin: 0;
    padding: 0;
}
```
🔹 Aplica estilos a **todos os elementos** da página.

---

## 🔖 Seletor de Tag
```css
header, footer {
    background-color: #333;
    color: #fff;
    padding: 10px;
}
```
🔹 Estiliza **todas** as tags `<header>` e `<footer>`.

---

## 📌 Seletor de Elementos Aninhados
```css
nav a {
    color: #27ae60;
}
```
🔹 Aplica estilos a **todos os links** `<a>` dentro de `<nav>`.

---

## 🎯 Seletor de Filhos Diretos (`>`)
```css
nav > a {
    display: block;
    color: #f5a623;
    padding: 10px;
}
```
🔹 Afeta **somente** `<a>` que sejam **filhos diretos** de `<nav>`.

---

## 🎨 Seletor de Classe (`.`)
```css
.laranja {
    color: #f5a623;
}
.verde {
    color: #27ae60;
}
```
🔹 Aplica estilos aos elementos que possuem essas classes.

---

## 🆔 Seletor de ID (`#`)
```css
#secao-principal {
    padding: 20px;
    text-align: center;
}
```
🔹 Estiliza **somente** o elemento com `id="secao-principal"`.

---

## 🏗️ Combinação de Seletores
```css
#secao-principal > * {
    margin-top: 10px;
}
```
🔹 Aplica estilos a **todos os filhos diretos** de `#secao-principal`.

---

## 🔄 Seletor de Sequência (`+`)
```css
input + input {
    margin-top: 30px;
    margin-bottom: 30px;
}
h2 + p {
    padding: 30px;
}
```
🔹 Aplica estilos ao **próximo irmão imediato** de `input` e `h2`.

---

## 🔍 Seletor de Atributo (`[atributo]`)
```css
input[name="email"] {
    background-color: #f5a623;
}
input[type="password"] {
    background-color: #27ae60;
}
```
🔹 Aplica estilos aos elementos que possuem atributos específicos.

---

## 🚀 Conclusão
Os seletores CSS são essenciais para definir estilos de forma precisa e eficiente! 🎯

Combinando diferentes seletores, podemos criar estilos personalizados para qualquer página web. 🌐💡

🔗 *Dica:* Use ferramentas como o **Color Picker** para escolher cores personalizadas. 🎨
