/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
Cypress.Commands.add('login', (username: string, password: string) => {
  cy.visit('http://localhost:3000/login');
  cy.get('form').within(() => {
    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(`${password}{enter}`);
  });
});

Cypress.Commands.add(
  'signup',
  (username: string, email: string, password: string) => {
    cy.visit('http://localhost:3000/sign-up');
    cy.get('form').within(() => {
      const randomStr = (Math.random() + 1).toString(36).substring(7);
      cy.get('#username').type(`KevinLu${randomStr}`);
      cy.get('#email').type(`turnkevin${randomStr}@gmail.com`);
      cy.get('#password').type('admin123');
    });
  },
);

Cypress.Commands.add('recaptcha', () => {
  cy.get('iframe')
    .first()
    .its('0.contentDocument.body')
    .should('not.be.undefined')
    .and('not.be.empty')
    .then(cy.wrap)
    .find('#recaptcha-anchor')
    .should('be.visible')
    .click();
});

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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
