# 🔗 Trabalhando com Links em HTML

Os links são fundamentais para a navegação na web, permitindo conectar páginas dentro de um site ou até mesmo redirecionar para páginas externas. No HTML, utilizamos a tag `<a>` para criar links de navegação.

---

## 📌 Criando um Arquivo HTML

Crie um novo arquivo chamado **"links.html"** e adicione a estrutura básica:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Trabalhando com Links</title>
</head>
<body>
    <h1>Trabalhando com Links</h1>
</body>
</html>
```

Isso cria uma estrutura inicial para adicionarmos os links no próximo passo.

---

## 🔗 Criando Links com a Tag `<a>`

Para criar links em HTML, utilizamos a **tag `<a>` (âncora)** e o atributo `href` para definir o destino do link.

```html
<a href="https://www.exemplo.com">Clique aqui para visitar o site</a>
```

Aqui, o usuário será redirecionado para o endereço "https://www.exemplo.com" ao clicar no link.

---

## 📁 Criando um Menu de Navegação

Podemos criar um menu de navegação para acessar outras páginas dentro do site:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Trabalhando com Links</title>
</head>
<body>
    <h1>Trabalhando com Links</h1>
    <div>
        <p>Navegue entre os arquivos das aulas:</p>
        <a href="../index.html">🏠 Primeira Página</a> |
        <a href="../formatacao/index.html">📝 Aula: Elementos de Formatação</a> |
        <a href="../titulos">🔤 Aula: Títulos e Parágrafos</a> |
        <a href="../imagens/index.html">🖼️ Aula: Imagens</a> |
        <a href="../grecia">🏛️ Artigo: Grécia Antiga</a>
    </div>
</body>
</html>
```

Aqui, cada link direciona para um arquivo diferente dentro do projeto.

---

## 🎯 Conclusão

- **A tag `<a>` cria links** que podem levar a outras páginas do site ou endereços externos.
- **O atributo `href`** define o destino do link.
- **Links podem ser organizados em menus**, facilitando a navegação do usuário.
- **Podemos usar emojis** para tornar a experiência mais intuitiva e agradável! 😃

Agora, experimente adicionar novos links ao seu menu! 🚀

