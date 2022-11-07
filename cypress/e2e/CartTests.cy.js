/// <reference types="Cypress" />
describe('Cart Test Suite',()=>{

    it('Add / Edit / Delete item to the cart',()=>{
        cy.visit('https://www.etsy.com/listing/1083350934/do-or-do-not-there-is-no-try-t-shirt?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=&ref=sc_gallery-1-1&sts=1&plkey=f6089fff1cea509b67113957912f52e91787af3f%3A1083350934')
        cy.get('[id=variation-selector-0]').select('Black')
        //cy.get('[id=variation-selector-0]').select('Black')
        cy.wait(1000)
        cy.get('#variation-selector-1').select('M')
        cy.wait(1000)
        cy.get('[id=listing-page-quantity-select]').select('2')
        cy.wait(1000)
        cy.get('.add-to-cart-form > div.wt-width-full > .wt-btn').click()
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
        cy.visit('https://www.etsy.com/listing/1083350934/do-or-do-not-there-is-no-try-t-shirt?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=&ref=sc_gallery-1-1&sts=1&plkey=f6089fff1cea509b67113957912f52e91787af3f%3A1083350934')
        cy.get('[id=variation-selector-0]').select('Black')
        //cy.get('[id=variation-selector-0]').select('Black')
        cy.wait(1000)
        cy.get('#variation-selector-1').select('M')
        cy.wait(1000)
        cy.get('[id=listing-page-quantity-select]').select('2')
        cy.wait(1000)
        cy.get('.add-to-cart-form > div.wt-width-full > .wt-btn').click()
        cy.wait(800)
        cy.contains('View basket & check out').click()
        cy.wait(1000)
        cy.contains('Remove').click()
        //cy.get('.wt-pr-xs-1 > a > .wt-btn')
        expect(
            cy.get('.wt-text-center-xs > .wt-text-heading-01').should('contain','Your basket is empty.')
        )
    })

})