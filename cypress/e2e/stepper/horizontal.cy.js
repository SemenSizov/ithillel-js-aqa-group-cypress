describe('stepper page', ()=>{
    beforeEach(()=>{
        cy.init()
        cy.visit('pages/layout/stepper', {failOnStatusCode: false})
    })

    it('should have correct titles for each step', () => {
    const container = 'nb-stepper[orientation="horizontal"]'


        cy.get(`${container} h3`).should('have.text','Step content #1')
        cy.get(`${container}`).contains('next').click()

        cy.get(`${container} h3`).should('have.text','Step content #2')
        cy.get(`${container}`).contains('next').click()

        cy.get(`${container} h3`).should('have.text','Step content #3')
        cy.get(`${container}`).contains('next').click()

        cy.get(`${container} h3`).should('have.text','Step content #4')

    });

})
