/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Capture initial page', () => {
    cy.percySnapshot();
  })

  it('Capture count up 2', () => {
    cy.percySnapshot();
    cy.get('[data-cy=submit]').click()
    cy.get('[data-cy=submit]').click()
    cy.percySnapshot();
  })
})
