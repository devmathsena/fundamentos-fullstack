# 📌 Tipos de Dados em JavaScript  

Em JavaScript, os tipos de dados são classificados em **primitivos** e **estruturais**. Cada um tem suas particularidades e usos específicos.  

## 🔹 Tipos Primitivos  
São imutáveis e armazenam valores diretos na memória.  

✅ **String** – Representa textos.  
```js
let nome = "Velozes & Furiosos";
```

✅ **Number** – Representa números inteiros e decimais.  
```js
let velocidade = 250; // Inteiro
let tempo = 2.5; // Decimal (float)
```

✅ **Boolean** – Representa valores lógicos: `true` ou `false`.  
```js
let turboAtivo = true;
```

✅ **Undefined** – Variável declarada, mas sem valor atribuído.  
```js
let piloto;
console.log(piloto); // undefined
```

✅ **Null** – Representa ausência de valor intencionalmente.  
```js
let combustivel = null;
```

✅ **BigInt** – Usado para representar números muito grandes.  
```js
let numeroGrande = 9007199254740991n;
```

✅ **Symbol** – Cria valores únicos, útil para identificadores.  
```js
const id = Symbol("id_unico");
```

## 🔹 Tipos Estruturais  
São usados para armazenar coleções de dados ou funcionalidades.  

✅ **Object** – Coleção de pares chave-valor.  
```js
let carro = {
  modelo: "Supra",
  ano: 1995,
  velocidadeMaxima: 280
};
```

✅ **Array** – Lista ordenada de valores.  
```js
let personagens = ["Dom", "Brian", "Letty"];
```

✅ **Function** – Bloco de código reutilizável.  
```js
function acelerar() {
  console.log("Acelerando!");
}
```

## 🎯 Dica Extra!  
Use `typeof` para verificar o tipo de dado:  
```js
console.log(typeof 42); // "number"
console.log(typeof "Nitro"); // "string"
console.log(typeof {}); // "object"
```

Esses são os principais tipos de dados do JavaScript! 🚀🔥  
