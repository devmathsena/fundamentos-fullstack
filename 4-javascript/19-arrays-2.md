# 📌 Arrays Bidimensionais em JavaScript

Os **arrays bidimensionais** (ou matrizes) em JavaScript são arrays que contêm outros arrays como elementos. Eles são úteis para representar tabelas, grids e dados estruturados. 📊

---

## 🔹 Criando um Array Bidimensional

Um array bidimensional pode ser criado aninhando arrays dentro de um array principal:

```js
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
```

Cada elemento da matriz pode ser acessado usando **dois índices**:

```js
console.log(matriz[0][1]); // Saída: 2
console.log(matriz[2][2]); // Saída: 9
```

---

## 🔹 Percorrendo um Array Bidimensional

Podemos percorrer uma matriz com **loops aninhados**:

```js
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
```

Ou usando **forEach**:

```js
matriz.forEach(linha => linha.forEach(elemento => console.log(elemento)));
```

---

## 🔹 Modificando Valores

Podemos alterar valores diretamente:

```js
matriz[1][1] = 99;
console.log(matriz);
```

---

## 🔹 Adicionando e Removendo Linhas/Colunas

Adicionar uma linha:

```js
matriz.push([10, 11, 12]);
```

Remover a última linha:

```js
matriz.pop();
```

Adicionar um elemento em uma linha específica:

```js
matriz[0].push(99);
```

Remover um elemento específico:

```js
matriz[0].splice(1, 1); // Remove o segundo elemento da primeira linha
```

---

## 🔹 Aplicações

✅ Representação de tabuleiros de jogos 🎲

✅ Estruturas de dados como planilhas 📝

✅ Imagens representadas por pixels 🖼️

✅ Algoritmos como busca em grafos 🔍

---

📌 Os arrays bidimensionais são uma ferramenta poderosa para organizar dados de forma estruturada. Pratique criando e manipulando matrizes para dominar esse conceito! 🚀
