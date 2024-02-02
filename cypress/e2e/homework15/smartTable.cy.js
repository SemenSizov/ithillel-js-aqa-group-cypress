describe('stepper page', ()=>{
    beforeEach(()=>{
        cy.init()
        cy.visit('pages/tables/smart-table', {failOnStatusCode: false})
    })

    it('should create new user, update and check if changes visible', () => {

        cy.get('th i ').click();
        cy.addUserToTable('12345','Anastasiia','Klachun','kasta.l','aklachun77@gmail.com','23')
        cy.get('.nb-checkmark').click();
        cy.get('ng2-st-tbody-edit-delete > .ng2-smart-action-edit-edit > .nb-edit').first().click();
        cy.get('table-cell-default-editor input[placeholder="ID"]').clear().type('123123123');
        cy.get('.nb-checkmark').click();
        cy.get('ng2-smart-table-cell ').first().should('contain', '123123123')


        });
})