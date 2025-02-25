# 🧠 Resumo da Aula: Estrutura Condicional IF/ELSE  

## 🌟 O que é IF/ELSE?  
O `if/else` é uma **estrutura de controle** do JavaScript que permite **controlar o fluxo** do código com base em **condições lógicas**.  

## 🏗️ Como funciona?  
- **`if`**: Executa um bloco de código **se** a condição for **verdadeira**.  
- **`else`**: Executa outro bloco de código **se** a condição for **falsa**.  

Exemplo básico:  
```js
let idade = prompt("Informe sua idade");

if (idade >= 18) {
  alert("Você é maior de idade");
} else {
  alert("Você é menor de idade");
}
```

## 🔄 `else if`: Várias condições  
Podemos encadear múltiplas verificações usando `else if`:  
```js
if (idade >= 18) {
  alert("Você é maior de idade");
} else if (idade >= 12) {
  alert("Você é adolescente");
} else {
  alert("Você é criança");
}
```

## ✨ Operador Ternário: Sintaxe Simplificada  
O operador ternário é uma forma **compacta** de escrever `if/else`:  
```js
let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
alert(mensagem);
```

## 🚀 Dicas  
✅ Sempre **use chaves `{}`** para delimitar blocos de código.  
✅ **Evite muitos ifs aninhados**, pois dificultam a leitura.  
✅ Prefira **`else if`** ou **operador ternário** para códigos mais organizados.  

🎯 **Agora pratique no VS Code e experimente diferentes condições!**  
