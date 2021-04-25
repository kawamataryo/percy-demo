/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Capture initial page', () => {
    cy.percySnapshot();
  })
})
