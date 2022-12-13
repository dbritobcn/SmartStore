import {render, screen} from '@testing-library/react';
import React from 'react';
import {ListView} from './list-view';
import {useProductList} from "../../../../core/product/product.service";
import {productListFixture} from "../../../../../fixtures/product.fixture";

jest.mock('../../../../core/product/product.service');

describe('ListView', () => {
  beforeEach(() => {
    useProductList.mockImplementation(() => Promise.resolve(productListFixture));
  });

  xit('should render list after successful request', async () => {
    render(<ListView/>);
    expect(screen.getAllByTestId('list-item')).toHaveLength(2)
  });
});
