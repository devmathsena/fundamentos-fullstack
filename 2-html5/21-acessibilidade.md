# 🌍 WAI-ARIA e Atributos de Acessibilidade

## 🔎 Introdução
A Web Accessibility Initiative - Accessible Rich Internet Applications (**WAI-ARIA**) é um conjunto de atributos que melhora a acessibilidade de aplicações web para usuários com deficiência. Ela é essencial para tornar elementos dinâmicos e interativos mais compreensíveis para leitores de tela e outras tecnologias assistivas.

## 📌 Principais Atributos ARIA

### 🛑 `role="alert"`
- Define uma região de alerta.
- Informa imediatamente os usuários sobre mensagens importantes.
- Exemplo de uso:
  ```html
  <div role="alert">Esta é uma mensagem importante!</div>
  ```

### ✍️ `aria-required="true"`
- Indica que um campo de formulário é obrigatório.
- Auxilia leitores de tela a alertar o usuário.
- Exemplo de uso:
  ```html
  <input type="text" required aria-required="true">
  ```

### 🔊 `aria-label`
- Fornece uma descrição personalizada para elementos.
- ÚTil quando o **label visual** não é suficiente.
- Exemplo de uso:
  ```html
  <button aria-label="Enviar Formulário">Enviar</button>
  ```

### 📢 `role="status"` e `aria-live`
- **`role="status"`**: Indica atualizações dinâmicas que não são críticas.
- **`aria-live`**: Define como as mensagens devem ser anunciadas:
  - `polite`: Notifica o usuário sem interromper.
  - `assertive`: Notifica imediatamente.
- Exemplo de uso:
  ```html
  <div role="status" aria-live="polite">Mensagem enviada com sucesso!</div>
  ```

## 🏗️ Exemplo de Implementação
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Atributos de Acessibilidade WAI-ARIA</title>
</head>
<body>
  <h1>Atributos de Acessibilidade WAI-ARIA</h1>
  
  <div role="alert" aria-labelledby="infoHeading" aria-describedby="infoContent">
    <h2 id="infoHeading">Informação Importante</h2>
    <p id="infoContent">Esta é uma mensagem informativa para os usuários.</p>
  </div>

  <form action="#" method="post">
    <label for="name">Nome:</label>
    <input type="text" id="name" name="name" required aria-required="true" aria-label="Campo de Nome">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required aria-required="true" aria-label="Campo de Email">
    
    <label for="message">Mensagem:</label>
    <textarea id="message" name="message" required aria-required="true" aria-label="Campo de Mensagem"></textarea>
    
    <div role="status" aria-live="polite">
      <p>Mensagem enviada com sucesso!</p>
    </div>
    
    <div role="status" aria-live="assertive">
      <p>Erro ao enviar a mensagem. Por favor, verifique os campos obrigatórios.</p>
    </div>
    
    <button type="submit" aria-label="Enviar Formulário">Enviar</button>
  </form>
</body>
</html>
```

## 🎯 Benefícios da Utilização do WAI-ARIA
✅ Melhora a experiência para usuários de tecnologias assistivas.  
✅ Aumenta a acessibilidade e inclusão digital.  
✅ Garante conformidade com padrões web e boas práticas.  

🔹 **Dica Extra**: Sempre teste seu site com **leitores de tela** (como NVDA ou VoiceOver) para garantir uma boa experiência! 🚀
