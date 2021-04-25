describe('Index', () => {
  it('Capture a first page', () => {
    cy.visit('http://localhost:3000')

    cy.percySnapshot();
  })
})
