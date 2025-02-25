# 🔄 Comparação de Dados no JavaScript  

Nesta etapa, vamos aprender a comparar valores e entender o **tipo booleano**, que retorna **verdadeiro (true) ou falso (false)**. Essas operações são essenciais na programação!  

---

## 🧐 Operadores de Igualdade  

O JavaScript oferece **duas formas** de comparar valores:  

✔️ **Igualdade solta (`==`)** → Compara apenas o **valor**, ignorando o tipo.  
✔️ **Igualdade estrita (`===`)** → Compara **valor e tipo**, sendo mais rigorosa.  

```js
console.log(10 == "10");  // true  (ignora o tipo)
console.log(10 === "10"); // false (tipos diferentes)
```

📌 **Dica:** Prefira sempre `===` para evitar surpresas!  

---

## ❌ Operadores de Desigualdade  

🚫 `!=` → Apenas compara o **valor**, ignorando o tipo.  
🚫 `!==` → Compara **valor e tipo**.  

```js
console.log(5 != "5");  // false (considera só o valor)
console.log(5 !== "5"); // true  (tipos diferentes)
```

Assim como na igualdade, o `!==` é mais seguro na maioria dos casos!  

---

## 🔼 Comparações Numéricas  

O JavaScript também permite comparar **tamanhos** de valores:  

✔️ `>`  → Maior que  
✔️ `<`  → Menor que  
✔️ `>=` → Maior ou igual  
✔️ `<=` → Menor ou igual  

```js
console.log(8 > 5);   // true  
console.log(3 <= 3);  // true  
console.log(7 < 2);   // false  
```

📌 Perceba que `>=` e `<=` incluem o valor da comparação!  

---

## 🎯 Conclusão  

Os operadores de comparação são **fundamentais** na programação, pois permitem **tomar decisões** no código! ⚡  

💡 **Lembre-se:**  
✔️ `===` e `!==` são mais seguros!  
✔️ Sempre teste as comparações para evitar pegadinhas do JavaScript.  
