# 📚 Aula Prática de Classes no ES6

## 🚀 O que você vai aprender?

Nesta etapa, você aprendeu a utilizar **classes no JavaScript moderno (ES6)**, uma maneira mais amigável e parecida com outras linguagens para aplicar **Programação Orientada a Objetos (POO)**.

---

## 🛠️ Criando a primeira classe

```js
class Book {
}
```

* Palavra-chave `class` é usada para declarar a classe.
* O nome da classe normalmente **bate com o nome do arquivo** (ex: `book.js`).

---

## 🧱 Instanciando um objeto

```js
const eragon = new Book();
```

* Utiliza-se `new` para **instanciar** (criar um novo objeto baseado na classe).
* `eragon` é uma **instância da classe Book**.

---

## 📦 Adicionando atributos com o constructor

```js
class Book {
  constructor(title) {
    this.title = title;
  }
}
```

* `constructor()` é o **método especial** que roda ao instanciar um objeto.
* `this` se refere à instância atual (ex: `this.title = title`).

🧪 Exemplo:

```js
const eragon = new Book("Eragon");
console.log(eragon.title); // "Eragon"
```

---

## 🧠 Criando métodos na classe

```js
class Book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }

  publish() {
    this.published = true;
  }
}
```

* Métodos são declarados **fora do `constructor`**, mas ainda **dentro da classe**.
* `this.published = true` modifica o estado do objeto.

🧪 Exemplo:

```js
const book = new Book("Eragon");
book.publish();
console.log(book.published); // true
```

---

## 📌 Dica de boas práticas

* É comum (mas **não obrigatório**) nomear o arquivo `.js` com o **nome da classe** que ele contém.

---

## 🧪 Verificando instâncias com `instanceof`

```js
console.log(eragon instanceof Book); // true
console.log(eragon instanceof Array); // false
```

* `instanceof` verifica se um **objeto é instância de uma determinada classe**.

🧪 Outro exemplo:

```js
const books = [eragon, anotherBook];
console.log(books instanceof Array); // true
```

---

## ✅ O que você aprendeu?

✔️ Como declarar uma classe com `class`

✔️ Como usar `constructor` para definir atributos

✔️ Como criar métodos de forma limpa

✔️ Como instanciar objetos com `new`

✔️ Como usar `instanceof` para verificações
