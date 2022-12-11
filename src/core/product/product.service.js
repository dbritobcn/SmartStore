import {useState} from "react";
import {ProductHttpFacade} from "./infrastructure/product.httpFacade";
import {ProductCacheFacade} from "./infrastructure/product.cacheFacade";
import {ProductDto} from "./mappers/product.dto";

const facade = new ProductHttpFacade();
const cache = new ProductCacheFacade();

export class ProductService {
  async getProductDetail(productId) {
    return await facade.getDetail(productId);
  }

  async addToCart(props) {
    return await facade.sendProduct(
      ProductDto.sendProductToCart(props)
    );
  }
}

export const useProductList = () => {
  const [state, setState] = useState(async () => {
    let value = await cache.get();
    if (!value) {
      value = await facade.getList();
      await cache.save(value);
    }
    return value;
  })

  return [state];
}
