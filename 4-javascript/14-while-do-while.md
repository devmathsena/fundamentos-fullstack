# ♻️ Estrutura de Repetição: While em JavaScript

## 🔄 O que é o `while`?
O `while` é uma estrutura de repetição em JavaScript que executa um bloco de código **enquanto** uma condição for verdadeira.

### ✅ Características principais:
- **Repetição baseada em condição**: O código só para quando a condição se torna `false`.
- **É importante garantir que a condição possa se tornar `false`**, para evitar loops infinitos.
- **Ideal para situações onde o número de repetições é incerto.**

---

## 📚 Sintaxe do `while`
```js
while (condicao) {
    // Bloco de código a ser executado
}
```

### ✨ Exemplo prático:
Vamos criar um loop que imprime os números de 1 a 5 no console:

```js
let contador = 1;

while (contador <= 5) {
    console.log("Contagem: " + contador);
    contador++; // Incrementa para evitar loop infinito
}
```

📈 **Fluxo do loop:**
1. A variável `contador` começa em 1.
2. O `while` verifica se `contador <= 5`. Se for `true`, executa o bloco.
3. O `console.log()` exibe o valor atual de `contador`.
4. A variável `contador` é incrementada (`contador++`).
5. O processo se repete até `contador` ser maior que 5.

---

## ⏳ Loop Infinito: Cuidado!
Se esquecermos de modificar a condição dentro do loop, ele pode rodar **para sempre**, travando o programa! Exemplo:

```js
while (true) {
    console.log("Isso nunca para!");
}
```

**⚠️ Para evitar isso, sempre garanta que a condição possa se tornar `false` em algum momento!**

---

## ⏪ `do...while`: Executa pelo menos uma vez
O `do...while` é uma variação do `while`, onde o bloco de código é executado **pelo menos uma vez**, mesmo que a condição seja `false` logo no início.

### 🎯 Sintaxe:
```js
do {
    // Bloco de código
} while (condicao);
```

### ✨ Exemplo:
```js
let numero = 10;
do {
    console.log("O valor de numero é: " + numero);
    numero++;
} while (numero < 13);
```

💡 **Diferença entre `while` e `do...while`:**
- `while`: **Verifica a condição antes de executar**.
- `do...while`: **Executa pelo menos uma vez, depois verifica a condição**.

---

## ⚡ Dicas Rápidas
✅ Use `while` quando não souber exatamente quantas repetições serão necessárias.  
✅ Sempre garanta que a condição do loop possa ser `false` em algum momento.  
✅ Prefira `do...while` se precisar que o bloco execute pelo menos uma vez.  
✅ Se precisar de um número fixo de repetições, considere usar `for`.  

Agora você já domina o `while` e pode utilizá-lo com confiança no JavaScript! ✨💪

