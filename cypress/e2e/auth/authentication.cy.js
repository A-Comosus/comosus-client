describe('Authentication test', () => {
  beforeEach(() => {
    cy.visit('https://uat.a-comosus.link/admin');
  });
  it('Should load dashboard correctly', () => {
    cy.log('Checking for sidebar');
    cy.contains('Links').should('exist');
    cy.contains('Appearance').should('exist');
    cy.contains('Logout').should('exist');
  });
});
