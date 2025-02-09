# 🎨 Background e Border no CSS

## 🖼️ Background (Fundo)
O CSS permite personalizar o fundo dos elementos com diversas propriedades.

### 🔹 Propriedades do Background

- **`background-color`** 🎨 → Define a cor de fundo.
  ```css
  body {
    background-color: lightblue;
  }
  ```

- **`background-image`** 🏞️ → Define uma imagem de fundo.
  ```css
  div {
    background-image: url('imagem.jpg');
  }
  ```

- **`background-size`** 📏 → Define o tamanho da imagem de fundo.
  ```css
  div {
    background-size: cover; /* Pode ser auto, contain, etc. */
  }
  ```

- **`background-repeat`** 🔁 → Controla a repetição da imagem.
  ```css
  div {
    background-repeat: no-repeat;
  }
  ```

- **`background-position`** 📌 → Define a posição da imagem de fundo.
  ```css
  div {
    background-position: center top;
  }
  ```

- **`background-attachment`** 📜 → Define se o fundo rola com a página ou não.
  ```css
  div {
    background-attachment: fixed;
  }
  ```

- **`background`** 🏗️ → Atalho para definir várias propriedades ao mesmo tempo.
  ```css
  div {
    background: url('imagem.jpg') no-repeat center/cover;
  }
  ```

---

## 📏 Border (Borda)
O CSS permite estilizar as bordas dos elementos.

### 🔹 Propriedades da Borda

- **`border-width`** 📐 → Define a espessura da borda.
  ```css
  div {
    border-width: 2px;
  }
  ```

- **`border-style`** ✏️ → Define o estilo da borda.
  ```css
  div {
    border-style: solid; /* dashed, dotted, double, etc. */
  }
  ```

- **`border-color`** 🎨 → Define a cor da borda.
  ```css
  div {
    border-color: red;
  }
  ```

- **`border`** 🚀 → Atalho para definir largura, estilo e cor da borda.
  ```css
  div {
    border: 2px solid black;
  }
  ```

- **`border-radius`** 🏀 → Define bordas arredondadas.
  ```css
  div {
    border-radius: 10px;
  }
  ```

- **`border-top`, `border-right`, `border-bottom`, `border-left`** 🔼 → Define bordas específicas.
  ```css
  div {
    border-top: 2px dashed blue;
  }
  ```

📌 **Dica:** Use `border-radius: 50%;` para criar um círculo perfeito! 🎯

---

Agora você conhece os principais conceitos de **background** e **border** no CSS! 🚀🎨
