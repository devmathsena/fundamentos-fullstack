# 🛠️ Entendendo o **NPX** e os **Scripts do NPM**

## 🚀 Iniciando um Projeto NPM

Para começar a trabalhar com o **NPM**, você precisa inicializar o projeto na pasta desejada:

```bash
npm init -y
```

Isso cria o arquivo `package.json`, essencial para configurar dependências e scripts.

---

## ⚡ O que é o **NPX**?

O **NPX** serve para **executar pacotes diretamente pela linha de comando** sem que você precise criar arquivos separados.

### ✅ Exemplo prático:

1. Instale um pacote de teste:
   ```bash
   npm install --save hello-world-npm
   ```

2. Execute com o **npx**:
   ```bash
   npx hello-world-npm
   ```

🧠 *Dica:* Nem todo pacote tem executáveis. Verifique a documentação ou a pasta `.bin` dentro de `node_modules`.

---

## 🎯 Scripts no `package.json`

Os **scripts** são atalhos personalizados para comandos do terminal.

### 📝 Exemplo de script:

```json
"scripts": {
  "hello": "hello-world-npm"
}
```

Execute com:

```bash
npm run hello
```

💡 Você pode omitir o `npx` dentro do script – o NPM já entende!

---

## 🏁 Script de Inicialização (start)

Você pode criar um script para rodar sua aplicação:

### Exemplo:

1. Crie o arquivo `index.js`:
   ```js
   const hello = require('hello-world-npm');
   console.log('Executando hello-world-npm');
   hello();
   ```

2. Adicione ao `package.json`:
   ```json
   "scripts": {
     "start": "node index.js"
   }
   ```

3. Execute com:
   ```bash
   npm start
   ```

✨ *Dica bônus:* O script chamado `start` pode ser executado sem `run`!

---

## 🧩 Quando usar NPX vs Scripts?

| Situação | Use |
|---------|-----|
| Executar pacote temporário/teste | `npx` |
| Automatizar comandos repetitivos | `npm run` |
| Iniciar a aplicação principal | `npm start` |

---

## 🎉 Conclusão

- **NPX** é ótimo para executar pacotes diretamente.
- **Scripts** do NPM tornam seu fluxo de trabalho mais limpo e rápido.
- Combine os dois para automatizar tarefas e facilitar seu desenvolvimento!
