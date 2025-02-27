# 🌟 Estruturas Condicionais: Switch

O `switch` é uma **estrutura condicional** semelhante ao `if`, utilizada quando há **múltiplas possibilidades** para um valor específico. Ele compara um valor contra vários **casos (`case`)** e executa o bloco correspondente.

## 🛠️ Estrutura básica

```js
switch (valor) {
  case "a":
    console.log("Resultado é A");
    break;
  case "b":
    console.log("Resultado é B");
    break;
  case "c":
    console.log("Resultado é C");
    break;
  default:
    console.log("Nenhuma opção correspondente.");
}
```

### 🔹 Como funciona?
1. O `switch` **avalia** a expressão dentro dos parênteses `()`.
2. Ele **compara** esse valor com cada `case`.
3. Se encontrar um **caso correspondente**, executa o bloco de código associado.
4. O `break` impede que os próximos `case` sejam executados.
5. O `default` é acionado **se nenhum caso for correspondente**.

---

## ❌ O que acontece sem `break`?

Se não usarmos `break`, o código **não para** ao encontrar um `case` correspondente. Exemplo:

```js
let valor = "b";

switch (valor) {
  case "a":
    console.log("Resultado é A");
  case "b":
    console.log("Resultado é B"); 
  case "c":
    console.log("Resultado é C");
  default:
    console.log("Nenhuma opção correspondente.");
}
```

**Saída inesperada:**  
```
Resultado é B  
Resultado é C  
Nenhuma opção correspondente.  
```

✅ Para evitar esse comportamento, **sempre utilize `break`** (exceto quando desejar executar múltiplos blocos).

---

## 🔢 Usando `switch` com números

O `switch` também funciona com **números** e outras expressões:

```js
let resultado = parseInt(prompt("Escolha uma opção: 1, 2 ou 3"));

switch (resultado) {
  case 1:
    console.log("Opção escolhida: 1");
    break;
  case 2:
    console.log("Opção escolhida: 2");
    break;
  case 3:
    console.log("Opção escolhida: 3");
    break;
  default:
    console.log("Opção inválida.");
}
```

Se o usuário digitar `2`, a saída será:
```
Opção escolhida: 2
```

---

## 📌 Quando usar `switch` ao invés de `if`?
✅ Use `switch` quando precisar comparar **um mesmo valor contra múltiplas possibilidades**.  
✅ Ele pode ser mais **limpo e organizado** do que vários `if else if`.  

🚀 Agora que você aprendeu `switch`, pratique no código e veja a diferença!
