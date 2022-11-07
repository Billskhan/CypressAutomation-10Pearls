class SignIn
{

    visit(){
        cy.visit('/login')
    }
    getError(){
        
       return cy.get('.error-messages > li');
        //     alert("Get Error Alert " + JSON.stringify(x));
        //  return x;
    }
    getTitle(){
        return cy.get('h1.text-xs-center')
    }
    fillEmail(value){
        return cy.get('[type=email]')
        .clear()
        .type(value)
    }
    fillPassword(value){
        return cy.get('[type=password]')
        .clear()
        .type(value)
    }
    submit(){
        cy.get('[data-cy=signin-btn]').click()
    }

    

}
export default SignIn