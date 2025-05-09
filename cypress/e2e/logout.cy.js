describe('Logout do sistema', () => {
    beforeEach(() => {
      cy.login('Admin', 'admin123'); // Usa command customizado
    });
  
    it('Deve fazer logout com sucesso', () => {
      cy.get('.oxd-userdropdown-tab').click();
      cy.contains('Logout').click();
      cy.url().should('include', '/auth/login');
      cy.get('button[type="submit"]').should('be.visible');
    });
  });
  