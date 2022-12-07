import {ProductFacade} from "./infrastructure/product.facade";

export class ProductService {
  productFacade = new ProductFacade();

  async getProductList() {
    return await this.productFacade.getList();
  }
}
