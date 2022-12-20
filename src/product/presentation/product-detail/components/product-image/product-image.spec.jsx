import {ProductImage} from "./product-image";
import products from '../../../../../mocks/products.json';
import {ProductDto} from "../../../../mappers/product.dto";
import {render, screen} from "@testing-library/react";

describe('Product image', () => {
  it('should render an image', () => {
    const product = ProductDto.createFromDB(products[0]);
    render(<ProductImage imageUrl={product.imageUrl}></ProductImage>);
    expect(screen.getByTestId('image')).toBeInTheDocument();
    expect(screen.getByTestId('image')).toHaveAttribute('src', product.imageUrl);
  });
});
