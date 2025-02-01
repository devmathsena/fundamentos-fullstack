# 📌 Comentários no HTML

Os **comentários** são trechos do código que **não são interpretados pelo navegador**. Eles servem exclusivamente para adicionar anotações, explicações ou desativar partes do código temporariamente.  

---

## 🔹 Como criar comentários em HTML?

Para adicionar um comentário no HTML, utilizamos:

```html
<!-- Este é um comentário -->
```

Qualquer texto dentro dessa estrutura será **ignorado pelo navegador** e **não aparecerá na página**.

---

## 🏷️ Exemplo de uso básico

```html
<html>
<head>
    <title>Comentários no HTML</title>
</head>
<body>
	<!-- Esta é uma seção de cabeçalho -->
	<h1>Exemplo de Uso de Comentários</h1>
	<p>Bem-vindo ao nosso site!</p>

	<!-- Esta é uma seção de conteúdo principal -->
	<h2>Comentários em HTML</h2>
	<p>Comentários em HTML são trechos de texto que não são exibidos no navegador.</p>

	<!-- Exemplo de comentário dentro de um parágrafo -->
	<p>Normalmente, os comentários são usados para fazer anotações ou explicar o código.</p>
</body>
</html>
```

### 📝 Explicação:
- O **comentário antes da `<h1>`** explica que a seção é o cabeçalho.
- O **comentário antes da `<h2>`** indica que começa a seção sobre comentários.
- O **comentário dentro do `<p>`** explica o seu propósito.

---

## 🔹 Comentários de múltiplas linhas

Se precisar adicionar um comentário maior, você pode escrever em **múltiplas linhas**:

```html
<!--
	Este é um comentário de múltiplas linhas.
	Ele pode ser usado para documentar partes do código mais extensas.
-->
```

---

## 🔹 Usando comentários para ocultar código

Os comentários também podem ser usados para **desativar temporariamente** partes do código sem precisar apagá-las:

```html
<!--
	<p>Este parágrafo está comentado e não será exibido no navegador.</p>
	<p>Comentários são úteis para depuração e desenvolvimento.</p>
-->

<p>Descomente o parágrafo acima para vê-lo novamente no navegador.</p>
```

> 💡 **Dica:** Isso é útil para testar diferentes partes do código sem removê-las permanentemente.

---

## 🎯 Conclusão
- **Comentários são ignorados pelo navegador** e servem apenas para anotações no código.
- Podem ser **de linha única** (`<!-- comentário -->`) ou **de múltiplas linhas**.
- São úteis para **documentação, organização e depuração** do código.

Agora que você já sabe como usar comentários, aproveite para manter seu código bem organizado! 🚀
