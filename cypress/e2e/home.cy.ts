describe('Home Page', () => {
  beforeEach(() => {
    // Login before each test
    cy.visit('http://localhost:3000/'); // Adjust the URL if needed
    cy.get('#userName').type('your_username'); // Replace with your login logic
    cy.get('button').contains('Login').click();
    cy.url().should('include', 'http://localhost:3000/home'); // Assuming successful login redirects to /home
  });

  it('loads successfully', () => {
    // Now we are already on the Home page due to the login
    // No need to visit '/home' again

    // Check if the page contains the expected elements
    cy.contains('Select to Know more about your next destination spot!').should(
      'exist'
    );
    cy.get('.citiesContainer').should('exist');
    cy.get('.citiesGrid').should('exist');
  });
  it('displays city cards after loading', () => {
    // Wait for the loading spinner to disappear
    cy.get('[data-testid="loading-container"]').should('not.exist', {
      timeout: 10000,
    });

    // Wait for city cards to be rendered
    cy.get('[data-testid^="city-card-"]', { timeout: 10000 }).should(
      'have.length.greaterThan',
      0
    );
  });

  it('navigates to city details on card click', () => {
    // No need to visit '/home' again, as we are already there

    // Wait for the loading spinner to disappear
    cy.get('[data-testid="loading-container"]').should('not.exist');

    // Click on the first city card
    cy.get('[data-testid^="city-card-"]').first().click();

    // Assert that the URL has changed to a city details page
    cy.url().should('match', /http:\/\/localhost:3000\/cities\/\d+/);
  });
});
