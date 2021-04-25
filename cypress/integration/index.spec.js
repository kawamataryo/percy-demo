describe('Index', () => {
  it('Capture a first page', () => {
    cy.visit('http://localhost:3001')

    cy.percySnapshot();
  })
})
