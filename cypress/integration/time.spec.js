/// <reference types="cypress" />
/// <reference path="../../index.d.ts" />

describe('time', () => {
  it('should show timings', () => {
    cy.time('test')
    cy.wrap('foo').wait(300)
    cy.timeEnd('test')
      .its('duration')
      .should('be.a', 'number')
  })
})
