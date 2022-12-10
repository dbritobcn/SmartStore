import {ProductFacade} from "./infrastructure/product.facade";
import {ProductDto} from "./mappers/product.dto";

export class ProductService {
  productFacade = new ProductFacade();

  async getProductList() {
    return await this.productFacade.getList();
  }

  async getProductDetail(productId) {
    return await this.productFacade.getDetail(productId);
  }

  async addToCart(props) {
    return await this.productFacade.sendProduct(
      ProductDto.sendProductToCart(props)
    );
  }
}
