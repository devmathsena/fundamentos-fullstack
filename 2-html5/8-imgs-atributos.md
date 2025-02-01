# 📚 Lista de Leitura com Imagens em HTML

Podemos estruturar listas de leitura em HTML utilizando **títulos (`<h1>` a `<h3>`)** e **parágrafos (`<p>`)** para as sinopses. Além disso, é possível adicionar **imagens** para ilustrar cada livro, seja localmente ou através de URLs.

---

## 📌 Criando um Arquivo HTML para a Lista de Leitura

Crie um arquivo chamado `index.html` dentro da pasta `imagens` e adicione o seguinte código:

```html
<html>
<head>
    <title>Lista de Leitura</title>
</head>
<body>
    <h1>Lista de Leitura</h1>

    <h2>Saga Senhor dos Anéis (J.R.R. Tolkien)</h2>
    <h3>O Senhor dos Anéis: A Sociedade do Anel</h3>
    <p>Sinopse: A jornada épica começa com Frodo Bolseiro, um hobbit que deve destruir um poderoso anel que pode destruir a Terra Média se cair nas mãos do mal.</p>
    
    <h3>O Senhor dos Anéis: As Duas Torres</h3>
    <p>Sinopse: A Sociedade do Anel é dividida após uma grande batalha. Enquanto Frodo e seu fiel companheiro Sam continuam a jornada para Mordor, os outros membros enfrentam desafios para proteger a Terra Média.</p>
</body>
</html>
```

Isso cria uma estrutura básica de uma página HTML com títulos e parágrafos descrevendo os livros.

---

## 🖼️ Adicionando Imagens no HTML

Podemos incluir imagens de **duas formas**:
1. **Localmente**: Salvando as imagens na mesma pasta do HTML e referenciando o caminho do arquivo.
2. **Por URL**: Utilizando imagens da internet.

A tag usada para isso é `<img>`, com o atributo `src` definindo o caminho da imagem:

```html
<img src="caminho/da/imagem.jpg" alt="Descrição da imagem">
```

### 📖 Exemplo com Imagens Locais

```html
<h3>O Senhor dos Anéis: A Sociedade do Anel</h3>
<img src="capas/a-sociedade-do-anel.webp" alt="Capa do livro A Sociedade do Anel" height="100">
<p>Sinopse: Frodo Bolseiro embarca em uma jornada para destruir o Anel e salvar a Terra Média.</p>
```

Aqui, a imagem **"a-sociedade-do-anel.webp"** está dentro da pasta `capas`, que está na mesma pasta do arquivo `index.html`.

---

### 🌍 Exemplo com Imagens Online

Podemos carregar imagens diretamente da internet informando sua URL no atributo `src`:

```html
<h3>O Herdeiro do Império</h3>
<img src="https://4.bp.blogspot.com/_hzu5aCzoubQ/S4agh6N48TI/AAAAAAAAHL0/NYEHkbIvOA0/w276-h400/heir+to+the+empire+cover.jpg" alt="Capa do livro O Herdeiro do Império">
<p>Sinopse: Cinco anos após a Batalha de Endor, a Aliança Rebelde enfrenta uma nova ameaça: o Grande Almirante Thrawn.</p>
```

---

## 🎯 Conclusão

- **O HTML permite criar listas organizadas de livros** usando `<h1>`, `<h2>` e `<p>`.
- **Imagens podem ser adicionadas** localmente ou via URL com `<img>`.
- **O atributo `alt` é essencial** para acessibilidade e SEO.
- **É possível ajustar o tamanho** com os atributos `height` e `width`.

Agora, experimente adicionar imagens aos demais livros da lista! 🚀
