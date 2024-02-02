describe('login page input validation', ()=>{
    beforeEach(()=>{
        cy.init()
        cy.visit('/auth/register', {failOnStatusCode: false})
    })

    it('should check name input negative', () => {
        cy.fixture('auth').then((auth)=>{
        cy.get('#input-name').type(auth.wrongName)
        cy.get('#input-email').type(auth.email);
        cy.get('.caption').should('have.text',' Full name should contains from 4 to 50 characters ')
    })
    });

    it('should check name input positive', () => {
        cy.fixture('auth').then((auth)=> {
            cy.get('#input-name').type(auth.name)
            cy.get('#input-email').type(auth.email);
            cy.get('.caption').should('not.exist');
        })
    });

    it('should check email input positive', () => {
        cy.fixture('auth').then((auth)=> {
            cy.get('#input-email').type(auth.email);
            cy.get('#input-name').type(auth.name)
            cy.get('.caption').should('not.exist');
        })
    });

    it('should check email input negative', () => {
        cy.fixture('auth').then((auth)=> {
            cy.get('#input-email').type(auth.wrongEmail);
            cy.get('#input-name').type(auth.name)
            cy.get('.caption').should('have.text', ' Email should be the real one! ')
        })
    });

    it('should check password input negative', () => {
        cy.fixture('auth').then((auth)=> {
            cy.get('#input-password').click()
            cy.get('#input-name').type(auth.name)
            cy.get('.caption').should('have.text', ' Password is required! ')
        })
    });

    it('should check password repeat input negative', () => {
        cy.fixture('auth').then((auth)=> {
            cy.get('#input-re-password').click()
            cy.get('#input-name').type(auth.name)
            cy.get('.caption').should('have.text', ' Password confirmation is required! ')
        })
    });

})
