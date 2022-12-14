/* global cy, before */

import {ProductDescription} from "../../src/product/presentation/product-detail/components/product-description/product-description";
import React from "react";
import * as product from '../fixtures/product.json';

describe('product-description.cy.js', () => {
  it('Dom', () => {
    cy.mount(<ProductDescription product={product}></ProductDescription>);
    cy.get('[data-cy=brand]').should('exist');
    cy.get('[data-cy=model]').should('exist');
    cy.get('[data-cy=price]').should('exist');
    cy.get('[data-cy=cpu]').should('exist');
    cy.get('[data-cy=ram]').should('exist');
    cy.get('[data-cy=so]').should('exist');
    cy.get('[data-cy=screenResolution]').should('exist');
    cy.get('[data-cy=battery]').should('exist');
    cy.get('[data-cy=camera]').should('exist');
    cy.get('[data-cy=size]').should('exist');
    cy.get('[data-cy=weight]').should('exist');
  })
})
