# 🏗️ Elementos Semânticos no HTML5  

## 🔎 Introdução  
Nesta aula, exploramos os **elementos semânticos do HTML5** e como eles tornam o código mais organizado e acessível.  

## 🏷️ Metatags e Estrutura do Documento  
Antes de mergulhar nas tags semânticas, revisamos algumas **metatags importantes**:  
- **`doctype`**: define o tipo do documento.  
- **`lang`**: especifica o idioma da página.  
- **`charset` (UTF-8)**: evita erros com caracteres especiais.  
- **`viewport`**: ajuda na responsividade.  
- **`meta description`**: fornece um resumo da página para mecanismos de busca.  

## 📌 Principais Tags Semânticas  
### 1️⃣ **Header e Nav** 🏠  
- **`<header>`**: define o cabeçalho da página.  
- **`<nav>`**: identifica a navegação (links para outras páginas ou seções).  

### 2️⃣ **Main e Sections** 📄  
- **`<main>`**: contém o conteúdo principal da página.  
- **`<section>`**: divide o conteúdo em seções organizadas.  

### 3️⃣ **Article e Hierarquia de Títulos** 📰  
- **`<article>`**: usado para conteúdos autocontidos, como postagens de blog e notícias.  
- **Hierarquia de títulos (`<h1>` a `<h6>`)**: segue uma estrutura lógica para organização da informação.  

## 🎯 Benefícios das Tags Semânticas  
✅ Melhor organização do código.  
✅ Facilita a acessibilidade para leitores de tela.  
✅ Ajuda mecanismos de busca a entender o conteúdo.  

🔹 **Bônus**: No **VS Code**, podemos gerar uma estrutura básica de HTML5 rapidamente usando o atalho **`html:5`**! 🚀  

Veja a aplicação dessas tags em uma estrutura básica de página HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tags Semânticas do HTML5</title>
</head>
<body>
    <header>
        <h1>Tags Semânticas</h1>
        <nav>
            <ul>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="inicio">
            <h2>Início</h2>
            <p>Bem-vindo à nossa página de exemplo!</p>
        </section>

        <section id="sobre">
            <h2>Sobre</h2>
            <article>
                <h3>História</h3>
                <p>Aqui contamos a história da nossa empresa.</p>
            </article>
            <article>
                <h3>Missão</h3>
                <p>Nossa missão é fornecer produtos de qualidade para nossos clientes.</p>
            </article>
        </section>

        <section id="contato">
            <h2>Contato</h2>
            <address>
                <p>Entre em contato conosco:</p>
                <p>Endereço: Rua das Flores, 123</p>
                <p>Email: contato@exemplo.com</p>
                <p>Telefone: (11) 1234-5678</p>
            </address>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 OneBitCode - Tags Semânticas</p>
    </footer>
</body>
</html>
```
