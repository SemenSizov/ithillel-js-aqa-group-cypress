export function checkRedirectUrl(pathname){
     cy.location('pathname').should('eq', pathname)
}
