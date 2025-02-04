# 🔗 Criando Âncoras Internas em uma Página

## 📌 Introdução
Além de criar links para outras páginas, a tag `<a>` também pode ser usada para criar **âncoras internas**, permitindo que o usuário navegue dentro da mesma página.

Para isso, precisamos de **duas coisas**:
1. Criar um **atributo `id`** no elemento de destino.
2. Usar o **símbolo `#`** seguido do `id` no atributo `href`.

---

## 🛠 Exemplo de Código

### 📍 Definindo as âncoras
Cada seção precisa de um `id` único para servir como ponto de referência:

```html
<h2 id="titulo-1">Título 1</h2>
<p>Conteúdo do título 1...</p>

<h2 id="titulo-2">Título 2</h2>
<p>Conteúdo do título 2...</p>
```

---

### 🔗 Criando os links internos
Agora, criamos links que apontam para essas seções:

```html
<a href="#titulo-1">Título 1</a> |
<a href="#titulo-2">Título 2</a>
```

Quando o usuário clicar em um desses links, a página rolará suavemente até a seção correspondente.

---

## 🌟 Exemplo Completo

```html
<html>
<head>
    <title>Trabalhando com Links</title>
</head>
<body>
    <h1>Trabalhando com Links</h1>

    <div>
        <p>Navegue entre as seções dessa página:</p>
        <a href="#titulo-1">Título 1</a> |
        <a href="#titulo-2">Título 2</a> |
        <a href="#titulo-3">Título 3</a> |
        <a href="#titulo-4">Título 4</a> |
        <a href="#titulo-5">Título 5</a>
    </div>

    <h2 id="titulo-1">Título 1</h2>
    <p>Conteúdo do título 1...</p>

    <h2 id="titulo-2">Título 2</h2>
    <p>Conteúdo do título 2...</p>

    <h2 id="titulo-3">Título 3</h2>
    <p>Conteúdo do título 3...</p>

    <h2 id="titulo-4">Título 4</h2>
    <p>Conteúdo do título 4...</p>

    <h2 id="titulo-5">Título 5</h2>
    <p>Conteúdo do título 5...</p>
</body>
</html>
```

---

## ✅ Conclusão

- **Âncoras internas** melhoram a usabilidade e permitem navegação rápida dentro da página.
- Devemos sempre usar um **id único** para cada seção de destino.
- O **href do link** deve conter `#` seguido do `id` da âncora.

🔹 **Dica**: Se quiser um efeito de rolagem suave ao clicar nos links, adicione este código CSS:

```css
html {
    scroll-behavior: smooth;
}
```

Isso torna a navegação ainda mais fluida! 🚀
