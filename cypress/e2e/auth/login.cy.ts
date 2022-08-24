/// <reference types='cypress' />
import authData from '../../fixtures/auth.json';

describe('Login Feature', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('displays two input field by default', () => {
    cy.get('form').within(() => {
      cy.get('input').should('have.length', 2);
    });
  });

  it('navigate user to admin panel when logged in', () => {
    const { username, password } = authData;
    cy.login(username.valid, password.valid);
    cy.url().should('contains', '/admin');
  });

  it('display error message when entered incorrect credential', () => {
    const { username, password } = authData;
    cy.login(username.invalid, password.invalid);
    cy.get('[data-test-id="login.error"]').should('be.visible');
  });
});
