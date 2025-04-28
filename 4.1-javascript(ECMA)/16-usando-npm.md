# 📦 Introdução prática ao NPM

## 🔍 Verificando se Node e NPM estão instalados

- No terminal, use:
  ```bash
  node --version
  npm --version
  ```
- Se não estiver instalado:
  - **Linux:** Use o gerenciador de pacotes (ex: `sudo apt install nodejs npm`) ou gerencie versões com [ASDF](https://asdf-vm.com/).
  - **Windows:** Baixe do site oficial [Node.js](https://nodejs.org).

> Ao instalar o **Node.js**, o **NPM** já vem junto! 😉

---

## 📂 Criando um projeto com NPM

1. Crie uma pasta:
   ```bash
   mkdir usando-npm
   cd usando-npm
   ```
2. Inicialize o projeto:
   ```bash
   npm init
   ```
   - Responda as perguntas (ou pressione **Enter** para aceitar os padrões).
   - Isso cria o arquivo `package.json`, que guarda:
     - Nome do projeto
     - Versão
     - Scripts
     - Dependências
     - Outras configurações

---

## 📜 Entendendo o `package.json`

- É o **coração** do projeto com NPM.
- Gerencia:
  - Dependências instaladas
  - Scripts de automação
  - Informações do projeto

Exemplo básico de `package.json`:
```json
{
  "name": "primeiro-projeto-npm",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {},
  "dependencies": {},
  "author": "",
  "license": "ISC"
}
```

---

## 📥 Instalando pacotes com NPM

Exemplo: instalar o **Lodash** (uma biblioteca de utilitários JavaScript):
```bash
npm install lodash
```
- Isso adiciona:
  - A dependência no `package.json`
  - O código na pasta `node_modules`
  - Um `package-lock.json` para travar as versões

---

## 📚 Sobre os arquivos criados

- **`node_modules/`**: onde ficam os pacotes baixados.
- **`package-lock.json`**: garante que todos instalem as **mesmas versões** dos pacotes, para manter o projeto funcionando igual em diferentes máquinas.

---

## 🚀 Recapitulando!

✅ Instalar Node.js → já vem com o NPM  
✅ `npm init` → cria o `package.json`  
✅ `npm install <pacote>` → instala bibliotecas  
✅ Gerenciamento automático de versões e dependências com NPM
