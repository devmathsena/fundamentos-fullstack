# 📌 Como incluir JavaScript no HTML  

## 📝 Introdução  
Nesta etapa, aprendemos a incluir JavaScript diretamente no HTML para tornar nossas páginas mais dinâmicas.  

## 📂 Criando o HTML  
1. Criamos um arquivo **index.html** com uma estrutura básica.  
2. Adicionamos um título à página.  
3. Abrimos o arquivo no **Live Server** para visualização em tempo real.  

## 🔗 Inserindo JavaScript no HTML  
- Podemos usar a tag `<script>` para escrever JavaScript diretamente no HTML:  
  ```html
  <script>
      let name = "Isaac";
      let x = 5;
      console.log(name);
      console.log(x);
  </script>
  ```
- O código será executado e os valores aparecerão no **console do navegador**.  

## 📁 Separando JavaScript do HTML  
- Criamos um arquivo separado **index.js** e movemos o código para ele.  
- No HTML, referenciamos esse arquivo usando:  
  ```html
  <script src="index.js"></script>
  ```
- Isso melhora a organização do código! 🚀  

## 🏗️ Ordem de Execução dos Scripts  
- A ordem dos scripts no HTML **importa**! O navegador lê de cima para baixo.  
- Se um script depende de outro, **ele deve ser carregado depois**.  
- Exemplo com dois arquivos JS:  
  ```html
  <script src="arquivo.js"></script>
  <script src="index.js"></script>
  ```
- A posição da tag `<script>` pode variar, mas geralmente é colocada **no final do body**.  

## ✅ Conclusão  
Agora sabemos como incluir e organizar JavaScript no HTML de forma eficiente! 🚀
