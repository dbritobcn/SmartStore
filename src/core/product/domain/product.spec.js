import {productFixture, productWithoutBrandFixture} from "../../../fixtures/product.fixture";
import {Product} from "./product";

describe('Product', () => {
  it("should create from DB successfully", () => {
    const product = Product.createFromDB(productFixture);
    expect(product).toBeInstanceOf(Product);
  });

  xit("should get wrong parameters and fail", () => {
    const product = () => Product.createFromDB(productWithoutBrandFixture);
    expect(product).toThrow('Wrong product params');
  });
});
