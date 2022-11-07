/// <reference types="Cypress" />
import registration from './PageObject/RegistrationPage'

describe('Registration Test Suite', ()=>{
    const myReg = new registration()
    beforeEach(function () {
        myReg.nevigate()
      })


describe('Password Quality Message Tests',() => {  
    const myReg = new registration()
    it('Weak Password', ()=>{
        myReg.fillEmail("abc@yahoo.com")
        myReg.fillFirstName("Bilal Tahir")
        myReg.fillPassword("Qwe")
         expect(
         myReg.lblPasswordQualityMessage().should('contain','Password quality: Weak')
         )
    })
    it('Better Password', ()=>{
        myReg.fillEmail("abc@yahoo.com")
        myReg.fillFirstName("Bilal Tahir")
        myReg.fillPassword("Qwe123")
        expect(
            myReg.lblPasswordQualityMessage().should('contain','Password quality: Better')
        )
    })

    it('Better Password', ()=>{
        myReg.fillEmail("abc@yahoo.com")
        myReg.fillFirstName("Bilal Tahir")
        myReg.fillPassword("Qwe123!@#")
        expect(
        myReg.lblPasswordQualityMessage().should('contain','Password quality: Strong')
        )
        })
    })

describe('In-valid email error message', () =>{
        it('Invalid Email', () => {
            myReg.fillEmail("abc")
            myReg.fillFirstName("Bilal Tahir")
            myReg.fillPassword("Qwe123!@#")
            myReg.btnRegisterr()
            expect(
            myReg.lblEmailError().should('contain','Please enter a valid email address.')
            )
        })

        it('In-valid password error message', () => {
            myReg.fillEmail("abc@yahoo.com")
            myReg.fillFirstName("Bilal Tahir")
            myReg.fillPassword("Qwe")
            myReg.btnRegisterr()
            expect(
            myReg.lblPasswordError().should('contain','Must be at least 6 characters.')
            )
        })
    })

describe('Valid emil Tests',() =>{
        it('User register', ()=> {
        myReg.fillEmail("abc12345@yahoo.com")
        myReg.fillFirstName("Bilal Tahir")
        myReg.fillPassword("Qwe123!@#")
        myReg.btnRegisterr()
        })
    })
})

