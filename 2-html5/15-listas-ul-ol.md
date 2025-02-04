# 📋 Trabalhando com Listas no HTML

No HTML, podemos criar dois tipos principais de listas: **ordenadas** e **não ordenadas**. Além disso, é possível criar **listas aninhadas**, onde uma lista está dentro de outra.

---

## 🔢 Listas Ordenadas (`<ol>`)
As **listas ordenadas** utilizam numeração para organizar os itens. Para criá-las, usamos a tag `<ol>` junto com `<li>` para cada item da lista.

### 🛠 Exemplo de Código:
```html
<ol>
    <li>Um Sonho de Liberdade</li>
    <li>O Poderoso Chefão</li>
    <li>Batman: O Cavaleiro das Trevas</li>
    <li>O Poderoso Chefão II</li>
    <li>12 Homens e uma Sentença</li>
</ol>
```

🔹 **Saída esperada**:
1. Um Sonho de Liberdade  
2. O Poderoso Chefão  
3. Batman: O Cavaleiro das Trevas  
4. O Poderoso Chefão II  
5. 12 Homens e uma Sentença  

---

## ⚫ Listas Não Ordenadas (`<ul>`)
As **listas não ordenadas** não seguem uma ordem específica e, por padrão, exibem os itens com **bolinhas**.

### 🛠 Exemplo de Código:
```html
<ul>
    <li>Super Mario Bros</li>
    <li>Homem-Aranha no Aranhaverso</li>
    <li>Divertidamente</li>
    <li>Coraline e o Mundo Secreto</li>
    <li>Planeta do Tesouro</li>
</ul>
```

🔹 **Saída esperada**:
- Super Mario Bros  
- Homem-Aranha no Aranhaverso  
- Divertidamente  
- Coraline e o Mundo Secreto  
- Planeta do Tesouro  

---

## 🔄 Listas Aninhadas
Podemos **aninhar** listas dentro de outras listas, criando uma estrutura hierárquica automática.

### 🛠 Exemplo de Código:
```html
<ol>
    <li>
        <strong>Bolos Tradicionais</strong>
        <ol>
            <li>Bolo de Chocolate Fofinho</li>
            <li>Bolo de Cenoura com Cobertura de Chocolate</li>
            <li>Bolo de Limão com Glacê de Limão</li>
        </ol>
    </li>
    <li>
        <strong>Bolos de Festas</strong>
        <ol>
            <li>Bolo de Aniversário com Recheio de Frutas</li>
            <li>Bolo de Casamento com Flores de Açúcar</li>
            <li>Bolo de Natal com Frutas Cristalizadas</li>
        </ol>
    </li>
</ol>
```

🔹 **Saída esperada**:
1. **Bolos Tradicionais**  
   - Bolo de Chocolate Fofinho  
   - Bolo de Cenoura com Cobertura de Chocolate  
   - Bolo de Limão com Glacê de Limão  
2. **Bolos de Festas**  
   - Bolo de Aniversário com Recheio de Frutas  
   - Bolo de Casamento com Flores de Açúcar  
   - Bolo de Natal com Frutas Cristalizadas  

---

## ✅ Conclusão

- Use **`<ol>`** para listas ordenadas (numeradas).  
- Use **`<ul>`** para listas não ordenadas (com bolinhas).  
- Listas podem ser **aninhadas**, criando sublistas organizadas.  

💡 Agora você pode aplicar esses conceitos para organizar informações de maneira clara no HTML! 🚀
