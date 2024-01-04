import { DialogPage } from "../pages/dialogPage.mjs"

describe('Return Result from Dialog', ()=>{

  beforeEach(()=>{
    cy.init()
  })

  it('Name modal window should have correct title, input and buttons', ()=>{
    const page = new DialogPage()
    page.visit();
    page.enterNameBtn().click();
    page.enterNameModal().should('be.visible')
    page.enterNameHeader().should('exist')
    page.nameInput().should('exist')
    page.cancelBtn().should('be.visible').and('be.enabled')
    page.submitBtn().should('be.visible').and('be.enabled')
  })
})
