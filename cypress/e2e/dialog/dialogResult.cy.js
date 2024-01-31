describe('stepper page', ()=>{
    beforeEach(()=>{
        cy.init()
        cy.visit('/pages/modal-overlays/dialog', {failOnStatusCode: false})
    })

    it('should have modal window with header, input field and buttons', () => {

        cy.get('nb-card-body.result-from-dialog button').should('contain', 'Enter Name').click();
        cy.get('ngx-dialog-name-prompt').should('be.visible');
        cy.get('ngx-dialog-name-prompt nb-card-header').should('have.text','Enter your name')
        cy.get('ngx-dialog-name-prompt nb-card-body').should('be.visible');
        cy.get('ngx-dialog-name-prompt nb-card-footer button[status="danger"] ').should('contain', 'Cancel')
        cy.get('ngx-dialog-name-prompt nb-card-footer button[status="success"] ').should('contain', 'Submit')
    });
  //  ngx-dialog-name-prompt.ng-star-inserted nb-card-header
})