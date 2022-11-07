class Login
{

    toNavigate(){
        cy.visit('/signin')
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
        cy.get('[type=submit]').click()
    }
    loginName(){
        return cy.get('.wt-hide-xs > .wt-text-link')
    }
    emailError(){
        return cy.get('[id=aria-join_neu_email_field-error]')
    }
    passwordError(){
        return cy.get('[id=aria-join_neu_password_field-error]')
    }
}
export default Login