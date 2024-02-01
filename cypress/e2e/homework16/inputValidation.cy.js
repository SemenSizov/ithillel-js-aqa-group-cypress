describe('login page input validation', ()=>{
    beforeEach(()=>{
        cy.init()
        cy.visit('/auth/register', {failOnStatusCode: false})
    })

    it('should check name input negative', () => {
        cy.get('#input-name').type(1)
        cy.get('#input-email').type('aklachun77a@gmail.com');
        cy.get('.caption').should('have.text',' Full name should contains from 4 to 50 characters ')
    });

    it('should check name input positive', () => {
        cy.get('#input-name').type(12345)
        cy.get('#input-email').type('aklachun77a@gmail.com');
        cy.get('.caption').should('not.exist');
    });

    it('should check email input positive', () => {
        cy.get('#input-email').type('aklachun77a@gmail.com');
        cy.get('#input-name').type(12345)
        cy.get('.caption').should('not.exist');
    });

    it('should check email input negative', () => {
        cy.get('#input-email').type('aklachun');
        cy.get('#input-name').type(12345)
        cy.get('.caption').should('have.text',' Email should be the real one! ')
    });

    it('should check password input negative', () => {
        cy.get('#input-password').click()
        cy.get('#input-name').type(12345)
        cy.get('.caption').should('have.text',' Password is required! ')
    });

    it('should check password repeat input negative', () => {
        cy.get('#input-re-password').click()
        cy.get('#input-name').type(12345)
        cy.get('.caption').should('have.text',' Password confirmation is required! ')
    });

})

