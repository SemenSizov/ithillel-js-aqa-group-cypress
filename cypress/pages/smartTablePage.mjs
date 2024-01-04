import { BasePage } from './base.mjs'

export class SmartTablePage extends BasePage {
  constructor(){
    super('pages/tables/smart-table')
  }

  addBtn(){
     return cy.get('.nb-plus')
  }

  addUserRow(){
     return cy.get('tr.ng-star-inserted')
  }
  
  createBtn(){
     return cy.get('.nb-checkmark')
  }

  cancelBtn(){
     return cy.get('.nb-close')
  }

  IdInput(){
     return cy.get('td input[placeholder="ID"]')
  }

  firstNameInput(){
     return cy.get('td input[placeholder="First Name"]')
  }

  lastNameInput(){
     return cy.get('td input[placeholder="Last Name"]')
  }

  usernameInput(){
     return cy.get('td input[placeholder="Username"]')
  }

  emailInput(){
     return cy.get('td input[placeholder="E-mail"]')
  }

  ageInput(){
     return cy.get('td input[placeholder="Age"]')
  }

  userSections(){
     return cy.get('tbody tr')
  }

  editBtn(){
     this.userSections.first().find('.nb-edit')
  }

  saveEditBtn(){
     this.userSections.first().find('.nb-checkmark')
  }
}
