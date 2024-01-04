import { BasePage } from './base.mjs'

export class LoginPage extends BasePage {
  constructor(){
    super('/auth/login')
  }

  emailInput(){
     return cy.get('#input-email')
  }

  passwordInput(){
     return cy.get('#input-password')
  }
  
  rememberCheckbox(){
     return cy.get('span.custom-checkbox')
  }

  loginBtn(){
     return cy.get('button').contains('Log In', {matchCase: false})
  }

  loginFlow(email, password){
     this.emailInput().type(email)
     this.passwordInput().type(password)
     this.rememberCheckbox().click()
     this.loginBtn().click()
  }
}
