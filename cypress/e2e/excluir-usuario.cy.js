describe('Excluir usuário', () => {
    beforeEach(() => {
      cy.login('Admin', 'admin123');
      cy.visit('/web/index.php/admin/viewSystemUsers');
    });
  
    it('Deve excluir usuário da lista', () => {
      cy.get('input[placeholder="Username"]').type('usuario.novo');
      cy.get('button[type="submit"]').click();
  
      cy.get('.oxd-table-row').first().within(() => {
        cy.get('i.bi-trash').click();
      });
  
      cy.contains('Yes, Delete').click();
      cy.get('.oxd-toast').should('contain', 'Successfully Deleted');
    });
  });
  