# 🎨 Variáveis no CSS (Custom Properties)

As variáveis no CSS, chamadas de **Custom Properties**, permitem reutilizar valores ao longo do código, tornando-o mais organizado e fácil de manter.  

## 1. Definição de Variáveis 📌
As variáveis são definidas usando `--nome-da-variavel` dentro de um seletor (geralmente `:root` para uso global).
```css
:root {
  --cor-primaria: #3498db;
  --cor-secundaria: #2ecc71;
  --tamanho-fonte: 16px;
}
```

## 2. Como Usar Variáveis 🎨
Para aplicar uma variável, utilizamos a função `var()`.
```css
h1 {
  color: var(--cor-primaria);
  font-size: var(--tamanho-fonte);
}
```

## 3. Valores Padrão (Fallback) 🔄
Podemos definir um valor padrão caso a variável não esteja disponível.
```css
p {
  color: var(--cor-nao-definida, black);
}
```

## 4. Variáveis Locais vs. Globais 🌍
- **Variáveis globais** são definidas no `:root` e podem ser usadas em qualquer parte do código.
- **Variáveis locais** são definidas dentro de um seletor e só funcionam ali.
```css
.container {
  --espacamento: 20px;
  padding: var(--espacamento);
}
```

## 5. Alterando Variáveis Dinamicamente 🎭
Podemos mudar valores de variáveis com **CSS puro** ou **JavaScript**.

### 🔹 No CSS (usando estados)
```css
button {
  --cor-botao: #e74c3c;
  background: var(--cor-botao);
}

button:hover {
  --cor-botao: #c0392b;
}
```

### 🔹 No JavaScript (dinamicamente)
```js
document.documentElement.style.setProperty('--cor-primaria', '#ffcc00');
```

## 6. Variáveis vs. Pré-processadores ⚔️
| Característica         | CSS Custom Properties | Pré-processadores (Sass, LESS) |
|----------------------|------------------|------------------|
| Suporte Nativo       | ✅ Sim           | ❌ Não |
| Pode ser alterado dinamicamente | ✅ Sim | ❌ Não |
| Escopo (Global e Local) | ✅ Sim | ✅ Sim |
| Requer compilação | ❌ Não | ✅ Sim |

## 7. Melhores Práticas 🚀
✅ Use variáveis para cores, espaçamentos e tamanhos para manter a consistência.  
✅ Defina variáveis globais no `:root` para reutilização eficiente.  
✅ Evite variáveis excessivas para não complicar o código.  
✅ Prefira **Custom Properties** quando precisar de valores dinâmicos e mudanças em tempo real.  

Agora é só praticar e testar! 🎯  
