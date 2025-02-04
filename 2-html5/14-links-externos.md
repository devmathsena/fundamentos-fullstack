# 🌍 Trabalhando com Links Externos

## 🔗 Criando um Link Externo
Os links externos são aqueles que levam para outros sites fora do seu domínio. Para isso, devemos especificar o **protocolo** (`http://` ou `https://`), caso contrário, o navegador interpretará a URL como um **caminho relativo**.

### 🛠 Exemplo de Código
```html
<a href="https://google.com">Acessar o Google</a>
```
Esse código cria um link para o **Google**. O navegador entende que a URL é externa porque começa com `https://`.

---

## 📌 Abrindo Links em Nova Guia
Uma boa prática ao criar links externos é fazer com que eles abram em uma nova guia, evitando que o usuário **saia do seu site**. Isso pode ser feito com o atributo `target="_blank"`:

```html
<a href="https://google.com" target="_blank">Acessar o Google</a>
```

🔹 **Dica**: Para maior segurança, sempre adicione `rel="noopener noreferrer"` ao usar `target="_blank"`, evitando possíveis vulnerabilidades.

```html
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Acessar o Google</a>
```

---

## 🌟 Exemplo Completo

```html
<html>
<head>
    <title>Trabalhando com Links</title>
</head>
<body>
    <h1>Trabalhando com Links</h1>

    <p>
        Navegue entre os arquivos das aulas:
        <a href="/">Primeira página</a>
        <a href="titulos.html">Aula: títulos e parágrafos</a>
        <a href="formatacao.html">Aula: elementos de formatação</a>
        <a href="imagens.html">Aula: imagens</a>
    </p>

    <p>Acesse o <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>.</p>
</body>
</html>
```

---

## ✅ Conclusão

- **Links externos** devem sempre incluir `https://` para serem interpretados corretamente.
- O uso de `target="_blank"` permite abrir links em uma nova guia.
- **Melhor prática**: adicionar `rel="noopener noreferrer"` para evitar vulnerabilidades de segurança.

💡 Agora, você pode aplicar essas técnicas para melhorar a navegação do seu site! 🚀
