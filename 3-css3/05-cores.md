# 🎨 Cores no CSS: Hexadecimal, RGB e HSL

O CSS permite definir cores de várias formas, sendo as mais comuns **Hexadecimal, RGB e HSL**.

Vamos entender como cada uma funciona! 🚀

## 🔹 Hexadecimal (#RRGGBB)
📌 O formato **hexadecimal** utiliza seis caracteres para representar cores, onde:

- `#RRGGBB` → **RR (vermelho), GG (verde), BB (azul)**.
- Cada par de valores vai de `00` (0 em decimal) a `FF` (255 em decimal).
- Exemplo: `#FF0000` representa **vermelho puro (255, 0, 0)**.

### 🔢 Conversão Hexadecimal → Decimal
Cada dígito hexadecimal pode ser convertido para decimal usando:

`(primeiro dígito × 16) + segundo dígito`

Exemplo para `#FF`:
- `F = 15`, então `(15 × 16) + 15 = 255`.

## 🔹 RGB (Red, Green, Blue)
📌 O formato **RGB** define cores com valores de **0 a 255** para cada canal:

```css
color: rgb(255, 0, 0); /* Vermelho puro */
color: rgb(0, 255, 0); /* Verde puro */
color: rgb(0, 0, 255); /* Azul puro */
```

📍 Também é possível usar **RGBA**, onde o último valor define a transparência:
```css
color: rgba(255, 0, 0, 0.5); /* Vermelho com 50% de opacidade */
```

## 🔹 HSL (Hue, Saturation, Lightness)
📌 O formato **HSL** se baseia em:
- 🎨 **Hue (Matiz):** Define a tonalidade da cor (0° a 360°).
- 🔆 **Saturation (Saturação):** Intensidade da cor (0% a 100%).
- 💡 **Lightness (Luminosidade):** Brilho da cor (0% a 100%).

```css
color: hsl(0, 100%, 50%); /* Vermelho puro */
color: hsl(120, 100%, 50%); /* Verde puro */
color: hsl(240, 100%, 50%); /* Azul puro */
```

📍 **Dica:** Para **deixar uma cor mais escura ou clara**, basta ajustar o valor de **lightness** (luminosidade)!

## 🛠️ Ferramentas Úteis
Para escolher cores facilmente, use ferramentas como:

✅ [Color Picker do Google](https://www.google.com/search?q=color+picker) 🎨

✅ Extensões do navegador, como "ColorPick Eyedropper" 🔍

---

✨ **Resumo Final:**
- 🔴 **Hexadecimal**: `#RRGGBB` (usado frequentemente por designers e devs).
- 🔵 **RGB**: `rgb(r, g, b)` (bom para manipular cores dinamicamente).
- 🟢 **HSL**: `hsl(h, s%, l%)` (ideal para ajustes visuais rápidos).

Agora você já sabe como trabalhar com cores no CSS! 🚀😃

