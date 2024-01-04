import { LoginPage } from "../pages/loginPage.mjs"
import { checkRedirectUrl } from "../support/helper.mjs"

describe('Log in user', ()=>{

  beforeEach(()=>{
    cy.init()
  })

  it('Way 1: should log in user and check redirect', ()=>{
    const loginPage = new LoginPage()
    loginPage.visit()
    loginPage.emailInput().type('just4glip@gmail.com')
    loginPage.passwordInput().type('Test!123')
    loginPage.rememberCheckbox().click()
    loginPage.loginBtn().click()
    checkRedirectUrl('/ngx-admin/pages/dashboard')
  })

  it('Way 2: should log in user and check redirect', ()=>{
    const loginPage = new LoginPage()
    loginPage.visit();
    loginPage.loginFlow('just4glip@gmail.com', 'Test!123')
    checkRedirectUrl('/ngx-admin/pages/dashboard')
  })

  it('Way 3: should log in user and check redirect', ()=>{
  cy.login('just4glip@gmail.com', 'Test!123')
  checkRedirectUrl('/ngx-admin/pages/dashboard')
})
})
