# 📌 Resumo: Introdução a Variáveis em JavaScript

## Variáveis: O que são?
Variáveis são utilizadas para armazenar dados e reutilizá-los posteriormente no código. Elas ajudam a tornar o código mais organizado e dinâmico.

## 🏗 Criando Variáveis em JavaScript
Existem três formas principais de declarar variáveis:

- **`var`**: Forma mais antiga, permite reatribuir valores, mas tem limitações em escopo e segurança.
- **`let`**: Forma moderna, recomendada para variáveis que podem mudar.
- **`const`**: Define uma variável constante, ou seja, que não pode ser alterada após a atribuição.

### 📌 Exemplo de Uso:
```javascript
let nome = "Lucas"; // Declaração com let
const anoNascimento = 1995; // Constante, não pode ser alterada
```

## 🚀 Reatribuindo Valores
Caso a variável tenha sido declarada com `var` ou `let`, é possível mudar seu valor:
```javascript
let idade = 26;
idade = 27; // Agora idade vale 27
```
Por outro lado, se tentarmos modificar uma constante, ocorrerá um erro:
```javascript
const PI = 3.14;
PI = 3.1415; // ❌ Erro: não é permitido modificar constantes
```

## 📢 Nomeação de Variáveis
- Nomes devem ser descritivos e claros.
- Evite usar nomes genéricos como `a`, `b` ou `x`.
- JavaScript é *case-sensitive* (`nome` ≠ `Nome`).

### 📝 Convenções de Escrita:
1. **Camel Case** (Recomendada para JS): `nomeUsuario`
2. **Snake Case**: `nome_usuario`
3. **Pascal Case** (Usada para classes): `NomeUsuario`

## ⚠️ Cuidados ao Declarar Variáveis
- Evite reatribuir valores a `const`.
- Sempre utilize `let` ao invés de `var` para evitar problemas de escopo.
- Não é possível declarar duas variáveis com o mesmo nome no mesmo escopo:
  ```javascript
  let nome = "Lucas";
  let nome = "João"; // ❌ Erro: identificador já declarado
  ```
