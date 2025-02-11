# 🎨 Seletores Avançados no CSS

Os seletores avançados do CSS permitem estilizar elementos de maneira mais específica e eficiente.

Aqui estão alguns dos mais importantes:

## 1. Seletores de Agrupamento 📌
Permitem aplicar o mesmo estilo a vários elementos ao mesmo tempo.
```css
h1, h2, p {
  color: blue;
}
```

## 2. Seletores Descendentes 👇
Selecionam elementos dentro de outros elementos.
```css
div p {
  color: red; /* Todos os <p> dentro de <div> */
}
```

## 3. Seletores Filhos (>) 👶
Selecionam apenas os elementos que são filhos diretos.
```css
div > p {
  color: green; /* Apenas <p> filhos diretos de <div> */
}
```

## 4. Seletores Irmãos (+ e ~) 🤝
- **Adjacente (+):** Seleciona o próximo irmão imediato.
- **Geral (~):** Seleciona todos os irmãos seguintes.
```css
h1 + p {
  color: purple; /* Apenas o primeiro <p> depois de <h1> */
}

h1 ~ p {
  color: orange; /* Todos os <p> depois de <h1> */
}
```

## 5. Seletores de Atributo 🔍
Permitem estilizar elementos com base em atributos.
```css
input[type="text"] {
  border: 2px solid blue;
}

a[href^="https"] { /* Começa com */
  color: green;
}

a[href$=".pdf"] { /* Termina com */
  color: red;
}

a[href*="google"] { /* Contém */
  font-weight: bold;
}
```

## 6. Pseudo-classes 🌀
São usadas para estilizar elementos em estados específicos.
```css
a:hover { color: orange; } /* Quando passa o mouse */
input:focus { border-color: blue; } /* Quando selecionado */
p:first-child { font-weight: bold; } /* Primeiro filho do pai */
p:last-child { font-style: italic; } /* Último filho do pai */
p:nth-child(2) { color: red; } /* Segundo filho */
p:nth-child(odd) { background: gray; } /* Ímpares */
p:nth-child(even) { background: lightgray; } /* Pares */
```

## 7. Pseudo-elementos 🎭
Criam elementos estilizados sem precisar modificar o HTML.
```css
p::before {
  content: "🔥 ";
}

p::after {
  content: " 🚀";
}
```

## 8. Combinando Seletores 💡
Podemos combinar seletores para aumentar a precisão.
```css
div.alerta p.erro {
  color: red; /* Apenas <p class="erro"> dentro de <div class="alerta"> */
}
```

## Dicas Extras 🎯
✅ Use seletores avançados para escrever menos código e manter a organização.  
✅ Evite seletores muito específicos para facilitar a manutenção.  
✅ Prefira classes (`.classe`) a seletores de ID (`#id`) para maior flexibilidade.  

Agora é só praticar e testar! 🚀
