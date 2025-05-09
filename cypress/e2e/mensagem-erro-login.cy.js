describe('Mensagens de erro no login', () => {
    it('Deve mostrar mensagem de erro com senha incorreta', () => {
      cy.visit('/');
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('senhaerrada');
      cy.get('button[type="submit"]').click();
      cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
    });
  });
  