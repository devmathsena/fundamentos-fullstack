# 📚 Revisão Rápida: Objetos no JavaScript

## 🧠 Relembrando o que são Objetos

* Objetos são **coleções de dados organizadas em pares** `chave: valor`.
* Eles nos permitem **estruturar dados de forma flexível** e acessível.

```js
const book = {
  title: "Eragon",
  pages: 468,
  published: true,
  stock: 20,
  tags: ["fantasia", "aventura", "medieval"],
  author: {
    name: "Christopher Paolini"
  }
};
```

* Acessamos os valores usando a notação de ponto:

```js
console.log(book.title); // Eragon
```

## 🎯 Tipos de valores que podemos armazenar

* **Strings**: `title: "Eragon"`
* **Números**: `pages: 468`, `stock: 20`
* **Booleanos**: `published: true`
* **Arrays**: `tags: ["fantasia", "aventura", "medieval"]`
* **Objetos aninhados**: `author: { name: "Christopher Paolini" }`

## 🛠️ Adicionando Métodos (Funções dentro de Objetos)

* Podemos adicionar funções como **métodos** dos objetos:

```js
book.addOnStock = function(qtd) {
  this.stock += qtd;
};
book.addOnStock(50); // stock agora é 70
```

* A palavra-chave `this` se refere **ao próprio objeto**.

## 🌀 Atribuição dinâmica de métodos

* Também é possível **adicionar métodos dinamicamente** após a criação do objeto:

```js
book.save = function() {
  console.log("Salvando no banco de dados...");
};
```

* E até remover depois se quiser.

## 🏗️ Funções Construtoras

Quando queremos criar **múltiplos objetos com a mesma estrutura**, usamos **funções construtoras**:

```js
function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.stock = 0;
  this.published = false;
}
```

* Criando novos objetos:

```js
const book1 = new Book("O Hobbit", 310, ["fantasia"], { name: "Tolkien" });
```

### 📌 Convenção:

* Usamos **PascalCase** no nome da função construtora: `Book`

  * Exemplo: `Book`, `Car`, `UserAccount`
* Dentro da função usamos `this` para definir as propriedades do novo objeto.

---

## ✅ Conclusão

* Objetos são **extremamente flexíveis** e poderosos.
* Podemos guardar **diversos tipos de dados**, funções e até criar modelos com **funções construtoras**.
* Essa base é **essencial para entender programação orientada a objetos** no JavaScript 🚀
