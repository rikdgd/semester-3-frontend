/// <reference types="cypress"/>

describe('register test', () => {

    const apiBaseUrl = 'http://localhost:8080/api/v1/create_account';
    
    const cypressName = 'cypress';
    const cypressMail = 'cypress@mail';
    const cypressPassword = 'cypresspw';

    beforeEach(() => {
        cy.visit('http://localhost:3000/create_account')
        cy.wait(100);
    })

    it('can fetch api', () => {
        let account = {
            email: cypressMail,
            name: cypressName,
            password: cypressPassword
        }
        cy.request('POST', apiBaseUrl, account).as('register');
        cy.get('@register').should((response) => {
            expect(response.status).to.eq(200);
        })
    })

    it('can register', () => {
        // email field
        cy.get('input.form-textfield:nth-child(1)').type(cypressMail, { delay: 50 });
        cy.get('input.form-control:nth-child(2)').type(cypressName, { delay: 50 });
        cy.get('input.form-control:nth-child(3)').type(cypressPassword, { delay: 50 });

        cy.get('a.btn:nth-child(4)').click();

        // main app container
        cy.get('div.container:nth-child(2)').find('h3');
    })
})