import {productFixture, productWithoutBrandFixture} from "../../../fixtures/product.fixture";
import {Product} from "./product";

describe('Product', () => {
  it("should create from DB successfully", () => {
    const product = Product.createFromDB(productFixture);
    expect(product).toBeInstanceOf(Product);
    expect(product.brand).toBe(productFixture.brand);
  });

  it("should get wrong parameters and fail", () => {
    const product = Product.createFromDB(productWithoutBrandFixture);
    expect(product.brand).toBeUndefined();
  });
});
