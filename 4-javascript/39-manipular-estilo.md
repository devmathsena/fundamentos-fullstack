# 🎨 Manipulando Estilos com JavaScript

Nesta etapa, você vai aprender como alterar os estilos de uma página usando JavaScript! Até agora, exploramos eventos e formulários, mas também podemos manipular o CSS diretamente pelo JS.

Vamos criar um modo claro e escuro para a página! 🌞🌙

## ✨ Duas formas de alterar estilos

### 1️⃣ Alterando diretamente os estilos no JS

Podemos acessar os elementos e modificar seus estilos através da propriedade `.style`. Veja um exemplo:

```javascript
function useLightTheme() {
  document.body.style.color = "#000"; // Texto escuro
  document.body.style.backgroundColor = "#fff"; // Fundo claro
}

document.getElementById("lightbtn").addEventListener("click", useLightTheme);
```

Da mesma forma, criamos uma função para o tema escuro:

```javascript
function useDarkTheme() {
  document.body.style.color = "#fff";
  document.body.style.backgroundColor = "#000";
}

document.getElementById("darkbtn").addEventListener("click", useDarkTheme);
```

Agora, ao clicar nos botões, os estilos são alterados dinamicamente! 🚀

---

### 2️⃣ Alterando classes dinamicamente

Outra abordagem é manipular classes CSS, o que é mais organizado e eficiente. No HTML, já temos classes `is-light` e `is-dark`. Podemos alterná-las usando `classList.toggle`:

```javascript
function switchTheme() {
  document.body.classList.toggle("is-light");
  document.body.classList.toggle("is-dark");
}

document.getElementById("switchbtn").addEventListener("click", switchTheme);
```

Isso permite alternar entre os temas sem precisar modificar estilos individualmente! 🎭

---

## 🛠️ Testando e Inspecionando

- Clique nos botões para ver a mudança de tema.
- Abra o **DevTools (F12)** e inspecione as classes no elemento `<body>`.
- Veja como o JavaScript altera os estilos dinamicamente!

Essa técnica é amplamente usada em sites modernos e frameworks CSS como Bootstrap.

Agora, você já sabe como criar um **modo escuro** no seu projeto! 🔥

