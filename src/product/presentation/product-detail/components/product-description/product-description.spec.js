import {render, screen} from "@testing-library/react";
import {ProductDescription} from "./product-description";
import productFixture from "../../../../../mocks/products.json";
import {ProductDto} from "../../../../mappers/product.dto";

describe('Product description component', () => {
  it('should render appropriately', () => {
    render(<ProductDescription product={ProductDto.createFromDB(productFixture[0])} />)
    expect(screen.getByText('iPhone SE')).toBeInTheDocument();
  });
});
