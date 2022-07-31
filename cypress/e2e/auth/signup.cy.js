describe(
  'Signup test',
  {
    env: {
      chromeWebSecurity: false,
    },
  },
  () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/sign-up');
    });

    it.only('Login should display error message', () => {
      let randomStr = (Math.random() + 1).toString(36).substring(7);
      cy.get('#username').type(`KevinLu${randomStr}`);
      cy.get('#email').type(`turnkevin${randomStr}@gmail.com`);
      cy.get('#password').type('admin123');
      cy.get('[data-testid="checkbox"]').click();
      cy.get('[data-testid="register"]').click();
      cy.get('#displayName').type('KevinLu');
      cy.get('[data-testid="continue-btn"]').click();
      cy.get(':nth-child(2) > .css-13qzv8t').click();
    });
  },
);
