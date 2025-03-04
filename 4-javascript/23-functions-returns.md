# ✨ Entendendo o Retorno de Funções no JavaScript

## ✅ O que é o Retorno de uma Função?

No JavaScript, o **retorno** de uma função é a **saída** que ela devolve após sua execução. Uma função pode:
- Ter uma **entrada** (parâmetros)
- Executar um **procedimento**
- **Devolver um resultado** (ou não) com `return`

Se não houver `return`, a função retorna `undefined` por padrão.

---

## 🎓 Exemplo: Calculando Média Aritmética

```js
function calcularMedia(a, b) {
    let media = (a + b) / 2;
    return media;
}

let resultado = calcularMedia(7, 2);
console.log(resultado); // 4.5
```

### ✨ O que acontece?
1. A função recebe dois valores `a` e `b`.
2. Calcula a média e **retorna** o valor.
3. Armazenamos o retorno na variável `resultado`.
4. Exibimos o valor no console.

Sem `return`, `resultado` seria `undefined`! ❌

---

## 🛠 Criando Objetos com Retorno de Função

Funções podem retornar **objetos** também!

```js
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        estoque: 10
    };
}

let notebook = criarProduto("Notebook Intel i3", 2500);
console.log(notebook);
```

### ✨ O que acontece?
- Criamos um **objeto** dentro da função e o retornamos.
- O `console.log()` exibe o objeto criado!

Podemos chamar a função **diretamente** no `console.log()`:

```js
console.log(criarProduto("Mouse Gamer", 150));
```

---

## 🎭 Retornando Expressões Diretas

Nem sempre precisamos de variáveis intermediárias:

```js
function areaRetangular(base, altura) {
    return base * altura;
}

console.log(areaRetangular(3, 5)); // 15
```

---

## 🎨 Funções Chamando Outras Funções

Podemos **encadear** chamadas de funções!

```js
function areaQuadrada(lado) {
    return areaRetangular(lado, lado);
}

console.log(areaQuadrada(9)); // 81
```

### ✨ O que acontece?
1. `areaQuadrada(9)` chama `areaRetangular(9, 9)`.
2. `areaRetangular(9, 9)` calcula `9 * 9` e retorna `81`.
3. O `console.log()` exibe `81` no console!

---

## 🌟 Conclusão

- O `return` é essencial para **reaproveitar valores**.
- Podemos retornar **qualquer tipo de dado** (números, strings, objetos, expressões, funções).
- Funções podem chamar outras funções, tornando o código **modular e reutilizável**!

Agora é sua vez de praticar! ✨🚀

