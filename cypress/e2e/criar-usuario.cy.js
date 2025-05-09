describe('Criar novo usuário', () => {
    beforeEach(() => {
      cy.login('Admin', 'admin123');
      cy.visit('/web/index.php/admin/viewSystemUsers');
    });
  
    it('Deve criar um novo usuário com sucesso', () => {
      cy.contains('Add').click();
      cy.get('input[placeholder="Type for hints..."]').type('Fiona Grace');
      cy.get('input.oxd-input[name="username"]').type('usuario.novo');
      cy.get('input[type="password"]').eq(0).type('SenhaForte123!');
      cy.get('input[type="password"]').eq(1).type('SenhaForte123!');
      cy.contains('Save').click();
  
      // Validação
      cy.get('.oxd-toast').should('contain', 'Successfully Saved');
    });
  });
  