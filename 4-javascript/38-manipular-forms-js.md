# Trabalhando com Formulários no JavaScript 📝💻

## O que você vai aprender? 🤔
Nessa aula, você aprenderá a **trabalhar com formulários no JavaScript**, manipulando dinamicamente as informações sem acionar o comportamento padrão do formulário.

## O Formulário 👨‍💻
Você começa com um formulário simples contendo vários tipos de campos:
- **Inputs** para nome, endereço, etc. 🏠
- **Select** para escolher o tipo de pão 🍞
- **Checkboxes** para selecionar ingredientes 🥒
- **Textarea** para observações 📝

### Comportamento padrão 🚫
Quando você clica no botão de **submit**, o formulário, por padrão, envia as informações para a URL definida na tag `action`. Mas, sem definir a `action`, ele tenta enviar para a própria página, o que causa um **refresh** da página, perdendo todo o conteúdo manipulado via JavaScript.

## Manipulando o Formulário com JavaScript 🔧
Agora, vamos aprender a **capturar e manipular** esses dados de maneira dinâmica sem recarregar a página.

1. **Selecionando o Formulário**: 
   Criamos uma variável `form` e usamos `document.getElementById` para pegar o formulário pelo `id="Order Form"`. 📝

2. **Evitar o Refresh da Página** 🚫🔄:
   Usamos `addEventListener` para escutar o evento de **submit** e impedir o comportamento padrão que recarrega a página.

3. **Capturando os Dados** 🛍️:
   - Para cada campo (nome, endereço, tipo de pão, etc.), usamos o **QuerySelector** para selecionar os elementos e acessar suas propriedades, como o `value`.

### Exemplo de Seletores 🔍
- **Input de nome**: 
  ```js
  let name = document.querySelector('input[name="name"]').value;
  ```
- **Select de tipo de pão**: 
  ```js
  let breadType = document.querySelector('select[name="breadType"]').value;
  ```
- **Radio Buttons (sanduíche principal)**: 
  ```js
  let main = document.querySelector('input[name="main"]:checked').value;
  ```
- **Checkbox (ingredientes)**: 
  Usamos `querySelectorAll` para pegar todos os checkboxes marcados:
  ```js
  let salad = '';
  document.querySelectorAll('input[name="salad"]:checked').forEach(item => {
    salad += item.value + ' ';
  });
  ```

4. **Finalizando e Testando** ✅
   Após capturar os valores de todos os campos, exibimos no **console** os dados preenchidos:
   ```js
   console.log(name, address, breadType, main, observations, salad);
   ```

### Testando no Navegador 🌍
- Ao preencher o formulário e clicar no botão **Fechar Pedido**, os dados serão **logados no console**. Porém, se você não evitar o comportamento padrão do formulário, a página será recarregada e os dados serão perdidos.

## Resumo 🧠
- **Manipulação dinâmica** de formulários com JavaScript é uma habilidade essencial para evitar o comportamento de **refresh** da página.
- Usar **`addEventListener`** para capturar o evento de **submit** e **`querySelector`** para acessar os valores dos campos.
- Evitar a **atualização da página** ao interceptar o comportamento padrão do formulário.

Agora você está pronto para começar a manipular seus formulários de maneira eficiente e dinâmica! 🚀
