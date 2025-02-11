# 📌 O que é Herança no CSS?  

A **herança** no CSS ocorre quando um elemento "filho" recebe automaticamente os estilos do seu **elemento pai**.

Isso facilita a estilização e reduz a repetição de código.  

### 📜 Como Funciona?  
- Algumas propriedades aplicadas ao elemento pai **são herdadas** pelos filhos, como:
  - **`color`** (cor do texto)  
  - **`font-family`** (tipo de fonte)  
  - **`font-size`** (tamanho da fonte)  
  - **`text-align`** (alinhamento do texto)  

- Outras propriedades **não são herdadas** automaticamente, como:
  - **`padding`**  
  - **`margin`**  
  - **`border`**  
  - **`background`**  

### 🎨 Exemplo de Uso  
```css
header {
  background-color: #232323;
  color: #fff; /* Todos os textos dentro do <header> herdarão essa cor */
  text-align: center;
  padding: 1rem;
}

.parent {
  font-family: Arial, sans-serif;
  font-size: 1.25rem;
  color: red; /* Todos os textos dentro da div .parent ficarão vermelhos */
}

.child {
  font-size: 2rem; /* Sobrescreve a herança do pai */
  color: green; /* Esse elemento filho será verde, não vermelho */
}
```  

### ⚡ Importante!  
✔ Se necessário, podemos **sobrescrever** um estilo herdado aplicando um novo valor diretamente no elemento filho.  
✔ A herança é útil para definir estilos globais, como fontes e cores, no **`body`**, afetando toda a página:  
```css
body {
  font-family: Arial, sans-serif;
  color: #333;
}
```  
✔ Propriedades **não herdadas automaticamente** podem ser forçadas a herdar com `inherit`:  
```css
p {
  border: inherit; /* O <p> herda a borda do elemento pai */
}
```  

🔎 **Dica**: Utilize a herança para evitar código repetitivo e tornar seu CSS mais organizado e eficiente! 🚀  
