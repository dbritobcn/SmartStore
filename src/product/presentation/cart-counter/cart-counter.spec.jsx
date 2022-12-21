import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {CartCounter} from './cart-counter';
import {ProductContext} from '../../context/product.context';
import {getCartCount} from "../../service/product.service";

jest.mock("../../service/product.service");

describe('CartCounter', () => {
  it('should render the cart image', () => {
    getCartCount.mockResolvedValue(1);
    render(
      <ProductContext.Provider value={{state: {cartCount: 1}, setCartCount: jest.fn()}}>
        <CartCounter />
      </ProductContext.Provider>
    );
    expect(screen.getByTestId('header-cart')).toBeInTheDocument();
    expect(screen.getByTestId('cartImage')).toBeInTheDocument();
  });

  it('should render the cart count badge when the cart count is greater than 0', () => {
    getCartCount.mockResolvedValue(1);
    render(
      <ProductContext.Provider value={{state: {cartCount: 1}, setCartCount: jest.fn()}}>
        <CartCounter />
      </ProductContext.Provider>
    );
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  it('should not render the cart count badge when the cart count is 0', () => {
    getCartCount.mockResolvedValue(0);
    render(
      <ProductContext.Provider value={{state: {cartCount: 0}, setCartCount: jest.fn()}}>
        <CartCounter />
      </ProductContext.Provider>
    );
    expect(screen.queryByTestId('counter')).toBeNull();
  });

  it('should call getCartCount and update the cart count when the component is mounted', async () => {
    const setCartCount = jest.fn();
    getCartCount.mockResolvedValue(5);
    render(
      <ProductContext.Provider value={{state: {cartCount: 0}, setCartCount}}>
        <CartCounter />
      </ProductContext.Provider>
    );
    await waitFor(() => expect(getCartCount).toHaveBeenCalledTimes(1));
    expect(setCartCount).toHaveBeenCalledWith(5);
  });
});
