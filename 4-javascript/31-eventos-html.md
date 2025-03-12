# 🎯 Introdução aos Eventos no HTML

Nesta etapa, vamos aprender sobre **eventos no HTML** e como usá-los para executar **JavaScript de forma dinâmica**, sem travar o carregamento da página.

---

## 🚀 O que são eventos?

Eventos são **ações específicas** que ocorrem na página, como:
- 🖱️ **Clique** em um botão
- 🏃 **Movimento** do mouse sobre um elemento
- ⌨️ **Entrada** de texto em um campo
- 🔄 **Mudança** de valor em um input

Eles permitem que **JavaScript** seja executado **somente quando necessário**, evitando que o código trave a página ao carregar.

---

## 🎯 Exemplos de Eventos no HTML

### 🖱️ Evento `onmouseenter`
Disparado quando o mouse **entra** em um elemento.

```html
<input type="text" id="onmouseEnter" onmouseenter="console.log('Entrada do mouse')">
```

### ⌨️ Evento `onchange`
Executado **após** o usuário alterar o valor de um campo e sair dele.

```html
<input type="text" id="onchange" onchange="console.log('Mudança no valor')">
```

### 🎯 Evento `onfocus`
Ocorre quando um **campo recebe o foco**, seja por clique ou tecla `Tab`.

```html
<input type="text" id="onfocus" onfocus="console.log('Foco no elemento')">
```

### ❌ Evento `onblur`
Ativado **quando um campo perde o foco**.

```html
<input type="text" id="onblur" onblur="console.log('Foco perdido')">
```

### 🖱️ Evento `onclick`
Acionado quando um botão é **clicado**.

```html
<button onclick="console.log('Clicou no botão')">Clique Aqui</button>
```

---

## 📌 Boas Práticas: Separando JavaScript do HTML

Para manter o código **organizado**, devemos evitar escrever JavaScript diretamente no HTML. O ideal é utilizar um **arquivo externo**.

### 1️⃣ Criar um arquivo `index.js`
```javascript
function onMouseEnter() {
    console.log("Mouse entrou no elemento");
}

function onClick() {
    console.log("Clicou no botão");
}
```

### 2️⃣ Referenciar o script no HTML
```html
<script src="index.js"></script>
```
Agora, basta associar os eventos aos elementos diretamente no **JavaScript**!

---

## 🔥 Conclusão

Eventos permitem adicionar **interatividade** ao HTML sem afetar o carregamento da página. Além disso, utilizar um arquivo externo para os scripts mantém o código **limpo e organizado**.

🚀 Agora é sua vez! Experimente e implemente eventos no seu código! 🎯

