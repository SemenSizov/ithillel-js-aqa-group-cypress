describe('login page', ()=>{
    beforeEach(()=>{
        cy.init()
        cy.visit('auth/login', {failOnStatusCode: false})
    })

    it('should enter email, password and click checkbox,then verify login', () => {
        cy.login('aklachun77@gmail.com','dragon2024')
        cy.get('.scrollable').should('be.visible');
    });
})