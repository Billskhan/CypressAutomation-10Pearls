/// <reference types="Cypress" />
import productpage from "./PageObject/ProductPage"

describe('Cart Test Suite',()=>{

    describe('Cart Add,Modify and Delete Tests',()=>{
    const product =  new productpage
    it('Add / Edit / Delete item to the cart',()=>{
        product.toNavigate()
        product.drpdwnColor('Black')
        product.drpdwnSize('M')
        product.drpdwnQuantity('2')
        product.btnAddToCard().click()
        cy.contains('View basket & check out').click()
        expect(
            cy.get('.wt-display-flex-xs > :nth-child(1) > .wt-text-heading-01').should('contain','1 item in your basket')
        )
        cy.contains('Edit').click()
        cy.get('#wt-cart-select-').select('Navy')
        cy.wait(500)
        cy.get('.wt-list-unstyled > li:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)').select('S')
        })
  

    it('Verify added item',()=>{

    })

    it('Remove item from the cart',()=>{
        product.toNavigate()
        product.drpdwnColor('Black')
        product.drpdwnSize('M')
        product.drpdwnQuantity('2')
        product.btnAddToCard().click()
        cy.contains('View basket & check out').click()
        cy.wait(1000)
        cy.contains('Remove').click()
        //cy.get('.wt-pr-xs-1 > a > .wt-btn')
        expect(
            cy.get('.wt-text-center-xs > .wt-text-heading-01').should('contain','Your basket is empty.')
        )
    })

 })
})