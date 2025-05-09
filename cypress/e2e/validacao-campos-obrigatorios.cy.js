describe('Validação de campos obrigatórios', () => {
    beforeEach(() => {
      cy.login('Admin', 'admin123');
      cy.visit('/web/index.php/admin/viewSystemUsers');
    });
  
    it('Deve mostrar erro ao tentar pesquisar sem preencher campos obrigatórios', () => {
      cy.get('button[type="submit"]').click();
      cy.get('.oxd-input-field-error-message').should('exist');
    });
  });
  