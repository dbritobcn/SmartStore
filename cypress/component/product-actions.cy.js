/* global cy, before */

import React from "react";
import * as product from '../fixtures/product.json';
import {ProductActions} from "../../src/pages/product-detail/components/product-actions/product-actions";

describe('product-actions.cy.js', () => {
  it('Dom', () => {
    cy.mount(<ProductActions product={product}></ProductActions>);
    cy.get('[data-cy=addCartButton]').should('exist');
  })
})
