describe('visit aurdev', () => {
    before(() => {
    // Visit the login page which is the base url
      cy.visit('/'); // Adjust the URL if the login page is different from the base url
      
    });

    it('can login credentials', () => {
      //sign in with the test-credentials
      cy.get('#input-69').type('aur@bth.se'); 
      cy.get('#input-72').type('demo123');
      cy.contains('button', 'Sign in').click();
      
      //Make your Menu is what displays on the page when a user is signed in
      cy.contains('h1', 'Make Your Menu!').should('be.visible');
      
    });
    
})