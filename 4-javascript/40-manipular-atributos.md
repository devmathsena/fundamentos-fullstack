# 🎯 Manipulando Atributos com JavaScript

## 🚀 O que você vai aprender?
Nesta etapa, vamos explorar como manipular atributos em elementos HTML utilizando **JavaScript**. Para isso, utilizamos um **input** e alguns botões que modificam seus atributos.

## 🔹 Selecionando Elementos
Começamos selecionando o **input** usando `document.getElementById`:
```js
const input = document.getElementById("input");
```
Com isso, podemos acessar e modificar seus atributos dinamicamente.

## 🎭 Modificando o Value do Input
Criamos um botão para alterar o valor do **input**:
```js
document.getElementById("value").addEventListener("click", () => {
  input.value = input.value ? "" : "Olá Mundo";
});
```
- Se o campo estiver vazio, insere "Olá Mundo".
- Se já houver texto, limpa o campo.

## 🕵️‍♂️ Diferença entre `.value` e `getAttribute("value")`
- `input.value` → Obtém o **valor atual** do campo.
- `input.getAttribute("value")` → Obtém o **valor original** definido no HTML.

Exemplo de comparação:
```js
console.log(input.value); // Valor atual
console.log(input.getAttribute("value")); // Valor inicial definido no HTML
```

## 🔄 Mudando o Tipo do Input
Podemos alternar entre **text** e **radio** com `type`:
```js
document.getElementById("type").addEventListener("click", () => {
  input.type = input.type !== "radio" ? "radio" : "text";
});
```
- Se for **text**, muda para **radio**.
- Se for **radio**, volta para **text**.

## ✍️ Alterando o Placeholder
```js
document.getElementById("placeholder").addEventListener("click", () => {
  input.placeholder = "Digite algo";
});
```
O **placeholder** aparece quando o campo está vazio.

## 🚫 Habilitar/Desabilitar o Input
Para ativar/desativar o campo:
```js
document.getElementById("disabled").addEventListener("click", () => {
  input.disabled = !input.disabled;
});
```
Alternamos o estado do atributo `disabled`.

## 🔥 Conclusão
Manipular atributos com JavaScript permite criar interações dinâmicas e personalizadas nos elementos HTML. Experimente combinar essas técnicas para enriquecer seus projetos! 🎨✨
