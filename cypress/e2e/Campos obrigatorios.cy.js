
describe('Validação de campos obrigatórios no Login', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app');
  });

  it('exibir critica de obrigatório ao tentar logar sem email e senha', () => {
   
    cy.get('form').should('be.visible'); // validar que formulário aparecendo   
    cy.get('.otUnI').click(); // Clica no botão de login sem preencher os campos   
    cy.contains('É campo obrigatório').should('be.visible');  // Valida mensagem de campo obrigatório
  });


  it('exibir critica com usuário inválido', () => {
   cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type("teste@ttt.com",{force: true}); // inserir email de login
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("abcd1234",{force: true}); // inserir senha de login
    cy.get('form').should('be.visible'); // validar que formulário aparecendo 
    cy.get('.otUnI').click(); // clicar no botão Acessar
         
     cy.get('#modalText').should('be.visible').and('contain', 'Usuário ou senha inválido').and('contain', 'Tente novamente ou verifique suas informações');  // Valida mensagem de campo obrigatório
     cy.get('#btnCloseModal').click();
  });

// Testes de Critica de Senha não Igual para Cadastramento

  it('Critica que as Senhas são diferentes', () => {
<<<<<<< HEAD
    cy.get('.ihdmxA')  // Abrir tela de cadastro
    .click();

  
    cy.get('[name=email]') // Preencher campo Email
    .eq(1)
    .type("teste@tt.com",{force: true}); 
=======
    cy.get('.ihdmxA')
    .click(); // Abrir tela de cadastro

  
    cy.get('[name=email]')
    .eq(1)
    .type("teste@tt.com",{force: true}); // Preencher campo Email
>>>>>>> deea737 (refatorar testes de cadastro e validação de campos obrigatórios para melhorar a legibilidade e a estrutura)
    
    
    cy.get('[name=name]') // Preencher campo Nome
      .eq(0)
      .type("Rodrigo",{force: true}); 
    
    cy.get('[name=password]') // Preencher campo senha
    .eq(1)
    .type("1234",{force: true}); 
    
    cy.get('[name=passwordConfirmation]')  // Preencher campo confirmar Senha
    .eq(0)
    .type("teste@tt.com",{force: true});
    
    cy.get('#toggleAddBalance')
    .click({force: true}); // clique no botão de inserir Saldo
    
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
    .click({force: true}); // clicar no botão cadastrar
    
    cy.get('#btnCloseModal')// fechar a modal
    .click(); 
  }); 
});
