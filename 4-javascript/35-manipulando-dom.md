# 🖥️ Manipulando o DOM: Criando e Removendo Elementos

## 🌟 O que vamos aprender?
Nesta etapa, praticamos a manipulação de elementos no **DOM**, aprendendo a:
- Criar elementos dinamicamente.
- Inserir e remover elementos na página.
- Utilizar eventos de clique para interação.

---

## 🏗️ Estruturando o Projeto
### 1️⃣ Criando o HTML
O primeiro passo foi criar o arquivo **index.html** e estruturar a base da página com:
- **Títulos** (`<h1>`, `<h3>`, etc.).
- **Botões** para adicionar e remover contatos.
- **Uma seção (`<section>`) vazia** para inserir os contatos dinamicamente.

```html
<h1>Minha Agenda</h1>
<button onclick="addContact()">Novo Contato</button>
<button onclick="removeContact()">Remover Contato</button>
<section id="contact-list"></section>
```

---

## 🛠️ Criando o JavaScript
### 2️⃣ Iniciando o script
Criamos um arquivo **index.js** e vinculamos ao HTML.

```html
<script src="index.js"></script>
```

No **index.js**, começamos com a função `addContact()`, que cria dinamicamente elementos para armazenar um novo contato.

---

## 📌 Criando um Contato
### 3️⃣ Criando os Elementos
Dentro da função `addContact()`, criamos:
- Um **título (`<h3>`)** para o contato.
- Uma **lista (`<ul>`)** com três itens (`<li>`):
  - Nome (`<input type="text">`)
  - Telefone (`<input type="text">`)
  - Endereço (`<input type="text">`)

```javascript
function addContact() {
    let contactSection = document.getElementById("contact-list");
    
    let h3 = document.createElement("h3");
    h3.innerText = "Contato";
    
    let ul = document.createElement("ul");
    
    let nameLi = document.createElement("li");
    nameLi.innerHTML = "<label for='name'>Nome:</label> <input type='text' id='name'>";
    
    let phoneLi = document.createElement("li");
    phoneLi.innerHTML = "<label for='phone'>Telefone:</label> <input type='text' id='phone'>";
    
    let addressLi = document.createElement("li");
    addressLi.innerHTML = "<label for='address'>Endereço:</label> <input type='text' id='address'>";
    
    ul.append(nameLi, phoneLi, addressLi);
    contactSection.append(h3, ul);
}
```

Ao clicar no botão **Novo Contato**, a função é chamada, e um novo bloco de contato é adicionado à página.

---

## 🗑️ Removendo um Contato
### 4️⃣ Criando a Função de Remoção
Criamos a função `removeContact()`, que **remove o último contato** adicionado à página.

```javascript
function removeContact() {
    let contactSection = document.getElementById("contact-list");
    let lastContact = contactSection.lastChild;
    if (lastContact) {
        contactSection.removeChild(lastContact);
    }
}
```

Agora, ao clicar em **Remover Contato**, o último contato adicionado é removido.

---

## 🚀 Testando no Navegador
- Usamos o **Live Server** para rodar o projeto.
- Inspecionamos os elementos no **DevTools** para verificar a criação dinâmica dos contatos.

✅ **Pronto! Agora dominamos a manipulação do DOM para criar e remover elementos dinamicamente!** 🎉

