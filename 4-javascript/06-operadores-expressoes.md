# 🚀 Operadores e Expressões no JavaScript  

## 🛠️ O que são operadores?  
Os operadores permitem realizar **interações entre valores** no JavaScript! Eles possibilitam operações como:  
✅ Aritméticas ➕➖✖️➗  
✅ Atribuição 📥  
✅ Incremento e Decremento 📈📉  

---

## 🔢 Operadores Aritméticos  
São os mesmos da matemática:  
- **Soma**: `2 + 3` ➡️ `5`  
- **Subtração**: `7 - 2` ➡️ `5`  
- **Multiplicação**: `3 * 3` ➡️ `9`  
- **Divisão**: `6 / 2` ➡️ `3`  
- **Módulo (resto da divisão)**: `10 % 3` ➡️ `1`  

📌 **Ordem de precedência**:  
Multiplicação e divisão vêm antes da soma e subtração, **a menos que usemos parênteses**:  
- `3 + 3 * 5` ➡️ `18`  
- `(3 + 3) * 5` ➡️ `30`  

---

## 🎯 Operadores de Atribuição  
Usamos `=` para atribuir valores às variáveis:  
```js
let nome = "Isaac";
```  
Além disso, temos atribuições combinadas com operações matemáticas:  
```js
let a = 5;
a += 3; // Agora a = 8  
a -= 2; // Agora a = 6  
a *= 4; // Agora a = 24  
a /= 2; // Agora a = 12  
```

---

## 🔗 Operador de Encadeamento  
O operador `.` (ponto) **permite encadear métodos e propriedades**:  
```js
console.log("Olá".toUpperCase()); // "OLÁ"
```  

---

## ⏫⏬ Operadores de Incremento e Decremento  
Esses operadores aumentam ou diminuem valores numéricos em `1`:  
```js
let a = 3;
a++; // Agora a = 4  
a--; // Agora a = 3  
```
🧐 **Pré e Pós incremento**:  
- `++a` ➡️ **Incrementa antes de retornar o valor**  
- `a++` ➡️ **Retorna o valor antes de incrementar**  

---

## 🔤 Concatenação de Strings  
Podemos juntar strings com `+`:  
```js
let nome = "Isaac";
let sobrenome = "Pontes";
console.log(nome + " " + sobrenome); // "Isaac Pontes"
```  

⚠️ **Cuidado ao misturar tipos!**  
```js
console.log(1 + "1"); // "11" (String!)
```
📌 O JavaScript converte automaticamente tipos de dados quando necessário!  

---

## 🎯 O que são expressões?  
Uma **expressão** é qualquer trecho de código que pode ser **avaliado e produzir um valor**:  
```js
3 + 2 // Expressão que resulta em 5  
a * 2 // Expressão que resulta em um novo valor baseado em 'a'  
```

---

## 💡 **Conclusão**  
Os operadores e expressões são fundamentais para manipular dados no JavaScript! 🏗️  
Na próxima etapa, exploramos **operadores lógicos e comparativos**! 🚀
