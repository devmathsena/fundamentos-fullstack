# 📜 Template Literals no JavaScript Moderno

Nesta etapa, aprendemos sobre um dos recursos mais úteis do JavaScript moderno: os **template literals**, introduzidos no **ES6 (ES2015)**.

## ✨ O que são Template Literals?

Template literals são uma nova forma de declarar strings usando crase (<code>`</code>) no lugar de aspas simples (') ou duplas ("). Com eles, é possível:

- **Interpolar variáveis e expressões JavaScript** diretamente.
- **Fazer quebras de linha** de forma automática.
- **Manter espaços e identações** exatamente como digitado.

---

## 🧠 Sintaxe

```javascript
const nome = "Isaac";
console.log(`Olá, ${nome}!`);
```

✅ Resultado: `Olá, Isaac!`

> Dentro da crase, usamos `${...}` para inserir qualquer código JavaScript, como variáveis ou expressões.

---

## 🔁 Interpolando expressões

```javascript
console.log(`2 + 2 = ${2 + 2}`);
```

✅ Resultado: `2 + 2 = 4`

---

## 🕓 Exemplo com objeto Date

```javascript
console.log(`Estamos em ${Date()}`);
```

✅ Resultado: `Estamos em Mon Apr 14 2025 ...` (ou a data atual)

---

## 📏 Quebra de linha automática

```javascript
console.log(`Olá, ${nome}
Estamos em ${Date()}`);
```

✅ Resultado:
```
Olá, Isaac
Estamos em Mon Apr 14 2025 ...
```

---

## 🆚 Concatenar sem template literals

Antes:
```javascript
console.log("Olá, " + nome + "\nEstamos em " + Date());
```

Com template literals, tudo fica **mais limpo e intuitivo**! 🧼✨

---

## 🏁 Conclusão

Os template literals são uma maneira **moderna e eficiente** de escrever strings com:

- Mais legibilidade
- Menos concatenação
- Mais poder ao incorporar código dinâmico

Você vai usá-los **o tempo todo** daqui pra frente! 🚀
