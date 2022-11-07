class ProductPage{

    toNavigate(){
        cy.visit('https://www.etsy.com/listing/1083350934/do-or-do-not-there-is-no-try-t-shirt?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=&ref=sc_gallery-1-1&sts=1&plkey=f6089fff1cea509b67113957912f52e91787af3f%3A1083350934')
    }
    drpdwnColor(color){
    cy.wait(1000)
    return cy.get('[id=variation-selector-0]').select(color)
    }
    drpdwnSize(size){
    cy.wait(1000)
    return cy.get('[id=variation-selector-1]').select(size)
    }
    drpdwnQuantity(quantity){
        cy.wait(1000)
        return cy.get('[id=listing-page-quantity-select]').select(quantity)
    }
    btnAddToCard(){
    return cy.get('.add-to-cart-form > div.wt-width-full > .wt-btn')
    }

}
export default ProductPage