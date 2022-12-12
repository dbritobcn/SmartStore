/* global cy, before */

import React from "react";
import * as product from '../fixtures/product.json';
import {ButtonSelector} from "../../src/shared/components/button-selector/button-selector";

describe('button-selector.cy.js', () => {
  it('Dom', () => {
    const selectedOptions = ['0001', '0002', '0001', '0002'];
    let index = 0;
    cy.mount(<ButtonSelector options={product.storages}
                             optionChange={(value) => {
                               expect(value).equal(selectedOptions[index]);
                               index++;
                             }}
                             property="storage"></ButtonSelector>);
    cy.get('[data-cy=buttonGroup]').should('exist');
    cy.get('[for=storage-0]').should('exist');
    cy.get('[for=storage-1]').should('exist');
    cy.get('[for=storage-1]').click();
    cy.get('[for=storage-0]').click();
    cy.get('[for=storage-1]').click();
  })
})
