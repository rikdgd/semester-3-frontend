/// <reference types="cypress" />

describe('Login Test', () => {

  const correctUserName = 'Rik';
  const correctPassword = 'qwerty123';

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(500);
  })

  it('Can login', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('#uname').type(correctUserName, { delay: 50 });
    cy.get('#pw').type(correctPassword, { delay: 50 });
    cy.get('#loginbtn').click();


    cy.request('GET', 'http://localhost:8080/api/v1/login/' + correctUserName + '/' + correctPassword).as('login');
    cy.get('@login').should((response) => {
      expect(response.status).to.eq(200);
    })
  })
})