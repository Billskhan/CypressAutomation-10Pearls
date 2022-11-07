/// <reference types="Cypress" />
import login from './PageObject/LoginPage'

describe("Login Tests Suite",() => {
    const loginPage = new login
    before(()=>{
    cy.fixture('LoginUsers').as('userdata')
    })
    beforeEach(function () {
        loginPage.toNavigate()
    })

describe("Multiple user login tests",() => {
    it('Three users login test',() => {
        cy.get('@userdata').then((userdata)=>{
        userdata.forEach((user)=>{
        loginPage.fillEmail(user.email)
        loginPage.fillPassword(user.password)
        loginPage.submit()
        expect(
        loginPage.loginName().should('contain',user.name)
        )
        })   
    })
    })
})

describe('Login tests',()=>{
    it('Invalid username test',() => {
    loginPage.fillEmail("ABC")
    loginPage.fillPassword("ABC")
    loginPage.submit()
    cy.skipGoogleReCAPTCHA()
    expect(
        loginPage.emailError().should('contain','Username is invalid.')
    )
    })
    it('Incorrect password test',() => {
    loginPage.fillEmail("aabbcc@gmail.com")
    loginPage.fillPassword("ABC")
    loginPage.submit()
    cy.skipGoogleReCAPTCHA()
    expect(
        loginPage.passwordError().should('contain','Password was incorrect')
    )
    })

})
})

