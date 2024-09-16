describe('visit petstore', () => {
    it('navigate to fish page', () => {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        cy.get('div[id=SidebarContent]')
          .children()
          .first()
          .click()
        cy.contains('Tiger Shark').should('exist')
    })
})