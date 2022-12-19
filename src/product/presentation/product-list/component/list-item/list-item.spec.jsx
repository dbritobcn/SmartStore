import {cleanup, render, screen} from "@testing-library/react";
import {ListItem} from "./list-item";
import products from '../../../../../mocks/products.json';
import {ProductDto} from "../../../../mappers/product.dto";

jest.mock("react-router-dom");

describe('List item', () => {
  afterEach(() => {
    cleanup();
  });

  it('should change the value on select an option', () => {
    const product = ProductDto.createFromDB(products[0]);
    render(<ListItem product={product}></ListItem>);
    expect(screen.getByTestId('listItemImg')).toHaveAttribute('src', product.imageUrl);
    expect(screen.getByTestId('listItemBrand')).toHaveTextContent('Apple');
    expect(screen.getByTestId('listItemModel')).toHaveTextContent('iPhone SE');
    expect(screen.getByTestId('listItemPrice')).toHaveTextContent('245');
  });
});
