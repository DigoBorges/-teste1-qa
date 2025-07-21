
describe('Validação de campos obrigatórios no Login', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app');
  });

  it('exibir critica de obrigatório ao tentar logar sem email e senha', () => {
   
    cy.get('form').should('be.visible'); // validar que formulário aparecendo   
    cy.get('.otUnI').click(); // Clica no botão de login sem preencher os campos   
    cy.contains('É campo obrigatório').should('be.visible');  // Valida mensagem de campo obrigatório
  });



  it.only('exibir critica de campos obrigatorios ao realizar cadastro', () => {
   
    cy.get('.ihdmxA').click(); // clicar no botão Registrar
        cy.get(':nth-child(2) > .input__default'); 
        cy.get(':nth-child(3) > .input__default'); 
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default');
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default');
        cy.get('#toggleAddBalance').click({force: true}); 
        cy.contains('É campo obrigatório').should('be.visible');
 
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true}); // clicar no botão cadastrar
        
    });





});