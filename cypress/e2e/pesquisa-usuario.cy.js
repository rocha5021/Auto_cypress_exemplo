describe('Pesquisar usuário pelo filtro', () => {
    beforeEach(() => {
      cy.login('Admin', 'admin123');
      cy.visit('/web/index.php/admin/viewSystemUsers');
    });
  
    it('Deve filtrar usuário existente', () => {
      cy.get('input[placeholder="Username"]').type('Admin');
      cy.get('button[type="submit"]').click();
      cy.get('.oxd-table-body').should('contain', 'Admin');
    });
  });
  