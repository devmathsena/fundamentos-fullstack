# 🧠 Armazenamento no Navegador: Session Storage, Local Storage e Cookies

Nessa etapa, aprendemos como **manter dados no navegador mesmo ao trocar de página** ou fechar o navegador. 

Isso é essencial para melhorar a experiência do usuário em aplicações web mais complexas. Vamos conhecer os principais recursos!

---

## 🚪 Por que armazenar dados no navegador?

Ao trocar de página, os dados manipulados com JavaScript normalmente se perdem. Para evitar isso, usamos recursos de armazenamento que **mantêm as informações acessíveis mesmo em diferentes páginas**.

---

## 💾 Session Storage

Armazena dados **durante a sessão do navegador** (enquanto a aba estiver aberta).

### ✅ Características:
- Fácil de usar.
- Guarda **pares chave-valor** em formato de texto.
- Perde os dados ao **fechar a aba**.
- Ideal para manter o estado temporário do usuário, como um login simples enquanto navega no site.

### 🛠️ Exemplo de uso:
```js
sessionStorage.setItem('usuario', 'João');
let user = sessionStorage.getItem('usuario');
```

---

## 🗄️ Local Storage

Armazena dados **de forma persistente**, mesmo após o navegador ser fechado.

### ✅ Características:
- Também usa **pares chave-valor**.
- Mantém os dados até que sejam removidos manualmente (pelo usuário ou pelo JavaScript).
- Ideal para:
  - Lembrar preferências do usuário.
  - Armazenar sessões de login persistentes.

### 🛠️ Exemplo de uso:
```js
localStorage.setItem('tema', 'escuro');
let tema = localStorage.getItem('tema');
```

---

## 🍪 Cookies

São **arquivos de texto** armazenados no computador do usuário. Diferem dos outros dois por permitirem **expiração programada** e serem enviados em requisições HTTP.

### ✅ Características:
- Armazenam pequenas quantidades de dados.
- Podem ser lidos tanto no **frontend quanto no backend**.
- Usados para:
  - Autenticação.
  - Rastreamento de sessões.
  - Preferências persistentes com controle de expiração.

### 🛠️ Exemplo básico:
```js
document.cookie = "usuario=João; expires=Fri, 31 Dec 2025 23:59:59 GMT";
```

---

## 🧩 Comparativo Geral

| Recurso          | Persiste após fechar a aba? | Pode expirar? | Acessível no backend? |
|------------------|-----------------------------|---------------|------------------------|
| Session Storage  | ❌                          | ❌            | ❌                     |
| Local Storage    | ✅                          | ❌            | ❌                     |
| Cookies          | ✅                          | ✅            | ✅                     |

---

## 🎯 Conclusão

Cada forma de armazenamento tem seu **caso de uso ideal**. Não existe uma "melhor", mas sim a **mais adequada** ao problema que você quer resolver:

- **Session Storage** → dados temporários da aba.
- **Local Storage** → dados persistentes no navegador.
- **Cookies** → dados enviados ao servidor e com controle de expiração.
