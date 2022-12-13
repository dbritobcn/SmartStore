import {render, screen} from "@testing-library/react";
import {ProductDescription} from "./product-description";
import {productFixture} from "../../../../fixtures/product.fixture";
import {Product} from "../../../../core/product/domain/product";

describe('Product description component', () => {
  it('should render appropriately', () => {
    render(<ProductDescription product={Product.createFromDB(productFixture)} />)
    expect(screen.getByText('iPhone SE')).toBeInTheDocument();
  });
});
