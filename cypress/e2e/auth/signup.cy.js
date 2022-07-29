describe('Signup test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/sign-up');
  });

  it.only('Login should display error message', () => {
    cy.get('#username').type('KevinLu');
    cy.get('#email').type('turnkevin@gmail.com');
    cy.get('#password').type('admin123');
    cy.get('.chakra-checkbox__control').click();
    cy.get('[data-testid="register"]').click();
    cy.get('#displayName').type('KevinLu');
    cy.get('[data-testid="continue-btn"]').click();
    cy.get(':nth-child(2) > .css-13qzv8t').click();
    cy.wait(500);
    cy.get('#g-recaptcha *> iframe').then(($iframe) => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body)
        .find('.recaptcha-checkbox-border')
        .should('be.visible')
        .click();
    });
  });
});
