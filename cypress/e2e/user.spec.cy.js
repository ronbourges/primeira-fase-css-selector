import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'


const loginPage = new LoginPage()

describe('Orange HRM tests', () => {
  const selectorsList = {
    
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    
     myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    idField: ".oxd-input--active",
    dataExpireField: ".oxd-input--active"

     }
    it('User Info Update-success', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)

    
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.idField).eq(4).type('muser')
    cy.get(selectorsList.dataExpireField).eq(7).type(2025)
  
  })
  it('Login-fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
   
  
  
  })
})