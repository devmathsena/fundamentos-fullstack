# 🎯 Trabalhando com Eventos no JavaScript

## 🚀 Introdução
Nesta etapa, vamos aprender a adicionar eventos de forma dinâmica no JavaScript! Até agora, os eventos estavam sendo definidos diretamente no HTML, o que pode se tornar bagunçado à medida que o projeto cresce. Vamos ver como criar e remover eventos diretamente no JavaScript.

---

## 📌 Métodos Principais

- **addEventListener()** → Adiciona um evento a um elemento.
- **removeEventListener()** → Remove um evento previamente adicionado a um elemento.

## 📌 Selecionando Elementos e Adicionando Eventos
### 🔹 Selecionando o Botão
Para manipular um elemento, primeiro precisamos selecioná-lo no DOM:
```js
const botao = document.getElementById("meuBotao");
```
### 🔹 Adicionando um Evento
Usamos `addEventListener` para vincular eventos ao elemento:
```js
function clicar() {
    alert("Botão clicado!");
}

botao.addEventListener("click", clicar);
```
Isso adiciona um ouvinte de eventos que dispara uma ação quando o botão é clicado.

---

## 🎯 Como Funciona o `addEventListener`?
A função `addEventListener` recebe dois parâmetros:
1. O tipo de evento (ex: `click`, `mouseover`, `keydown`).
2. A função que será executada quando o evento acontecer.

Exemplo de eventos disponíveis:
```js
botao.addEventListener("mouseenter", () => console.log("Mouse entrou no botão!"));
```

---

## 🔍 Passando uma Função Nomeada
Podemos criar uma função separada para o evento:
```js
function registrar() {
    console.log("Evento disparado!");
}

botao.addEventListener("click", registrar);
```
Isso mantém o código mais organizado e facilita a reutilização.

---

## ❌ Removendo um Evento
Para remover um evento, a função precisa estar definida separadamente:

```js
botao.removeEventListener("click", clicar);
```

🔹 **Importante**: O `removeEventListener()` só funciona se a função for referenciada diretamente, e não como uma função anônima. Além disso, os parâmetros da função devem ser os mesmos usados no `addEventListener()`, caso contrário, a remoção não ocorrerá corretamente.

---

## 🔄 Usando o Objeto `event`
O evento disparado pode ser acessado pelo parâmetro `event`:
```js
botao.addEventListener("click", (event) => {
    console.log("Elemento alvo:", event.target);
});
```
Isso é útil para identificar o elemento que acionou o evento.

---

## 🔄 Delegação de Eventos
Caso precise gerenciar eventos dinamicamente, a **delegação de eventos** pode ser uma alternativa. Me avise se quiser mais detalhes sobre isso! 😉

---

## 🚨 Evitando Erros ao Carregar Scripts
Se o script for carregado antes do HTML, os elementos podem ainda não existir. Para evitar isso:
- Adicione o atributo `defer` na tag `<script>`:
```html
<script src="script.js" defer></script>
```
- Ou coloque o script no final do `body`:
```html
<body>
    ...
    <script src="script.js"></script>
</body>
```

---

## ✅ Conclusão
Agora você sabe como adicionar e remover eventos dinamicamente no JavaScript, usando `addEventListener`, a remover com o `removeEventListener` e trabalhar com `event.target` e evitar erros ao carregar scripts. Bora praticar! 🚀
