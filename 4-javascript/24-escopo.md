# 🏆 Aula de Escopo no JavaScript

## 🔥 O que é escopo?
Escopo é o **contexto** onde uma variável foi declarada, determinando onde ela pode ser acessada. Existem dois principais tipos:

- **Escopo externo** 🌍 → Declaração fora de funções ou blocos.
- **Escopo interno** 🔒 → Declaração dentro de funções ou blocos.

## 🎮 Exemplo Prático

```js
let pokemon = "Charmander"; // Escopo externo

function evoluir() {
    pokemon = "Charmeleon"; // Modifica a variável externa
}

console.log(pokemon); // Charmander

evoluir();
console.log(pokemon); // Charmeleon
```

📌 **Conclusão:** Uma variável declarada no **escopo externo** pode ser acessada dentro de funções.

## 🚫 O contrário não funciona!

```js
function criarAnimal() {
    let animal = "Gato"; // Escopo interno
}

criarAnimal();
console.log(animal); // ❌ Erro: animal is not defined
```

📌 **Conclusão:** Variáveis declaradas dentro de uma função **não podem** ser acessadas fora dela.

## ⚠️ Diferença entre `var`, `let` e `const`

O uso do `var` pode gerar confusão, pois ele **ignora** os blocos como `if` e `else`, tornando a variável acessível fora do escopo previsto.

### 🚨 Problema com `var`

```js
function avaliarNota(nota) {
    if (nota > 60) {
        var aprovado = true;
        let situacao = "Aprovado";
    }
    console.log(aprovado); // ✅ Funciona (mas pode gerar problemas)
    console.log(situacao); // ❌ Erro: situacao is not defined
}

avaliarNota(80);
```

📌 **Conclusão:** Variáveis declaradas com `var` dentro de blocos ainda podem ser acessadas fora deles, enquanto `let` e `const` respeitam os blocos.

## 🎭 Hoisting: Cuidado com a ordem de execução!

```js
console.log(nome); // ❓ undefined (hoisting com var)
console.log(sobrenome); // ❌ Erro

var nome = "Isaac";
let sobrenome = "Newton";

console.log(nome); // ✅ Isaac
console.log(sobrenome); // ✅ Newton
```

📌 **Conclusão:**
- `var` sofre **hoisting** (é içado para o topo, mas com valor `undefined`).
- `let` e `const` **não são acessíveis antes da declaração**.

---

## 🎯 Resumo Final

✅ Escopo define onde a variável pode ser usada.

✅ Variáveis de escopo externo podem ser acessadas no interno, mas não o contrário.

✅ Evite `var`, prefira `let` e `const` para evitar problemas.

✅ Hoisting pode impactar a ordem de execução do código.

🚀 **Agora você domina o escopo no JavaScript!** 🎉

