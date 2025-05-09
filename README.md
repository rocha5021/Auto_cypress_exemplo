# Cypress Training Project

Este projeto foi criado para fins de treinamento em automação de testes com Cypress, utilizando como base o site de demonstração OrangeHRM.

## 📦 Estrutura

```
cypress/
  ├── e2e/                       # Testes de ponta a ponta
  │   ├── login.cy.js
  │   ├── logout.cy.js
  │   ├── validacao-campos-obrigatorios.cy.js
  │   ├── criar-usuario.cy.js
  │   ├── pesquisa-usuario.cy.js
  │   ├── excluir-usuario.cy.js
  │   └── mensagem-erro-login.cy.js
  ├── fixtures/                  # Dados de teste
  │   └── user.json
  └── support/                   # Comandos customizados
      └── commands.js

cypress.config.js               # Configuração do Cypress
package.json                    # Dependências do projeto
README.md                       # Instruções do projeto
```

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone <url-do-repo>
   cd cypress-training
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o Cypress:
   ```bash
   npx cypress open
   ```

## 🌐 Site utilizado para testes

- [https://opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com)

## ✅ Funcionalidades testadas

- Login
- Logout
- Validação de campos obrigatórios
- Criação de usuários
- Pesquisa de usuários
- Exclusão de usuários
- Validação de mensagens de erro
