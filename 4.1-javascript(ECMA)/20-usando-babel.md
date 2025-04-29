# 🚀 Como usar o Babel no seu projeto JavaScript

## 🧠 O que é o Babel?

O **Babel** é um **compilador de JavaScript** que converte código moderno (ES6+) em versões mais compatíveis com navegadores antigos.  
👉 Ele **não é usado em produção**, mas sim no ambiente de **desenvolvimento**.

---

## ⚙️ Iniciando o projeto

```bash
npm init -y
```

---

## 📦 Instalando o Babel

### Instale como dependência de desenvolvimento:

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

📝 Dica:  
Você pode abreviar `--save-dev` como `-D`.

- `@babel/core`: núcleo do Babel.
- `@babel/cli`: interface de linha de comando.
- `@babel/preset-env`: configuração pronta para converter o código automaticamente com base no ambiente.

---

## 📝 Criando o arquivo JavaScript

Crie um arquivo `index.js` com um código que utilize recursos modernos (como `const`, `arrow functions`, `spread`, etc.).  
Por exemplo: um exercício que calcule **média, mediana e moda**.

---

## 🔧 Usando o Babel pela primeira vez

### Converter o arquivo e exibir o resultado no terminal:

```bash
npx babel index.js
```

Isso **ainda não** converte para versões antigas — apenas corrige pequenos detalhes (ex: adiciona `;` e remove vírgulas desnecessárias).

---

## 📁 Salvando a saída em um arquivo

### Comando para gerar o arquivo convertido:

```bash
npx babel index.js --out-file dist.js
```

📂 O arquivo `dist.js` será a versão final/distribuível do seu código.

---

## 🔄 Aplicando o preset para compatibilidade total

### Agora sim! Convertendo para versões antigas do JS:

```bash
npx babel index.js --out-file dist.js --presets=@babel/preset-env
```

🔄 Com isso o Babel:
- Converte `const` e `let` para `var`;
- Substitui `arrow functions` por funções tradicionais;
- Troca `rest/spread` por uso de `arguments`;
- Muda interpolações de string (`${}`) para `.concat()`;
- Adiciona `"use strict"` para segurança.

---

## ✅ Resultado

Seu código está agora compatível com **ambientes mais antigos**, sem precisar reescrever nada manualmente.  
📈 Ótimo para garantir suporte em navegadores mais antigos!

---

## 📚 Curiosidades

- `dist` é uma pasta/arquivo comum para versões distribuíveis do projeto.
- `"use strict"` ajuda a evitar erros e comportamentos inesperados no JS.
- Presets como `@babel/preset-env` são essenciais para automatizar a compatibilidade.
