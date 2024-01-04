import { SmartTablePage } from "../pages/smartTablePage.mjs"

describe('User flow in table', ()=>{

  beforeEach(()=>{
    cy.init()
  })

  const user = {
     id: 13,
     firstName: 'Riki',
     lastName: 'Maru',
     username: '@rikimaru',
     email: 'riki.maru@gmail.com',
     age: 31
  }

  const updatedUser = {
     id: 31,
     firstName: 'Doctor',
     lastName: 'Strange',
     username: '@doctor.strange',
     email: 'doctor.strange@gmail.com',
     age: 40
  }

  it('Should verify user flow: create, update, find user in table', ()=>{
     const smartTable = new SmartTablePage()
     smartTable.visit()
     cy.createUser(user)
     cy.checkUserInTable(user)
     cy.editUser(updatedUser)
     cy.checkUserInTable(updatedUser)
   })
})
