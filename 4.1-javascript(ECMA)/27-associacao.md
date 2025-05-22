# 📚 Associações entre Classes em JavaScript

## 🧠 O que são Associações?

Associação é o **relacionamento entre classes** na programação orientada a objetos. Ela permite que **uma instância de uma classe** se **comunique ou dependa** de outra instância.

> 🧩 *"Uma classe pode usar atributos ou métodos de outra classe por meio de uma associação."*

---

## 🔗 Exemplo de Associação

### 👤 `Person` e `Address`

Imagine que temos duas classes:

* `Person` (Pessoa)
* `Address` (Endereço)

Uma pessoa **possui um endereço**. Então, `Person` pode ter um **atributo que recebe um objeto da classe `Address`**, como neste exemplo:

```js
const addr = new Address("Rua Sete de Setembro", 99, "Centro", "São Fidélis", "RJ");
const john = new Person("John Doe", addr);
```

Essa é uma associação simples e direta, onde uma classe **faz referência a uma instância de outra classe**.

---

## 📦 Benefícios das Associações

* Permite **organizar melhor** os dados da aplicação.
* Cria **relações reais** entre objetos (ex: Pessoa e seu Endereço).
* Permite o **uso de métodos e atributos** de outra classe de forma intuitiva.

```js
console.log(john.address.fullAddress());
```

---

## 🛠️ Como é feita na prática?

### Classe `Address`:

```js
class Address {
  constructor(street, number, neighborhood, city, state) {
    this.street = street;
    this.number = number;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
  }

  fullAddress() {
    return `${this.street}, ${this.number}, ${this.neighborhood}, ${this.city}/${this.state}`;
  }
}
```

### Classe `Person`:

```js
class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address; // associação com objeto da classe Address
  }
}
```

---

## ✨ Formas de fazer Associações

1. **Recebendo o objeto pronto como parâmetro**:

   ```js
   new Person("John", new Address(...));
   ```

2. **Criando o objeto internamente na própria classe**:

   ```js
   constructor(name, street, number, neighborhood, city, state) {
     this.name = name;
     this.address = new Address(street, number, neighborhood, city, state);
   }
   ```

---

## ✅ Vantagens de cada forma

| Forma de Associação        | Vantagem                               |
| -------------------------- | -------------------------------------- |
| Objeto como parâmetro      | Mais flexível e reutilizável           |
| Objeto criado internamente | Menos acoplamento externo, mais direto |

---

## 🎯 Conclusão

* Associações são essenciais para criar **relações reais entre classes**.
* Elas ajudam a **organizar o código** e a manter a lógica orientada a objetos clara.
* Com elas, **objetos ganham poder de interação**, executando métodos e acessando atributos de outras classes.

> 💡 *"Com associações, objetos deixam de ser peças isoladas e passam a formar um sistema interligado e funcional."*
