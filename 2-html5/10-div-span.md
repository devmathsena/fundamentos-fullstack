# 📌 Organizando a página com `<div>` e `<span>`

No HTML, temos dois elementos genéricos essenciais para a estruturação da página: o `<div>` e o`<span>`. Embora semelhantes, a principal diferença entre eles é que o `<div>` organiza o conteúdo em blocos 🏗️, enquanto o `<span>` mantém o conteúdo em linha 🔠.

## 📝 Criando um exemplo prático
Para visualizar essa diferença, crie um arquivo chamado "organizacao.html" e utilize o elemento `<div>` para agrupar um conteúdo em bloco:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Organização com div e span</title>
</head>
<body>
    <h1>Organização de código com div e span</h1>
    <p>
        Em um texto, o elemento div irá organizar o conteúdo em
        <div>um bloco, ou seja, com uma quebra de linha.</div>
        Uma div ocupa todo o espaço horizontal disponível na tela.
    </p>
</body>
</html>
```

## ✨ Adicionando o elemento `<span>`
Agora, vamos incluir o elemento `<span>` para demonstrar como ele organiza o conteúdo inline:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Organização com div e span</title>
</head>
<body>
    <h1>Organização de código com div e span</h1>
    <p>
        Em um texto, o elemento div irá organizar o conteúdo em
        <div>um bloco, ou seja, com uma quebra de linha.</div>
        Já o elemento span organiza o conteúdo inline,
        <span>sem quebra de linha</span> e ocupando apenas
        <span>a largura do seu conteúdo interno</span>.
    </p>
</body>
</html>
```

## 🎯 Conclusão
- **`<div>`**: Organiza o conteúdo em bloco, ocupando toda a largura disponível 📏.
- **`<span>`**: Mantém o conteúdo inline, sem quebra de linha e ocupando apenas o espaço necessário ✍️.

Esses elementos são fundamentais para estruturar páginas da web de maneira organizada e semântica! 🚀

