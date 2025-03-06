# ✨ Entendendo Métodos em JavaScript

## 🤔 O que são métodos?

Métodos são funções atreladas a objetos. Eles permitem adicionar funcionalidades aos objetos, tornando-os mais poderosos e flexíveis!

## 📝 Criando um Objeto com Métodos

Vamos criar um objeto `pessoa` e adicionar um método chamado `dizerOla`:

```javascript
const pessoa = {
    nome: "Isaac",
    idade: 26,
    dizerOla() {
        console.log("Olá, mundo! Meu nome é " + this.nome);
    }
};
```

## 🔗 Acessando um Método

Para chamar um método, basta usá-lo como uma função dentro do objeto:

```javascript
pessoa.dizerOla();
// Saída: Olá, mundo! Meu nome é Isaac
```

## ✨ Entendendo `this`

A palavra-chave `this` refere-se ao próprio objeto. No exemplo acima, `this.nome` acessa a propriedade `nome` do objeto `pessoa`.

Se mudarmos o nome da pessoa e chamarmos o método novamente:

```javascript
pessoa.nome = "Ana";
pessoa.dizerOla();
// Saída: Olá, mundo! Meu nome é Ana
```

## 🔧 Criando Múltiplos Métodos

Podemos adicionar quantos métodos quisermos ao objeto:

```javascript
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    acelerar() {
        console.log("O " + this.marca + " " + this.modelo + " está acelerando!");
    }
};

carro.acelerar();
// Saída: O Toyota Corolla está acelerando!
```

## 🔍 Resumo

- ✨ **Métodos** são funções dentro de objetos.
- ✨ O **`this`** referencia o próprio objeto.
- ✨ Podemos usar métodos para tornar objetos mais dinâmicos e interativos.

Agora você tem mais uma ferramenta poderosa para criar programas incríveis com JavaScript! 🚀

