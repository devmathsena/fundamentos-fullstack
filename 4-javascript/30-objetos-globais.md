# ✨ Objetos Globais no JavaScript

## 🔄 O que são Objetos Globais?
Os **objetos globais** são elementos padrão do JavaScript que ficam sempre disponíveis para uso no código, sem a necessidade de importá-los ou defini-los previamente.

Eles funcionam de maneira semelhante a **estruturas da linguagem**, como `if`, `for` e `while`, mas, diferentemente destas, são **objetos reais** com propriedades e métodos.

## 🌟 Objetos Globais x Escopo Global (`window`)
✔️ **Objetos Globais**: fazem parte da linguagem JavaScript e podem ser utilizados em qualquer ambiente (navegador, Node.js, etc.).

✔️ **Objeto `window`**: exclusivo do navegador, representa o escopo global e contém elementos como `window.alert()` e `window.console.log()`.

Exemplo:
```js
window.alert("Mensagem de alerta!"); // Funciona normalmente
alert("Mensagem de alerta!"); // Funciona da mesma forma, pois "alert" está no escopo global
```

No entanto, não confunda os objetos globais com o `window`, pois os primeiros são parte da linguagem JavaScript e podem ser usados em qualquer ambiente.

---

## 📚 Principais Objetos Globais
### 🛠 Criando Objetos Globais
Os objetos globais podem ser utilizados diretamente no código para criar valores de diferentes tipos:

```js
let pessoa = Object(); // Cria um objeto vazio
let lista = Array(); // Cria um array vazio
let texto = String(42); // Converte o número 42 para string
let numero = Number("42"); // Converte a string "42" para número
```

### 📖 Características dos Objetos Globais
- **Sempre começam com letra maiúscula** (exemplo: `Object`, `Array`, `String`).
- **Podem ser utilizados como funções para criar valores**.
- **Oferecem propriedades e métodos úteis** para manipulação de dados.

### 📝 Exemplo de Uso: `Number.isInteger()`
O objeto `Number` possui o método `isInteger()`, que verifica se um valor é um número inteiro:

```js
console.log(Number.isInteger(4.5)); // false
console.log(Number.isInteger(4)); // true
```

---

## ⏳ Trabalhando com `Date`
O objeto `Date` é utilizado para manipular datas e horários:

```js
let dataAtual = Date(); // Retorna a data e hora atuais como string
console.log(dataAtual);
```

---

## ✖️ `Math`: Cálculos Matemáticos
O objeto `Math` oferece diversas funções matemáticas:

```js
console.log(Math.PI); // Valor de pi (3.141592...)
console.log(Math.sqrt(16)); // Raiz quadrada de 16 (4)
console.log(Math.random()); // Número aleatório entre 0 e 1
```

---

## 🎯 Conclusão
Os **objetos globais** são recursos poderosos do JavaScript, permitindo a criação e manipulação de valores sem precisar de bibliotecas externas. Compreender como funcionam facilita a escrita de códigos mais eficientes e organizados! 🌟
