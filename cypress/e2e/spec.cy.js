describe('visit petstore', () => {
    it('visit', () => {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    })
})