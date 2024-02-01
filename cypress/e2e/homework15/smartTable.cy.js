describe('stepper page', ()=>{
    beforeEach(()=>{
        cy.init()
        cy.visit('pages/tables/smart-table', {failOnStatusCode: false})
    })

    it('should create new user, update and check if changes visible', () => {

        cy.get('th i ').click();
        cy.get('table-cell-default-editor input[placeholder="ID"]').type('12345');
        cy.get('table-cell-default-editor  input[placeholder="First Name"]').type('Anastasiia');
        cy.get('table-cell-default-editor  input[placeholder="Last Name"]').type('Klachun');
        cy.get('table-cell-default-editor  input[placeholder="Username"]').type('kasta.l');
        cy.get('table-cell-default-editor  input[placeholder="E-mail"]').type('aklachun77@gmail.com');
        cy.get('table-cell-default-editor  input[placeholder="Age"]').type('23');
        cy.get('.nb-checkmark').click();
        cy.get('ng2-st-tbody-edit-delete > .ng2-smart-action-edit-edit > .nb-edit').first().click();
        cy.get('table-cell-default-editor input[placeholder="ID"]').clear().type('123123123');
        cy.get('.nb-checkmark').click();
        cy.get('ng2-smart-table-cell ').first().should('contain', '123123123')


        });
})