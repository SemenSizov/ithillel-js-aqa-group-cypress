// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/auth/login', {failOnStatusCode: false,})
  cy.get('#input-email').type(email)
  cy.get('#input-password').type(password)
  cy.get('span.custom-checkbox').click()
  cy.get('button').contains('Log in', {matchCase: false}).click()
 })


 Cypress.Commands.add('init', ()=>{
  const now = Date.now()
  const expiredOn = now + 1000000000
  cy.window().then((win)=> {
    win.localStorage.setItem('lastExternalReferrerTime', now.toString());
    win.localStorage.setItem('theme', JSON.stringify({"themeName":"material-light","expires_in":expiredOn}));
    win.localStorage.setItem('lastExternalReferrer', 'empty');

  })
 })

 Cypress.Commands.add('createUser', (user) => {
  cy.get('.nb-plus').click()
  cy.get('td input[placeholder="ID"]').type(user.id)
  cy.get('td input[placeholder="First Name"]').type(user.firstName)
  cy.get('td input[placeholder="Last Name"]').type(user.lastName)
  cy.get('td input[placeholder="Username"]').type(user.username)
  cy.get('td input[placeholder="E-mail"]').type(user.email)
  cy.get('td input[placeholder="Age"]').type(user.age)
  cy.get('.nb-checkmark').click()
})

Cypress.Commands.add('checkUserInTable', (user) => {
  cy.get('tbody tr').first().within(() => {
    cy.contains('td', user.id).should('exist');
    cy.contains('td', user.firstName).should('exist');
    cy.contains('td', user.lastName).should('exist');
    cy.contains('td', user.username).should('exist');
    cy.contains('td', user.email).should('exist');
    cy.contains('td', user.age).should('exist');
  });
});

Cypress.Commands.add('editUser', (updatedUser) => {
  cy.get('tbody tr').first().find('.nb-edit').click();
  cy.get('td input[placeholder="ID"]').clear().type(updatedUser.id);
  cy.get('td input[placeholder="First Name"]').clear().type(updatedUser.firstName);
  cy.get('td input[placeholder="Last Name"]').clear().type(updatedUser.lastName);
  cy.get('td input[placeholder="Username"]').clear().type(updatedUser.username);
  cy.get('td input[placeholder="E-mail"]').clear().type(updatedUser.email);
  cy.get('td input[placeholder="Age"]').clear().type(updatedUser.age);
  cy.get('.nb-checkmark').click();
});
