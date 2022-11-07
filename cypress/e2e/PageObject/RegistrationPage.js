class Registration{

    nevigate(){
        cy.visit('https://www.etsy.com/join?from_page=https%3A%2F%2Fwww.etsy.com%2F&from_action=&ref=hdr')
    }

    fillEmail(txtEmail){
        return cy.get('[id=join_neu_email_field]')
        .clear()
        .type(txtEmail)
    }

    fillFirstName(txtFirstName){
        return cy.get('[id=join_neu_first_name_field]')
        .clear()
        .type(txtFirstName)   
    }

    fillPassword(txtPassword){
        return cy.get('[id=join_neu_password_field]')
        .clear()
        .type(txtPassword)  
    }
    
    btnRegisterr(){
        cy.get('[type=submit]').click()
    }

    lblPasswordQualityMessage(){
        return cy.get('.password-message-open')
    }
    lblEmailError(){
        return cy.get('[id=aria-join_neu_email_field-error]')
    }
    lblPasswordError(){
        return cy.get('[id=aria-join_neu_password_field-error]')
    }
    
}

// cy.get('#join-neu-overlay-title')

// cy.get('.password-message-open')

// cy.get('.password-tips-bold')

// cy.get('.password-tips-text')


export default Registration


