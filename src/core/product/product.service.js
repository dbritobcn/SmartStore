import {useState} from "react";
import {ProductHttpFacade} from "./infrastructure/product.httpFacade";
import {ProductCacheFacade} from "./infrastructure/product.cacheFacade";
import {ProductDto} from "./mappers/product.dto";

const facade = new ProductHttpFacade();
const cache = new ProductCacheFacade();

export class ProductService {
  async addToCart(props) {
    return await facade.sendProduct(
      ProductDto.sendProductToCart(props)
    );
  }
}

export const useProductList = () => {
  const [state] = useState(async () => {
    let value = await cache.get('products');
    if (!value) {
      value = await facade.getList();
      await cache.save('products', value);
    }
    return value;
  });

  return [state];
}

export const useProductDetail = (productId) => {
  const [state] = useState(async () => {
    let value = await cache.get(`product-${productId}`);
    if (!value) {
      value = await facade.getDetail(productId);
      await cache.save(`product-${productId}`, value);
    }
    return value;
  });

  return [state];
}
