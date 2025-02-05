# 📝 Formulários no HTML

## 📌 Introdução
Os **formulários** no HTML permitem a coleta de informações dos usuários, como **nome, e-mail, senha, comentários**, entre outros. Junto com os **links**, eles são fundamentais para a navegação e a comunicação na web.

## 📌 Como os formulários funcionam?
Os formulários são responsáveis por enviar e receber dados entre o usuário e o servidor. Diferente dos links, que apenas redirecionam o usuário para outra página, os formulários permitem o envio de informações para processamento.

🔹 **Exemplo:** Quando você faz uma pesquisa no Google, o formulário captura o termo digitado e o envia para o servidor, que retorna os resultados correspondentes.

## 🏗 Estrutura de um formulário
Um formulário HTML é construído com a tag `<form>` e pode conter diversos elementos, como **campos de entrada**, **botões de envio** e **rótulos**.

```html
<form action="https://www.google.com/search" method="GET">
    <label for="pesquisa">Pesquise no Google:</label>
    <input type="text" id="pesquisa" name="q">
    <button type="submit">Pesquisar</button>
</form>
```

### 🔍 Explicação do código:
- **`<form>`**: Define o formulário.
- **`action`**: Especifica o destino dos dados enviados.
- **`method`**: Define o método de envio (*GET* ou *POST*).
- **`<label>`**: Associa um texto descritivo ao campo.
- **`<input>`**: Campo de entrada para o usuário digitar.
- **`name="q"`**: Parâmetro reconhecido pelo Google para pesquisas.
- **`<button type="submit">`**: Botão que envia os dados do formulário.

## 📡 Métodos de envio
Os formulários HTML utilizam dois principais métodos de envio de dados:

1️⃣ **GET** → Utilizado para **obter** dados. Os parâmetros são visíveis na URL.

2️⃣ **POST** → Utilizado para **enviar** dados. Os parâmetros não ficam visíveis na URL.

🔹 **Exemplo de GET:**
```
https://www.google.com/search?q=html
```
🔹 **Exemplo de POST:**
Os dados são enviados no corpo da requisição, sem aparecer na URL.

## 🎨 Melhorando a acessibilidade com `label`
Podemos associar um **label** ao campo de entrada usando o atributo `for`:

```html
<label for="email">Digite seu e-mail:</label>
<input type="email" id="email" name="email">
```
> ℹ️ **Obs.:** O atributo `for` deve ser preenchido com o `id` do input.

Dessa forma, ao clicar no texto "Digite seu e-mail", o campo de entrada é ativado automaticamente!

## 📌 Conclusão
Os formulários são uma parte essencial do HTML, permitindo que os usuários interajam e enviem dados. Eles são amplamente usados para **pesquisas, cadastros, logins, comentários** e muito mais!

Nas próximas aulas, exploraremos com mais detalhes os diferentes tipos de campos e como personalizá-los. 🚀
