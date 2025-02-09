# 🖌️ Seu Primeiro Código CSS

## 1️⃣ Criando um Arquivo HTML 📄
Para começar, crie um arquivo HTML básico:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seu Primeiro Código CSS</title>
</head>
<body>
    <h1>Seu Primeiro Código CSS</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
</body>
</html>
```

## 2️⃣ Adicionando CSS Inline 🎨
Agora, aplicamos um estilo diretamente no `<body>` para mudar a cor de fundo:

```html
<body style="background-color: black;">
```

## 3️⃣ Utilizando a Tag `<style>` 🎭
Para organizar melhor o código, adicionamos estilos dentro da tag `<style>` no `<head>`:

```html
<style>
    h1 {
        color: white;
    }
</style>
```

## 4️⃣ Criando um Arquivo CSS Externo 📂
A melhor prática é separar os estilos em um arquivo externo. No HTML, incluímos:

```html
<link rel="stylesheet" href="style.css">
```

E no arquivo `style.css`, adicionamos:

```css
p {
    color: white;
    font-size: x-large;
}
```

## 🎯 Conclusão
Essas são as formas mais comuns de adicionar CSS ao seu HTML. A abordagem externa é a mais recomendada para um código mais limpo e reutilizável! 🚀
