# 🔗 Operadores Lógicos no JavaScript  

Nessa nova etapa, exploramos os **operadores lógicos**, que trabalham com valores **booleanos** (true ou false). Eles ajudam a avaliar expressões lógicas e são muito úteis na programação!  

💡 **Principais operadores:**  
✅ **E (`&&`)** → Retorna `true` apenas se **ambos** os valores forem `true`.  
✅ **OU (`||`)** → Retorna `true` se **pelo menos um** dos valores for `true`.  
✅ **NÃO (`!`)** → Inverte o valor: `true` vira `false` e vice-versa.  

---

## 📌 📋 Tabelas Verdade  
Os operadores seguem **regras matemáticas** conhecidas como **tabelas verdade**. Aqui estão as principais:  

📌 **Operador "E" (`&&`)**  
| A | B | A && B |
|---|---|--------|
| true  | true  | true  |
| true  | false | false |
| false | true  | false |
| false | false | false |

📌 **Operador "OU" (`||`)**  

| A      | B      | A \|\| B |
|--------|--------|---------|
| true   | true   | true    |
| true   | false  | true    |
| false  | true   | true    |
| false  | false  | false   |

📌 **Operador "NÃO" (`!`)**  
| A | !A |
|---|----|
| true  | false |
| false | true  |

---

## 🛠 Exemplos no Console  
Podemos testar os operadores no **console do navegador**!  

🖥 **Testando o operador "E" (`&&`)**  
```js
console.log(true && true); // true
console.log(true && false); // false
console.log(6 < 7 && 8 !== 9); // true (porque ambas são verdadeiras)
```

🖥 **Testando o operador "OU" (`||`)**  
```js
console.log(true || false); // true
console.log(6 > 7 || 8 !== 9); // true (porque pelo menos uma das expressões é verdadeira)
```

🖥 **Testando o operador "NÃO" (`!`)**  
```js
console.log(!true); // false
console.log(!(6 > 7)); // true (porque 6 > 7 é falso, e o NOT inverte)
```

---

## 🚀 Conclusão  
Os **operadores lógicos** são essenciais para **tomada de decisões** no código! Combinados com operadores de **comparação**, eles ajudam a construir **condições mais avançadas**. 🎯  

Pratique no console e **teste diferentes combinações** para reforçar seu aprendizado! 🔥
