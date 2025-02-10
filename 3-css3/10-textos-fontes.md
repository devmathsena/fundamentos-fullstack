# Fontes e Estilização de Texto no CSS 🖋️✨  

### 📌 Tipos de Fontes  
- As fontes no CSS podem ser categorizadas em diferentes famílias, como **serif**, **sans-serif**, **monospace**, **cursive** e **fantasy**.  
- Cada família tem um propósito específico. Exemplo: fontes **sans-serif** são mais legíveis em telas, enquanto **serif** são comuns em impressões.  

### 🎨 Definindo Fontes Personalizadas  
- Podemos definir uma fonte específica, mas se o usuário não a tiver instalada, o navegador usará uma fonte alternativa.  
- Exemplo:  
  ```css
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  ```
  Isso garante que, caso a primeira fonte não esteja disponível, outra semelhante será usada.  

### 🔤 Propriedades de Fonte Importantes  
- **`font-family`**: Define a família da fonte.  
- **`font-weight`**: Define o peso da fonte (de **100** a **900**, indo de **fina** até **negrito extremo**).  
- **`font-size`**: Define o tamanho da fonte (padrão: **16px** em navegadores).  
- **`letter-spacing`**: Controla o espaçamento entre letras.  
- **`text-transform`**: Permite transformar o texto em **maiúsculas**, **minúsculas** ou **capitalizado**.  
- **`line-height`**: Define a altura da linha para melhorar a leitura.  

### 🏗️ Boas Práticas no Uso de Fontes  
- Para garantir compatibilidade, use sempre fontes alternativas (fallback).  
- Caso queira fontes personalizadas, pode-se incluir fontes externas usando @font-face ou fontes do Google Fonts.  
- Algumas fontes exigem **licença paga**, então sempre verifique os direitos de uso.  

### ✨ Negrito e Itálico no CSS  
- No CSS, o negrito e o itálico são aplicados com **classes personalizadas**:  
  ```css
  .bold {
    font-weight: bold;
  }
  .italic {
    font-style: italic;
  }
  ```
  Isso evita o uso de `<b>` e `<i>` no HTML, que são menos semânticos.  

### 🖍️ Outras Propriedades Úteis  
- **`text-shadow`**: Adiciona sombra ao texto.  
- **`text-indent`**: Controla a indentação do parágrafo.  
- **`text-align`**: Define o alinhamento do texto (esquerda, direita, centralizado, justificado).  
- **`overflow`** e **`text-wrap`**: Definem como o texto se comporta ao ultrapassar limites do contêiner.  
- **`word-spacing`** e **`white-space`**: Ajustam o espaçamento entre palavras e como o texto é exibido.  

🔎 **Dica**: Explore mais propriedades no **VS Code**, digitando `font-` ou `text-` para ver sugestões automáticas! 🚀  
