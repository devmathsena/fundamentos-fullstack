# 📌 Elementos de Formatação no HTML

No HTML, podemos destacar partes do texto utilizando **negrito** e *itálico*. Existem diferentes formas de fazer isso, e algumas são mais recomendadas que outras.

---

## 🏷️ Criando o Arquivo
Crie um novo arquivo chamado **`formatacao.html`** e adicione o seguinte conteúdo:

```html
<html>
<head>
	<title>Elementos de Formatação</title>
</head>

<body>
	<h1>Elementos de Formatação</h1>
	<p>
		No HTML podemos escrever utilizando negrito,
		itálico ou ambos para destacar partes de um texto.
	</p>
</body>
</html>
```

---

## 🔹 Tags `<b>` e `<i>` (Estilização)
As tags `<b>` (bold) e `<i>` (italic) são usadas para estilizar visualmente o texto em **negrito** e *itálico*.

```html
<html>
<head>
	<title>Elementos de Formatação</title>
</head>

<body>
	<h1>Elementos de Formatação</h1>
	<p>
		No HTML podemos escrever utilizando <b>negrito</b>,
		<i>itálico</i> ou <b><i>ambos</i></b> para destacar partes de um texto.
	</p>
</body>
</html>
```

> ⚠ **Atenção**: Essas tags são puramente **visuais** e não transmitem significado semântico. Seu uso não é recomendado, pois a estilização deve ser feita via **CSS**.

---

## 🔹 Tags `<strong>` e `<em>` (Semânticas)
As tags `<strong>` e `<em>` são alternativas semânticas para indicar **ênfase e destaque**, sem depender de estilos visuais específicos.

```html
<html>
<head>
	<title>Elementos de Formatação</title>
</head>

<body>
	<h1>Elementos de Formatação</h1>
	<p>
		No HTML podemos escrever utilizando <strong>negrito</strong>,
		<em>itálico</em> ou <strong><em>ambos</em></strong> para destacar
		partes de um texto.
	</p>
</body>
</html>
```

### 📝 Explicação:
- `<strong>`: Dá **ênfase forte** ao texto, indicando que ele é importante.
- `<em>`: Dá *ênfase leve*, indicando que o texto deve ser lido com destaque.

> 💡 **Dica**: Use sempre **`<strong>` e `<em>`** em vez de `<b>` e `<i>`, pois eles carregam **significado semântico**.

---

## 🎯 Conclusão
- As **tags `<b>` e `<i>`** são apenas para **estilização** (não recomendadas).
- As **tags `<strong>` e `<em>`** são **semânticas**, transmitindo **significado e ênfase**.
- A estilização deve ser feita via **CSS**, que será estudado no próximo módulo.

Agora você já sabe como formatar textos corretamente no HTML! 🚀
