/// <reference types="cypress" />
import SessionHandler from '../../src/SessionHandler'

describe('Login Test', () => {

  const correctUserName = 'Rik';
  const correctPassword = 'qwerty123';
  const apiBaseUrl = 'http://localhost:8080/api/v1/login/';

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.wait(500);
  })

  it('can fetch api', () => {
    cy.request('GET', apiBaseUrl + correctUserName + '/' + correctPassword).as('login');
    cy.get('@login').should((response) => {
      expect(response.status).to.eq(200); // status 200 means data has been received succesfully
    })
  })

  it('can login', () => {
    cy.visit('/login');
    cy.get('#uname').type(correctUserName, { delay: 50 });
    cy.get('#pw').type(correctPassword, { delay: 50 });
    cy.get('#loginbtn').click();

    // Check if userid is stored in session.
    // Does not always pass within first 10mins of app startup,
    // have not been able to figure out why.
    expect(SessionHandler.GetUserId()).to.not.be.null
  })
})