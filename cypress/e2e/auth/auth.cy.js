/// <reference types='cypress' />

describe('Auth Feature', function () {
  beforeEach(() => {
    cy.fixture('auth').then((data) => {
      this.authData = data;
    });
  });

  it('displays two input field by default', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('form').within(() => {
      cy.get('input').should('have.length', 2);
    });
  });

  it('navigate user to admin panel when logged in', () => {
    const { username, password } = this.authData;
    cy.login(username.valid, password.valid);
  });

  it('display error message when entered incorrect credential', () => {
    const { username, password } = this.authData;
    cy.login(username.invalid, password.invalid);
    cy.get('[data-test-id="login.error"]').should('be.visible');
  });

  it('Signup Feature', () => {
    const { username, email, password } = this.authData;
    cy.signup(username.valid, email.valid, password.valid);
    cy.get('[data-testid="checkbox"]').click();
    cy.get('[data-testid="register"]').click();
    cy.get('#displayName').type('KevinLu');
    cy.get('[data-testid="continue-btn"]').click();
    cy.get(':nth-child(2) > .css-13qzv8t').click();
    cy.recaptcha();
    cy.get('[data-testid="recaptcha-continue-btn"]').click();
  });
});
