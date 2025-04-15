# 🚀 Entendendo os Rest Params (`...`) no JavaScript

## 🧠 O que são Rest Params?

Rest Parameters são uma técnica do JavaScript que permite que uma **função receba qualquer quantidade de argumentos**.

```js
function exemplo(...args) {
  console.log(args); // args será um array com todos os parâmetros passados
}
```

- Usam o mesmo **operador `...`** do spread, mas com um propósito diferente.
- Agrupam os argumentos passados em um **Array** dentro da função.
- Permite usar **métodos de Array** como `map`, `reduce`, `filter`, etc.

---

## ✨ Vantagens

✅ Aceita **número indefinido de argumentos**  
✅ Pode manipulá-los como um **Array**  
✅ Mais conveniente que o antigo `arguments`

---

## 🆚 Comparação com `arguments`

| Característica           | `arguments`            | `...rest`                     |
|--------------------------|------------------------|-------------------------------|
| Tipo                     | Objeto                 | Array                         |
| Métodos de Array         | ❌ Não disponíveis      | ✅ Sim                         |
| Suporte moderno (ES6+)   | ❌ Antigo               | ✅ Recomendado                 |

---

## 🧪 Exemplo prático: Função de soma com Rest Params

```js
function soma(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(soma(1, 2)); // 3
console.log(soma(1, 2, 3, 4)); // 10
console.log(soma(10, 20, 30)); // 60
```

🧠 **Dica:** O VS Code reconhece automaticamente `numbers` como um array!

---

## ⚠️ Regras importantes

- Os Rest Params **devem estar no final da lista de parâmetros**:

```js
function exemplo(certo, ...rest) {} // ✅
function exemplo(...rest, errado) {} // ❌ ERRO
```

Isso acontece porque o JS **não saberia onde parar** ao coletar os parâmetros.

---

## 💡 Dica para lembrar

**Rest = Resto!**  
Eles representam o **resto dos parâmetros** que não foram capturados por outros parâmetros nomeados.

---

## ✅ Conclusão

Os Rest Params permitem:

- Criar funções **mais flexíveis**
- Trabalhar com qualquer número de argumentos
- Usar a força dos **métodos de Array**
