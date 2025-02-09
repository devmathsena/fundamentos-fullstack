# 📌 Display: none, inline, block e inline-block

## 🎭 Propriedade `display`
A propriedade `display` em CSS define como um elemento deve ser renderizado na página. Os principais valores são:

### 🚫 `none`
- O elemento **não é exibido** na página.
- Ele **não ocupa espaço** no layout.
- Útil para esconder elementos dinamicamente com JavaScript ou CSS.

```css
.elemento {
  display: none;
}
```

### 📏 `block`
- Ocupa **toda a largura disponível**.
- Sempre começa em uma **nova linha**.
- Exemplos de elementos com `display: block` por padrão:
  - `<div>`, `<p>`, `<h1>` a `<h6>`, `<section>`, `<article>`.

```css
.elemento {
  display: block;
}
```

### 📎 `inline`
- Ocupa **apenas o espaço necessário**.
- **Não quebra linha**.
- Exemplos de elementos `inline` por padrão:
  - `<span>`, `<a>`, `<strong>`, `<em>`.
- **Não permite definir** `width` e `height` diretamente.

```css
.elemento {
  display: inline;
}
```

### 🔄 `inline-block`
- **Semelhante ao `inline`**, mas permite definir `width` e `height`.
- Permite que elementos fiquem lado a lado **sem ocupar toda a largura**.
- Muito útil para botões e menus.

```css
.elemento {
  display: inline-block;
  width: 100px;
  height: 50px;
}
```

## 🎨 Comparação Visual
| Valor | Ocupa largura total? | Permite definir `width` e `height`? | Quebra linha? |
|--------|-----------------|---------------------------|-------------|
| `none` | ❌ | ❌ | ❌ |
| `block` | ✅ | ✅ | ✅ |
| `inline` | ❌ | ❌ | ❌ |
| `inline-block` | ❌ | ✅ | ❌ |

🛠️ **Dica:** O `display` é essencial para estruturar e organizar os elementos no layout da página! 🚀
