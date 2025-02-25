# 🚀 Explorando os Recursos Nativos do Navegador!  

Nesta etapa, vamos conhecer os recursos que **todos os navegadores modernos** já possuem e que facilitam nosso trabalho com JavaScript!  

## 🖥️ O Navegador e o JavaScript  
O navegador tem um **interpretador de JavaScript** embutido, o que significa que podemos rodar código diretamente nele! Além disso, ele oferece várias funcionalidades prontas que podemos usar sem precisar reescrevê-las do zero.  

---

## 🔍 Console: Nosso Aliado no Debug!  
O primeiro recurso que vamos explorar é o **console**, que já usamos antes!  

- `console.log()` → Exibe mensagens no console  
- `console.error()` → Exibe erros em vermelho  
- `console.warn()` → Exibe avisos em amarelo  

📌 Dica: No **VS Code**, ele até sugere os métodos disponíveis no objeto `console` enquanto digitamos!  

---

## 🌍 O Objeto `window`  
O objeto `window` representa a **aba do navegador** e possui várias funções úteis:  

🔹 `alert("Olá!")` → Exibe um alerta na tela  
🔹 `prompt("Qual seu nome?")` → Pede uma entrada do usuário  
🔹 `confirm("Tem certeza?")` → Mostra um pop-up com **OK** e **Cancelar**  

💡 Podemos armazenar essas respostas em variáveis para usá-las depois!  

```js
let nome = prompt("Qual seu nome?");
console.log("Olá, " + nome + "!");
```

📌 Curiosidade: O `window` é um **objeto global**, então podemos chamar `alert()`, `prompt()` e `confirm()` **sem precisar escrever `window.` antes**!  

---

## 📄 O Objeto `document`  
Outro recurso importante é o `document`, que representa a **página HTML**. Vamos explorar ele mais a fundo nas próximas aulas, mas já sabemos que é ele quem nos permite interagir com os elementos do site!  

---

## 🔥 Conclusão  
Com esses recursos nativos do navegador, podemos **exibir mensagens, coletar informações do usuário e interagir com a página** sem instalar nada extra! Isso torna o JavaScript ainda mais poderoso.  
