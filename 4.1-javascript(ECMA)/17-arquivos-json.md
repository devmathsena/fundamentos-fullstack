# 📦 O que são Arquivos JSON?

## 📚 Entendendo o JSON

- **JSON** significa **JavaScript Object Notation**.
- É um **formato de texto** para **troca de dados** entre sistemas.
- Funciona no **modelo chave: valor** (como objetos em JavaScript).
- É compacto, padronizado e muito utilizado no mundo da programação.
- A extensão dos arquivos é **`.json`** (ex.: `package.json` que vimos no npm).

---

## ✍️ Como escrever um JSON?

- Usa **aspas** (`"`) para os **nomes das chaves** e também para valores do tipo **String**.
- Tipos de dados aceitos:
  - **Strings** (`"texto"`)
  - **Números** (`123`)
  - **Booleanos** (`true` ou `false`)
  - **Null** (`null`) ➡️ Atenção: não existe `undefined` em JSON!
- **Objetos** são escritos com `{}`.
- **Listas/Arrays** são escritas com `[]`.
- As **propriedades** devem ser **separadas por vírgulas**.

```json
{
  "nome": "Ana",
  "idade": 25,
  "hobbies": ["ler", "programar"],
  "estudante": true,
  "projetoAtual": null
}
```

---

## 🔁 Como o JSON é usado?

- **Troca de informações** entre diferentes sistemas (mesmo de linguagens diferentes!).
- **Configurações** de ferramentas e aplicativos.
- **Comunicação na Web** (APIs REST enviam e recebem dados em JSON).

---

## 🔧 Trabalhando com JSON no JavaScript

### 📥 Converter uma string JSON para objeto:

```javascript
const str = '{"nome": "Ana", "idade": 25}';
const obj = JSON.parse(str);
console.log(obj.nome); // Ana
```

- Usamos `JSON.parse()` para **transformar uma string JSON em objeto JavaScript**.

---

### 📤 Converter um objeto para string JSON:

```javascript
const pessoa = { nome: "Ana", idade: 25 };
const str2 = JSON.stringify(pessoa);
console.log(str2); // '{"nome":"Ana","idade":25}'
```

- Usamos `JSON.stringify()` para **transformar um objeto JavaScript em string JSON**.

---

## ⚡ Resumo Rápido

| Característica | Detalhe |
|:---------------|:--------|
| Formato        | Texto padrão aberto |
| Sintaxe        | Parecida com objetos JS |
| Usos principais | Troca de dados e configurações |
| Métodos JS     | `JSON.parse()` e `JSON.stringify()` |

---

> 🎯 **Dica final**: Você ainda vai trabalhar MUITO com JSON no seu caminho de programador, então vale dominar bem esse formato!
