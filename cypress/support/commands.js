// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (username, password) => {
  cy.get('#login-username').type(username)
  cy.get('#login-password').type(password)
  cy.get('#login').submit()
})
Cypress.Commands.add('skipGoogleReCAPTCHA', () => {
    // Wait until the iframe (Google reCAPTCHA) is totally loaded
    cy.wait(1000);
    //cy.get('#g-recaptcha *> iframe')
    cy.get('.g-recaptcha-etsy *> iframe')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body')
        cy.log($body)
        cy.wrap($body)
          .find('div.recaptcha-checkbox-border')
         // .should('be.visible')
          .click();
      });
  });