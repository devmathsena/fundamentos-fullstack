# 📦 Entendendo os ESModules (Módulos Nativos) no JavaScript

## 🚀 O que são ESModules?

São uma forma nativa de **modularizar** seu código JavaScript, permitindo **separar funcionalidades** em arquivos diferentes para facilitar a organização e a manutenção do seu projeto.

---

## 🧪 Exemplo prático inicial

- Projeto com um **HTML** incluindo um **script JS**
- Dentro do JS, há **três funções simples**:
  - `label()` – cria um elemento `<label>`
  - `input()` – cria um elemento `<input>`
  - `br()` – cria uma quebra de linha `<br>`
- Todas as funções recebem atributos e retornam os elementos
- Exibição dos elementos no **console**

---

## 🔧 Modularizando o código

Para organizar melhor, as funções são movidas para um novo arquivo chamado `functions.js`, usando:

```js
// functions.js
export function label(attributes) {
  const element = document.createElement('label')
  Object.assign(element, attributes)
  return element
}

export function input(attributes) {
  const element = document.createElement('input')
  Object.assign(element, attributes)
  return element
}

export function br() {
  const element = document.createElement('br')
  return element
}
```

---

## 📥 Importando no arquivo principal

```js
// index.js
import { label, input, br } from './functions.js'

console.log(label({ for: 'fullname', textContent: 'Nome Completo' }))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...' }))
console.log(br())
```

---

## ⚙️ Estrutura HTML com ESModules

Aqui está como deve ser a estrutura HTML para suportar ESModules:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ESModules</title>
  <script src="index.js" type="module"></script>
</head>
<body>
  <h1>ESModules</h1>
</body>
</html>
```

> ✅ O segredo está no atributo `type="module"` dentro da tag `<script>`, que **habilita o uso de import/export no navegador**.

---

## 🧠 Recapitulando os passos:

1. Crie funções e use `export` no `functions.js`
2. Use `import` no `index.js` para puxar essas funções
3. Adicione `type="module"` na `<script>` do HTML
4. Use o caminho com a **extensão `.js`** corretamente

---

🎉 Com isso, você já consegue aplicar **ESModules no navegador** de forma organizada e moderna, criando projetos mais **escaláveis** e **manuteníveis**!
