const { faker } = require('@faker-js/faker');


describe('Cadastro com Login faker', () => {

 function createFakeUser() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      email: faker.internet.email({ firstName, lastName }),
      password: faker.internet.password({ length: 10, memorable: true }),
    };
  }


// CADASTRO DE USUÁRIO COM DADOS FICTÍCIOS

  it('Realizar cadastro de um usuário com dados fictícios', () => {
    
    const user = createFakeUser();

    cy.visit('https://bugbank.netlify.app'); // Visita a página 
    cy.get('.ihdmxA').click(); // Abrir tela de cadastro

    cy.get('[name="email"]').eq(1).type(user.email, {force: true});
    cy.get('[name="name"]').eq(0).type(user.fullName, {force: true});
    cy.get('[name="password"]').eq(1).type(user.password,{force: true});
    cy.get('[name="passwordConfirmation"]').eq(0).type(user.password,{force: true});
    cy.get('#toggleAddBalance').click({force: true});
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true});
    cy.screenshot();
    cy.get('#btnCloseModal').click(); // fechar a modal
  
    // REALIZAR LOGIN DE DADOS FICTICIOS CADASTRADOS
  
    cy.get('[name="email"]').eq(0).type(user.email);
    cy.get('[name="password"]').eq(0).type(user.password);
    cy.get('.otUnI').should('be.visible').click();
     
       
    // REALIZAR TRANSFERECIA ENTRE CONTAS

    cy.get('#btn-TRANSFERÊNCIA').click();   

   cy.get('[name=accountNumber').type('234');
   cy.get('[name=digit').type('3');    
   cy.get('[name=transferValue]').type('100');
   cy.get('[name=description]').type('Transferência de teste');
   cy.get('.style__ContainerButton-sc-1wsixal-0').click({force: true});

  })

});        
   
