# 🚀 Aprendendo a Configurar o Webpack

## 📁 Preparação Inicial

- Usamos a mesma pasta da etapa anterior.
- Trocamos `require` por `import` (funciona normalmente com ESModules).
- Foi removida a pasta `node_modules` para demonstrar independência de código.

```bash
npm install
```

💡 Dica: Se os pacotes derem problema, apague a `node_modules` e instale tudo novamente.

---

## ⚙️ Arquivo de Configuração

- O Webpack tem um arquivo padrão de configuração: `webpack.config.js`.
- Nele exportamos um **objeto JavaScript** com as opções de configuração.

```js
module.exports = {
  // configurações aqui
};
```

📌 Como usamos o Node.js no desenvolvimento, usamos o padrão **CommonJS** (com `module.exports`).

---

## 🛠️ Personalizando Entradas

- Por padrão, o Webpack usa `./src/index.js` como ponto de entrada.
- Podemos definir manualmente:

```js
entry: {
  index: './src/index.js'
}
```

🔁 O nome da entrada define o nome do arquivo de saída (ex: `index.js`, `main.js`, etc.).

---

## 🧱 Definindo o `mode`

- Por padrão, o Webpack usa `production`.
- Podemos evitar alertas definindo o `mode`:

```js
mode: 'development'
```

✅ Modo `development`: código não minificado → facilita a depuração.  
✅ Modo `production`: código otimizado e minificado → ideal para produção.

---

## 📦 Configurando a Saída (`output`)

- Podemos mudar onde e como o arquivo final será salvo:

```js
const path = require('path');

output: {
  path: path.resolve(__dirname, 'public'), // pasta de saída
  filename: 'bundle.min.js' // nome do arquivo
}
```

📁 Isso cria o arquivo `bundle.min.js` dentro da pasta `public`.

---

## ➕ Vários Pontos de Entrada

- Podemos definir múltiplas entradas, útil para páginas diferentes:

```js
entry: {
  index: './src/index.js',
  hello: './src/hello.js'
}
```

📄 Cada entrada gera um arquivo JS separado no output.

---

## ✅ Recapitulando

- 🔧 Webpack pode ser altamente customizado.
- 📂 Você define entrada, saída, modo de build e muito mais.
- 🛠️ É essencial para projetos JS modernos, especialmente com múltiplos arquivos ou dependências.

---

Pronto! Agora você tem controle total sobre o comportamento do Webpack! 🎯  
