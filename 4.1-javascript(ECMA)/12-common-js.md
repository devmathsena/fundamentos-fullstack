# 🧩 Módulos Common.js com Node.js

Nesta etapa, você aprendeu como **organizar seu código JavaScript em módulos** usando a abordagem do **Common.js**, que é padrão no **Node.js**.

---

## 🚀 O que é Node.js?

O **Node.js** é uma ferramenta que permite executar **código JavaScript fora do navegador**. Ele é usado para rodar servidores, scripts de automação e muito mais.

---

## 📦 O que são módulos?

Módulos são pedaços de código separados em arquivos diferentes, que podem ser **exportados e importados** conforme necessário. Isso ajuda a manter o código **organizado** e **reutilizável**.

---

## 🏗️ Exemplo inicial

```js
function render() {
  console.log("Renderizando interface da aplicação");
}

function store() {
  console.log("Salvando no banco de dados");
}

console.log("Aplicação iniciada");
render();
store();
console.log("Aplicação finalizada");
```

Executamos com o comando:

```bash
node index.js
```

---

## ✂️ Separando em módulos

Criamos dois arquivos novos:

- `render.js`
- `store.js`

Em cada um, colocamos a respectiva função e **exportamos** com:

```js
// render.js
function render() {
  console.log("Renderizando interface da aplicação");
}
module.exports = render;
```

```js
// store.js
function store() {
  console.log("Salvando no banco de dados");
}
module.exports = store;
```

---

## 🔗 Importando no `index.js`

No arquivo principal, usamos `require` para importar os módulos:

```js
const render = require('./render');
const store = require('./store');

console.log("Aplicação iniciada");
render();
store();
console.log("Aplicação finalizada");
```

---

## ❗ Atenção: Common.js é específico do Node.js

Os navegadores **não suportam Common.js por padrão**. Essa abordagem é usada principalmente no **ambiente Node**. Para projetos frontend, usaremos futuramente os **ESModules (ESM)** com `import`/`export`.

---

## ✅ Recapitulando

- 📤 Exportamos funções com `module.exports`
- 📥 Importamos com `require('./nome-do-arquivo')`
- 🚫 Não funciona nativamente no navegador
- 👨‍💻 Padrão usado no Node.js

---

> 💡 **Curiosidade**: apesar de estar sendo gradualmente substituído pelos ESModules, o Common.js ainda é amplamente usado em muitos projetos com Node.
