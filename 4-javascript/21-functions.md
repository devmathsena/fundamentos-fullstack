# 🚀 Introdução às Funções em JavaScript

## 🧐 O que é uma função?
Uma **função** é um bloco de código reutilizável que pode ser chamado e executado sempre que necessário.

Ela permite:

✅ Armazenar um conjunto de instruções

✅ Executar esse bloco de código quantas vezes for preciso

✅ Tornar o código mais organizado e modular

## 📌 Tipos de blocos de código
- **Condicionais**: Executam apenas se uma condição for verdadeira.
- **Repetitivos**: Executam diversas vezes em loops.
- **Funções**: Executam quando chamadas, sempre que quisermos.

## 📌 Funções embutidas no JavaScript
O JavaScript já possui várias funções prontas, como:
- `console.log()` 🖥️
- `alert()` ⚠️
- `confirm()` ✅
- `prompt()` ⌨️

Essas funções são chamadas e executadas automaticamente quando invocamos seus nomes.

---

## 🏗️ Estrutura de uma Função
Uma função tem três partes principais:
1️⃣ **Entrada** (parâmetros, opcionais)
2️⃣ **Procedimento** (bloco de código a ser executado)
3️⃣ **Saída** (retorno, também opcional)

> Pense nela como uma caixinha 📦 que pode receber algo (entrada), fazer um processo (procedimento) e devolver algo (saída).

## ✍️ Criando uma Função
```javascript
function ola() {
    console.log("Olá, mundo!");
}
```
Aqui:
- `function` é a palavra-chave para declarar a função.
- `ola` é o nome da função.
- `{}` envolve o bloco de código a ser executado.

### 📢 Chamando a Função
```javascript
ola();
```
Isso irá exibir "Olá, mundo!" no console.

## 🛠️ Funções com Parâmetros
Podemos criar funções que recebem valores:
```javascript
function saudacao(nome) {
    console.log("Olá, " + nome + "!");
}
saudacao("Ana");
```
➡️ Resultado: `Olá, Ana!`

## 🔄 Retornando Valores
```javascript
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 3)); // Exibe 8
```
A função `soma` recebe dois números e retorna o resultado da soma.

---

## 🏁 Conclusão

🎯 Funções tornam o código mais modular, reutilizável e organizado.

🎯 Podemos criar funções simples ou mais complexas, com parâmetros e retorno.

🎯 Agora é hora de praticar! Abra o VS Code e comece a testar suas próprias funções! 🚀
