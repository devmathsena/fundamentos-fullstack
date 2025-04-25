# 📦 Tipos de Export no ESM (ESModules)

Nesta etapa, você aprendeu as **4 formas principais** de exportar e importar valores em módulos ESModules (`.js`) no JavaScript moderno.

---

## ✨ Conceito Inicial

Antes de tudo, seu HTML precisa referenciar o script JS como módulo:

```html
<script type="module" src="index.js"></script>
```

No `index.js`, importamos funções de outros arquivos usando diferentes formas de `export` e `import`.

---

## 🟡 Export Nomeado Inline

### 📌 Como funciona:
A função é exportada na **mesma linha da declaração**:

```js
export function minhaFuncao() {
  console.log("Export Nomeado Inline");
}
```

### 🛠 Como importar:
```js
import { minhaFuncao } from './meuarquivo.js';
```

### ⚠️ Importação precisa usar o **nome exato** da função.

### 💡 Quer renomear?
Use `as`:

```js
import { minhaFuncao as outraCoisa } from './meuarquivo.js';
```

---

## 🔵 Export Default Inline

### 📌 Como funciona:
A função é exportada como **padrão do arquivo**, podendo até ser **anônima**:

```js
export default function () {
  console.log("Função default anônima");
}
```

Ou nomeada:

```js
export default function minhaFuncao() {
  console.log("Export Default");
}
```

### 🛠 Como importar:
```js
import qualquerNome from './meuarquivo.js';
```

### ✅ O nome pode ser qualquer um!  
### ❗Só pode haver **um export default** por arquivo.

---

## 🟠 Export Nomeado Não Inline

### 📌 Como funciona:
Você declara suas funções normalmente e depois as **exporta agrupadas**:

```js
function A() {}
function B() {}

export { A, B };
```

### 🛠 Como importar:
```js
import { A, B } from './meuarquivo.js';
```

### 💡 Útil para organização de código com várias funções.

---

## 🔴 Export Default Não Inline

### 📌 Como funciona:
Declare a função e exporte depois:

```js
function principal() {
  console.log("Função default no final");
}

export default principal;
```

### 🛠 Como importar:
```js
import meuNome from './meuarquivo.js';
```

### ✅ Posição não importa, funciona mesmo que venha antes da declaração.

---

## 🧠 Dicas Importantes

- `export named` = pode ter **vários por arquivo**
- `export default` = **somente um por arquivo**
- `export default` aceita **funções anônimas**
- `import { algo }` exige nome exato, a não ser que use `as`
- Você **não precisa usar inline** – pode organizar como quiser!

---

### 📋 Quadro Comparativo: Tipos de Export no ESM

| Tipo de Exportação              | Sintaxe de Exportação                                | Sintaxe de Importação                             | Pode ser Renomeado? | Pode ser Anônima? | Quantos por arquivo? |
|-------------------------------|------------------------------------------------------|--------------------------------------------------|---------------------|-------------------|-----------------------|
| 🟡 Nomeado Inline              | `export function x() {}`                            | `import { x } from './arquivo.js'`              | ✅ `as nomeNovo`     | ❌                | ✅ Vários             |
| 🔵 Default Inline             | `export default function() {}`                      | `import qualquerNome from './arquivo.js'`       | ✅                  | ✅                | ❌ Apenas 1           |
| 🟠 Nomeado Não Inline         | `function x() {}`<br>`export { x };`                | `import { x } from './arquivo.js'`              | ✅ `as nomeNovo`     | ❌                | ✅ Vários             |
| 🔴 Default Não Inline         | `function x() {}`<br>`export default x;`            | `import qualquerNome from './arquivo.js'`       | ✅                  | ❌                | ❌ Apenas 1           |

---

## ✅ Conclusão

Você agora conhece:

- ✅ Export Nomeado Inline
- ✅ Export Default Inline
- ✅ Export Nomeado Não Inline
- ✅ Export Default Não Inline

💡 Use o formato que mais fizer sentido para seu projeto ou equipe!
