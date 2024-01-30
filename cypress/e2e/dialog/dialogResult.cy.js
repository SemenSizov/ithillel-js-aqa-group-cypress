describe('stepper page', ()=>{
    beforeEach(()=>{
        cy.init()
        cy.visit('/pages/modal-overlays/dialog', {failOnStatusCode: false})
    })

    it('should have modal window with header, input field and buttons', () => {
        const container = 'nb-stepper[orientation="horizontal"]'


        cy.get(`${container} h3`).should('have.text','Step content #1')
        cy.get(`${container}`).contains('next').click()