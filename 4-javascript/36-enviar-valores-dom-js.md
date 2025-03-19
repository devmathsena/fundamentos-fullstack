# 📌 Passando Valores do DOM para o JavaScript

## ✨ O que você vai aprender?
Nesta etapa, você aprenderá a capturar valores do DOM e utilizá-los dentro do JavaScript, tornando suas funções mais dinâmicas e interativas!

---

## 🏗️ Estrutura HTML
O documento HTML possui três campos de entrada:
- Nome de usuário
- Senha
- Confirmação de senha
- Botão "Registrar"

Ao clicar no botão, a função `register` será acionada.

---

## 🚀 Criando a Função `register`
A função `register` é definida no JavaScript e recebe um parâmetro. Esse parâmetro pode ser o próprio elemento que acionou o evento! Como fazer isso?

```js
function register(element) {
    console.log(element); // Exibe o próprio botão no console
}
```

Ao passar `this` como argumento no HTML:
```html
<button onclick="register(this)">Registrar</button>
```
O `this` faz referência ao próprio botão.

---

## 📌 Acessando Elementos Pais
Podemos acessar o elemento pai do botão para manipular outros inputs dentro do mesmo contexto.

```js
function register(element) {
    let parent = element.parentNode; // Obtém a section
    console.log(parent);
}
```
Agora, o console exibirá a `section` que contém o botão.

---

## 🏷️ Capturando os Valores dos Inputs
Podemos acessar os inputs filhos da `section`:

```js
function register(element) {
    let parent = element.parentNode;
    let username = parent.children[0].value;
    let password = parent.children[1].value;
    let passwordConfirmation = parent.children[2].value;

    console.log(username, password, passwordConfirmation);
}
```
Agora, ao preencher os campos e clicar no botão, os valores inseridos serão exibidos no console.

---

## 🔄 Validando Senhas
Podemos adicionar uma verificação para confirmar se as senhas coincidem antes de registrar o usuário:

```js
function register(element) {
    let parent = element.parentNode;
    let username = parent.children[0].value;
    let password = parent.children[1].value;
    let passwordConfirmation = parent.children[2].value;
    
    if (password === passwordConfirmation) {
        alert(`Usuário ${username} registrado!`);
    } else {
        alert("As senhas não conferem!");
    }
}
```

Se as senhas forem iguais, exibe "Usuário registrado!". Caso contrário, exibe "As senhas não conferem!".

---

## 🎯 Conclusão
Com essa abordagem, conseguimos:

✅ Capturar valores de inputs dentro do JavaScript

✅ Utilizar `this` para referenciar elementos

✅ Navegar na árvore do DOM com `parentNode` e `children`

✅ Criar validações básicas

Agora, você pode aprimorar essa lógica para outros formulários e interações no seu site! 🚀

