describe('visit petstore', () => {
    it('navigate to fish page', () => {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        cy.get('div[id=SidebarContent]')
          .children()
          .first()
          .click()
        cy.contains('Tiger Shark').should('exist')
    })

    it('navigate to base page', () => {
      cy.visit('http://aurdev.diptsrv003.bth.se/')
      cy.title().should('eq', 'make-your-menu')
    })
})