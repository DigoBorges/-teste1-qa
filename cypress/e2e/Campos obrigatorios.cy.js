
describe('Validação de campos obrigatórios no Login', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app');
  });

  it('exibir critica de obrigatório ao tentar logar sem email e senha', () => {
   
    cy.get('form').should('be.visible'); // validar que formulário aparecendo   
    cy.get('.otUnI').click(); // Clica no botão de login sem preencher os campos   
    cy.contains('É campo obrigatório').should('be.visible');  // Valida mensagem de campo obrigatório
  });

});