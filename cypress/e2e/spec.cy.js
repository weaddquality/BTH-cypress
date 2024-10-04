describe('visit aurdev', () => {
    before(() => {
    // Visit the login page which is the base url
      cy.visit('/'); // Adjust the URL if the login page is different from the base url

      cy.fixture('credentials').then((creds) => {
        // Use the loaded credentials
        cy.get('#input-69').type(creds.email);
        cy.get('#input-72').type(creds.password);
        cy.contains('button', 'Sign in').should('exist').should('be.visible').should('not.be.disabled').click();
      });
      
      //Assert that "Make your Menu" is what displays on the page when a user is signed in
      cy.contains('h1', 'Make Your Menu!').should('be.visible');
      
    });

    it('can go to victuals and add an item to the cart', () => {
     
      cy.get('.mdi-menu').click();
      cy.get('.v-list-item--active > .v-list-item__content > .v-list-item__title').click();
      cy.get('.mdi-food-apple').click();

      // Select the first row and the specific button within it
      cy.get('tbody tr').first().within(() => {
      // Find the button with the class 'mdi-cart-plus' in the first row and click it
        cy.get('button.mdi-cart-plus').should('exist').should('be.visible').should('not.be.disabled').click();
      });

      
      cy.get('.mdi-cart-outline').should('be.visible').click();

    });
    
})