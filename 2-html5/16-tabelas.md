# 📊 Tabelas no HTML  

## 🔹 Introdução  
As **tabelas** no HTML permitem organizar dados em **linhas e colunas**, sendo amplamente utilizadas para exibir informações de forma estruturada.  

### 🏗️ Estrutura básica  
As principais tags utilizadas são:  
- `<table>` → Define a tabela  
- `<tr>` → Cria uma linha  
- `<td>` → Cria uma célula (coluna)  
- `<th>` → Define um cabeçalho  

```html
<table>
    <tr>
        <th>Coluna 1</th>
        <th>Coluna 2</th>
    </tr>
    <tr>
        <td>Dado 1</td>
        <td>Dado 2</td>
    </tr>
</table>
```  

---

## 🏷️ Adicionando um cabeçalho  
Podemos utilizar `<thead>` e `<tbody>` para organizar melhor os dados:  

```html
<table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Profissão</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>João</td>
            <td>30</td>
            <td>Engenheiro</td>
        </tr>
        <tr>
            <td>Maria</td>
            <td>25</td>
            <td>Advogada</td>
        </tr>
    </tbody>
</table>
```

---

## 🔗 Personalizando células  
Podemos usar os atributos `colspan` e `rowspan` para mesclar células:  

```html
<table>
    <thead>
        <tr>
            <th colspan="2">Informações Pessoais</th>
            <th>Contato</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Nome:</td>
            <td>João</td>
            <td rowspan="2">Telefone: 123456</td>
        </tr>
        <tr>
            <td>Idade:</td>
            <td>30</td>
        </tr>
    </tbody>
</table>
```  

📌 **Dica:** `colspan="2"` faz uma célula ocupar **duas colunas**, enquanto `rowspan="2"` faz uma célula ocupar **duas linhas**.  
