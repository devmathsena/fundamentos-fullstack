# 🚀 Métodos de Arrays (High Order Functions) no JavaScript

Nesta etapa, você vai aprender sobre métodos de Arrays que são High Order Functions, muito utilizados na programação com JavaScript. 💪

## 🔥 O que são High Order Functions?
High Order Functions são funções que recebem outras funções como argumento ou retornam funções como resultado. Métodos como **map**, **filter**, **reduce** e **find** fazem parte desse grupo, tornando o código mais elegante e funcional.

---

## 🗺️ Método `map()`
### Função de Mapeamento
O método `map()` é utilizado para transformar arrays. Ele cria **um novo array** baseado no array original, aplicando uma função de callback para cada elemento.

### Como Funciona:
```javascript
const personagens = [
  { nome: "Thrall", raca: "Orc" },
  { nome: "Garrosh", raca: "Orc" },
  { nome: "Gul'dan", raca: "Orc" },
  { nome: "Jaina", raca: "Humano" }
];

const nomes = personagens.map(personagem => personagem.nome);
console.log(nomes);
// Resultado: ["Thrall", "Garrosh", "Gul'dan", "Jaina"]
```

### 🔑 O que o `map()` faz?
- Percorre cada elemento do array.
- Cria um **novo array** com o resultado da função de callback.
- Não modifica o array original.

✅ Vantagem: Código mais limpo e fácil de entender.

---

## 🔍 Método `filter()`
### Filtrando Elementos
O método `filter()` serve para **selecionar elementos específicos** de um array que atendam a uma determinada condição.

### Como Funciona:
```javascript
const orcs = personagens.filter(personagem => personagem.raca === "Orc");
console.log(orcs);
// Resultado: [{nome: "Thrall", raca: "Orc"}, {nome: "Garrosh", raca: "Orc"}, {nome: "Gul'dan", raca: "Orc"}]
```

### 🔑 O que o `filter()` faz?
- Percorre cada elemento do array.
- Retorna **um novo array** apenas com os elementos que passaram na condição.
- Não modifica o array original.

✅ Vantagem: Código mais eficiente para filtrar dados.

---

## ➕ Método `reduce()`
### Reduzindo o Array
O método `reduce()` é utilizado para **reduzir** um array a um único valor, acumulando os resultados da função de callback.

### Como Funciona:
```javascript
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma);
// Resultado: 15
```

### 🔑 O que o `reduce()` faz?
- Percorre cada elemento do array.
- Usa um acumulador para armazenar o valor resultante.
- Retorna **um único valor**.

✅ Vantagem: Ideal para somar ou combinar valores de um array.

---

## 🔍 Método `find()`
### Encontrando Elementos
O método `find()` serve para **encontrar o primeiro elemento** de um array que satisfaça uma condição.

### Como Funciona:
```javascript
const personagem = personagens.find(personagem => personagem.raca === "Humano");
console.log(personagem);
// Resultado: {nome: "Jaina", raca: "Humano"}
```

### 🔑 O que o `find()` faz?
- Percorre cada elemento do array.
- Retorna o **primeiro elemento** que atender à condição.
- Para a execução assim que encontrar o elemento.

✅ Vantagem: Útil para buscar apenas **um único item** em uma lista.

---

### 🎯 Diferenças entre `map()`, `filter()`, `reduce()` e `find()`
| Método   | Objetivo              | Modifica o Original? | Retorno            |
|----------|----------------------|---------------------|------------------|
| `map()`  | Transforma elementos | ❌ Não             | Novo Array      |
| `filter()` | Filtra elementos    | ❌ Não             | Novo Array      |
| `reduce()` | Reduz elementos    | ❌ Não             | Único Valor    |
| `find()`   | Busca elementos    | ❌ Não             | Único Elemento |

---

### 💡 Dica Extra
- Use `map()` para transformar dados.
- Use `filter()` para selecionar dados.
- Use `reduce()` para combinar valores.
- Use `find()` para buscar um único item.

Agora que você conhece esses métodos, seu código ficará mais elegante, limpo e funcional! 🔥🎯

Pronto para a próxima parte? 🚀
