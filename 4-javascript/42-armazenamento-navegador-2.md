
# 🧠 Guia Prático: sessionStorage, localStorage e Cookies com JavaScript

Aprenda de forma simples, prática e direta como utilizar o **armazenamento do navegador** com JavaScript! Vamos explorar as diferenças, como usar e boas práticas de:

- `sessionStorage`
- `localStorage`
- `document.cookie`

---

## 🧳 O que são?

| Tipo            | Persiste após fechar o navegador? | Escopo                    | Capacidade aproximada |
|------------------|-----------------------------------|----------------------------|------------------------|
| `sessionStorage` | ❌ Não                             | Aba/janela atual           | ~5MB                   |
| `localStorage`   | ✅ Sim                             | Por origem (domínio + porta) | ~5MB                   |
| `cookie`         | ✅ Sim (até expirar)               | Por origem, enviado ao servidor | ~4KB por cookie       |

---

## 📦 sessionStorage

Armazena dados **enquanto a aba está aberta**.

### 🔧 Como usar:

```js
// Salvar
sessionStorage.setItem("usuario", "João");

// Ler
let nome = sessionStorage.getItem("usuario"); // "João"

// Remover um item
sessionStorage.removeItem("usuario");

// Limpar tudo
sessionStorage.clear();
```

📌 **Dica:** Cada aba tem seu próprio `sessionStorage`. Abrir o site em outra aba cria um armazenamento separado.

---

## 🗃️ localStorage

Armazena dados **mesmo após fechar o navegador** (persistente).

### 🔧 Como usar:

```js
// Salvar
localStorage.setItem("tema", "escuro");

// Ler
let tema = localStorage.getItem("tema"); // "escuro"

// Remover um item
localStorage.removeItem("tema");

// Limpar tudo
localStorage.clear();
```

📌 Ideal para armazenar configurações do usuário, temas, dados simples offline.

---

## 🍪 Cookies

Armazenamento de pequenos dados que podem ser enviados ao servidor com cada requisição.

### 🔧 Como criar um cookie:

```js
document.cookie = "usuario=João; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
```

### 🔍 Como ler:

```js
console.log(document.cookie); 
// "usuario=João; outroCookie=valor"
```

### ❌ Como remover:

```js
document.cookie = "usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

📌 Cookies são menos usados diretamente em JS moderno, mas ainda importantes para autenticação e rastreamento.

---

## 🆚 Comparação Rápida

| Característica     | sessionStorage      | localStorage        | Cookies                |
|--------------------|---------------------|----------------------|------------------------|
| Duração            | Sessão da aba       | Permanente (manual) | Configurável (expira) |
| Tamanho máx.       | ~5MB                | ~5MB                 | ~4KB                   |
| Acessível via JS   | ✅                   | ✅                   | ✅                     |
| Enviado ao servidor| ❌                   | ❌                   | ✅                     |

---

## ✅ Boas práticas

- Prefira `localStorage` para dados persistentes que não precisam ser enviados ao servidor.
- Use `sessionStorage` para dados temporários e por aba.
- Use `cookies` apenas quando for necessário trafegar dados com o servidor.
- Nunca armazene **informações sensíveis** (como senhas ou tokens de acesso) em nenhum desses métodos sem criptografia adequada.

---

## 🧪 Exemplos práticos

### 🎨 Lembrar tema escolhido:

```js
// Salvar ao mudar tema
localStorage.setItem("tema", "claro");

// Ao carregar página
document.body.className = localStorage.getItem("tema");
```

### 💬 Mensagem de boas-vindas com sessionStorage:

```js
if (!sessionStorage.getItem("visitou")) {
  alert("Bem-vindo pela primeira vez nesta aba!");
  sessionStorage.setItem("visitou", "sim");
}
```

### 🍪 Cookie para lembrar idioma:

```js
document.cookie = "idioma=pt-BR; path=/; max-age=31536000"; // 1 ano

// Depois: ler e aplicar idioma
```

---

## 🧠 Quer ir além?

- 🔐 Use bibliotecas como [js-cookie](https://github.com/js-cookie/js-cookie) para facilitar o uso de cookies.
- 📦 Para dados estruturados (ex: objetos), use `JSON.stringify()` ao salvar e `JSON.parse()` ao ler.

```js
// Salvar objeto
localStorage.setItem("usuario", JSON.stringify({ nome: "João", idade: 25 }));

// Recuperar
let user = JSON.parse(localStorage.getItem("usuario"));
```

---

💡 Agora é com você! Teste no navegador, experimente e veja qual se adapta melhor ao seu projeto. 😉
