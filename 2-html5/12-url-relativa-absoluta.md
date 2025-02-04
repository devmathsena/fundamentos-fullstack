# 🌍 URLs Absolutas e Relativas

## 📌 Introdução
Antes de entender URLs absolutas e relativas, é essencial conhecer o conceito de **raiz** do site. A raiz (ou diretório raiz) é o ponto inicial do site. Quando acessamos um site sem especificar um caminho, caímos diretamente na raiz, que geralmente contém o arquivo `index.html`.

Exemplo de links em um site:

```html
<a href="http://localhost:5500/">Primeira página</a>
<a href="titulos.html">Aula: títulos e parágrafos</a>
<a href="formatacao.html">Aula: elementos de formatação</a>
<a href="imagens.html">Aula: imagens</a>
```

Em muitos casos, podemos omitir o endereço base e usar `/` para indicar a raiz do site:

```html
<a href="/">Primeira Página</a>
<a href="../formatacao/index.html">Aula: elementos de formatação</a>
<a href="../titulos">Aula: títulos e parágrafos</a>
```

---

## 🔗 URLs Relativas
Uma **URL relativa** aponta para um arquivo ou página considerando a **posição atual** do arquivo em relação ao diretório onde ele está localizado.

🔹 **Sem barra no início** → O caminho é relativo ao diretório atual.  
🔹 **Uso de `../`** → Indica que estamos subindo um nível na hierarquia de diretórios.  

Exemplo de URLs relativas:

```html
<a href="contato.html">Contato (URL relativa)</a>
<a href="../../links.html">Aula: links (URL relativa)</a>
```

🔹 `contato.html`: Arquivo dentro do mesmo diretório.  
🔹 `../../links.html`: Sobe dois níveis antes de acessar `links.html`.  

---

## 🌎 URLs Absolutas
Uma **URL absoluta** especifica o caminho completo do arquivo a partir da raiz do site.

🔹 **Começa com `/`** → O caminho é calculado a partir da raiz do site.  

Exemplo de URLs absolutas:

```html
<a href="/site/paginas/contato.html">Contato (URL absoluta)</a>
<a href="/links">Aula: links (URL absoluta)</a>
```

📌 **Diferença principal**:  
- **URL relativa** → Depende da estrutura de diretórios.  
- **URL absoluta** → Sempre funciona, pois parte da raiz do site.  

---

## 🛠 Exemplo Prático

Criação da seguinte estrutura de diretórios:

```
site/
│── paginas/
│   │── servicos.html
│   │── contato.html
│── links.html
```

🔹 **Arquivo `servicos.html`**:

```html
<a href="contato.html">Contato (URL relativa)</a>
<a href="/site/paginas/contato.html">Contato (URL absoluta)</a>
```

🔹 **Arquivo `contato.html`**:

```html
<a href="servicos.html">Serviços (URL relativa)</a>
<a href="/site/paginas/servicos.html">Serviços (URL absoluta)</a>
```

---

## ✅ Conclusão
- URLs **relativas** são mais flexíveis para navegação interna.  
- URLs **absolutas** são úteis para evitar erros de caminho.  
- O uso correto depende do contexto e da organização do projeto.  

🔹 **Dica**: Para links dentro do próprio site, prefira **URLs relativas** sempre que possível, pois facilitam a manutenção e migração do projeto.  
