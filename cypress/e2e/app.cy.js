/* global cy */

describe('empty spec', () => {
  it('passes', () => {
    cy.start('/products');
    cy.get('[data-cy=listItem]').first().click();
    cy.get('[data-cy=brand]').should('exist');
    cy.get('[data-cy=price]').should('exist');
    cy.get('[data-cy=logo]').should('exist');
    cy.get('[data-cy=logo]').click();
    cy.get('[data-cy=listItem]').first().should('exist');
    cy.get('[data-cy=price]').should('not.exist');
  })
})
