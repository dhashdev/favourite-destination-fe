// login.spec.ts
describe('Login Page', () => {
  it('should successfully log in a user', () => {
    // Visit the login page
    cy.visit('http://localhost:3000/');

    // Check if the login form elements are present
    cy.get('img[alt="Login Logo"]').should('be.visible');
    cy.get('input#userName').should('be.visible');
    cy.get('button').contains('Login').should('be.visible');

    // Enter a username
    cy.get('input#userName').type('testUser');

    // Click the login button
    cy.get('button').contains('Login').click();

    // Check if the user is redirected to the home page
    cy.url().should('include', '/home');

    // Check if the user's name is stored in local storage
    cy.window()
      .its('localStorage')
      .invoke('getItem', 'userName')
      .should('eq', 'testUser');
  });
});
