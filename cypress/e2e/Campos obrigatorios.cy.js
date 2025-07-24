
describe('Validação de campos obrigatórios no Login', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app');
  });

// VALIDAÇAO PARA CAMPOS OBRIGATORIOS LOGIN
  it('exibir critica de obrigatório ao tentar logar sem email e senha', () => {
   
    cy.get('form').should('be.visible'); // validar que formulário aparecendo   
    cy.get('.otUnI').click(); // Clica no botão de login sem preencher os campos   
    cy.contains('É campo obrigatório').should('be.visible');  // Valida mensagem de campo obrigatório
  });


 // VALIDAÇAO PARA LOGIN COM USUARIO INVÁLIDO

  it('exibir critica com usuário inválido', () => {

   cy.get('[name=email]') // inserir email de login
    .eq(0)
    .type("testWe@tt.com",{force: true})


    cy.get('[name=password]') // Preencher campo senha
    .eq(0)
    .type("1234",{force: true}); // inserir senha de login

    cy.get('.otUnI').click(); // clicar no botão Acessar
         
     cy.get('#modalText').should('be.visible').and('contain', 'Usuário ou senha inválido').and('contain', 'Tente novamente ou verifique suas informações');  // Valida mensagem de campo obrigatório
     cy.get('#btnCloseModal').click();
  });

//  TESTE DE CRITICA DE SENHAS DIFERENTES - FUNCIONALIDADE - CADASTRAMENTO

  it('Critica que as Senhas são diferentes', () => {
    cy.get('.ihdmxA')  // Abrir tela de cadastro
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
    .type("teste@tt.com",{force: true});
    
    cy.get('#toggleAddBalance')
    .click({force: true}); // clique no botão de inserir Saldo
    
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0')
    .click({force: true}); // clicar no botão cadastrar
    
    cy.get('#btnCloseModal')// fechar a modal
    .click(); 
  }); 


});
