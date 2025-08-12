import userData from '../fixtures/users/user-data.json'

describe('Orange HRM tests', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton:  "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    dashboarGrid: ".orangehrm-dashboard-grid",
    wrongCredentionAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    idField: ".oxd-input--active",
    dataExpireField: ".oxd-input--active"


   
  }
    it.only('User Info Update-success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
   cy.get(selectorsList.loginButton).click()
   cy.location('pathname').should('equal','/web/index.php/dashboard/index') 
   cy.get(selectorsList.dashboarGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.idField).eq(4).type('muser')
    cy.get(selectorsList.dataExpireField).eq(7).type(2025)
    
  })
  it('Login-fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
   cy.get(selectorsList.loginButton).click()
   cy.get(selectorsList.wrongCredentionAlert)
  })
})