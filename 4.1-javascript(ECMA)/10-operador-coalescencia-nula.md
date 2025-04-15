# 🧠 Entendendo o Operador de Coalescência Nula (`??`) no JavaScript

## ✨ O que é?

O **operador de coalescência nula** (`??`), também conhecido como **Nullish Coalescing Operator**, é um recurso moderno do JavaScript que permite **verificar se um valor é `null` ou `undefined`**. Se for, ele retorna um valor alternativo.

---

## ⚙️ Como funciona?

```js
let resultado = valor1 ?? valor2;
```

- Se `valor1` for **diferente de `null` ou `undefined`**, ele será retornado.
- Se `valor1` for `null` ou `undefined`, o JavaScript retorna `valor2`.

🔎 **Exemplo:**
```js
let nome = null;
let nomeFinal = nome ?? "Visitante";
console.log(nomeFinal); // "Visitante"
```

---

## 🔄 Comparando com o operador `||` (OU lógico)

O operador `||` retorna o primeiro **valor "truthy"** encontrado, ou seja, **ele ignora valores como `0`, `""`, `false`, `null`, `undefined`, `NaN`**.

```js
let a = 0;
let b = a || 42;
console.log(b); // 42 (porque 0 é "falsy")
```

✅ Já o `??` **considera válidos valores como `0`, `""` e `false`**, verificando **apenas `null` e `undefined`**:

```js
let a = 0;
let b = a ?? 42;
console.log(b); // 0
```

---

## 🧪 Curto-circuito (Short-Circuit)

O operador `??` avalia **da esquerda para a direita**. Assim que encontra um valor diferente de `null` ou `undefined`, **para e retorna esse valor**.

---

## 🧰 Usos comuns

### ✅ Valores padrão
Muito útil para atribuir um **valor padrão** a uma variável que pode estar nula ou indefinida.

```js
let idade;
let idadeFinal = idade ?? 18;
console.log(idadeFinal); // 18
```

### ✅ Dentro de condicionais
```js
if ((nome ?? "") !== "") {
  console.log("Nome definido!");
}
```

---

## 🧠 Dica final

O operador `??` pode parecer estranho no início, mas é **super útil**! Lembre-se dele especialmente quando quiser **distinguir `null`/`undefined` de outros valores "falsy" como `0` ou `""`.**
