# 🚀 Usando o Webpack

## 🛠️ Estrutura Inicial do Projeto

1. Criamos uma pasta para o projeto.
2. Dentro dela:
   - Um arquivo **`index.html`** com uma tag `<script src="main.js">`.
   - Uma pasta **`src`** com um arquivo **`index.js`** (nosso código fonte principal).
3. Inicializamos o projeto com:
   ```bash
   npm init -y
   ```

---

## 📥 Instalando o Webpack

Instalamos o Webpack e seu CLI (linha de comando) como **dependências de desenvolvimento**:

```bash
npm i -D webpack webpack-cli
```

- `webpack`: núcleo da ferramenta.
- `webpack-cli`: permite rodar via terminal.

---

## 🧪 Testando com uma dependência externa

Para testar o empacotamento, foi instalado o pacote `dayjs`:

```bash
npm i dayjs
```

No `index.js`:

```js
const dayjs = require("dayjs");

alert("Hoje é " + dayjs().format("DD/MM/YYYY"));
```

---

## ⚙️ Rodando o Webpack

Basta rodar:

```bash
npx webpack
```

O Webpack:
- Empacota todos os arquivos da `src/`.
- Cria uma pasta **`dist/`** com o arquivo final `main.js`.
- Esse arquivo já está **minificado** (modo `production` por padrão).

📌 Dica: para mudar o modo (ex: para desenvolvimento):

```bash
npx webpack --mode development
```

---

## 🔍 O que o Webpack fez?

- 💡 **Minificou** o JavaScript (removeu espaços, quebras de linha e comentários).
- 📦 **Incluiu o dayjs** no arquivo final, então podemos até deletar a pasta `node_modules` que ainda vai funcionar!
- 🧹 Deixa tudo em **um único arquivo**, facilitando a inclusão no HTML com apenas uma tag `<script>`.

---

## 🎯 Vantagens do Webpack

✅ Organiza melhor os arquivos (ex: com `src/`).  
✅ Empacota e otimiza dependências.  
✅ Elimina a necessidade de múltiplas tags `<script>`.  
✅ Gera arquivos mais leves para produção.  
✅ Automatiza o processo de build.

---

## 📌 Conclusão

Nessa etapa, você aprendeu:

- A criar uma estrutura básica para usar Webpack.
- Como instalar e rodar ele.
- Como empacotar arquivos e dependências.
- E por que ele é tão útil no desenvolvimento web!  

🧠 **Na próxima etapa:** veremos como **configurar o Webpack** de forma personalizada! Até lá! 😉
