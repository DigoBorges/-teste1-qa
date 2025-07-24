// O teste de Cadastro e Login foi implementado em um único fluxo porque o sistema salva os dados do usuário apenas em memória local (localStorage).
// Se os testes forem separados (um para cadastro e outro para login), ao iniciar o segundo teste (login), os dados de cadastro são apagados,
// pois o Cypress limpa o armazenamento local entre os testes por padrão. 
// Por isso, para garantir que o usuário cadastrado estará disponível para o login, ambos os fluxos são realizados juntos no mesmo teste.


describe('Cadastro de usuário', () => {

  beforeEach(() => {
   
    cy.visit('https://bugbank.netlify.app');
    
    
  });

 it('Cadastro de usuário com sucesso', () => {
  cy.get('.ihdmxA')
  .click(); // Abrir tela de cadastro

  
    cy.get('[name=email]')
    .eq(1)
    .type("teste@tt.com",{force: true}); // Preencher campo Email
    
    
    cy.get('[name=name]') // Preencher campo Nome
      .eq(0)
      .type("Rodrigo",{force: true}); 
    
    cy.get('[name=password]') // Preencher campo senha
    .eq(1)
    .type("1234",{force: true}); 
    
    cy.get('[name=passwordConfirmation]')  // Preencher campo confirmar Senha
    .eq(0)
    .type("teste@tt.com",{force: true});
    
    cy.get('#toggleAddBalance') // clique no botão de inserir Saldo
    .click({force: true}); 
    
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
    .click({force: true}); // clicar no botão cadastrar
    
    cy.get('#btnCloseModal')// fechar a modal
    .click(); 
   
    // cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type("teste@tt.com",{force: true}); // inserir email de login
    //cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type("abcd1234",{force: true}); // inserir senha de login
   // cy.get('.otUnI').click(); // clicar no botão Acessar
        
  });
})  