// O teste de Cadastro e Login foi implementado em um único fluxo porque o sistema salva os dados do usuário apenas em memória local (localStorage).
// Se os testes forem separados (um para cadastro e outro para login), ao iniciar o segundo teste (login), os dados de cadastro são apagados,
// pois o Cypress limpa o armazenamento local entre os testes por padrão. 
// Por isso, para garantir que o usuário cadastrado estará disponível para o login, ambos os fluxos são realizados juntos no mesmo teste.

const { faker } = require('@faker-js/faker');

describe('Cadastro de usuário', () => {

  beforeEach(() => {
   
    cy.visit('https://bugbank.netlify.app');
    
    
  });

 it('Cadastro de usuário com sucesso', () => {
  cy.get('.ihdmxA') // Abrir tela de cadastro
  .click(); 

  
    cy.get('[name=email]') // Preencher campo Email
    .eq(1)
    .type("teste@tt.com",{force: true}); 
    
    
    cy.get('[name=name]') // Preencher campo Nome
      .eq(0)
      .type("Rodrigo",{force: true}); 
    
    cy.get('[name=password]') // Preencher campo senha
    .eq(1)
    .type("1234",{force: true}); 
    
    cy.get('[name=passwordConfirmation]')  // Preencher campo confirmar Senha
    .eq(0)
    .type("1234",{force: true});
    
    cy.get('#toggleAddBalance') // clique no botão de inserir Saldo
    .click({force: true}); 
    
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
    .click({force: true}); // clicar no botão cadastrar
    
    cy.get('#btnCloseModal')// fechar a modal
    .click(); 
   


       // Realizando Login com os dados cadastrados


    cy.get('[name=email]') // inserir email de login
    .eq(0)
    .type("teste@tt.com",{force: true})


    cy.get('[name=password]') // Preencher campo senha
    .eq(0)
    .type("1234",{force: true}); // inserir senha de login

    cy.get('.otUnI').click(); // clicar no botão Acessar
        
  });
})  