import {useState} from "react";
import {ProductHttpFacade} from "../infrastructure/product.httpFacade";
import {ProductCacheFacade} from "../infrastructure/product.cacheFacade";

const http = new ProductHttpFacade();
const cache = new ProductCacheFacade();

export const useProductDetail = (productId) => {
  const [state] = useState(async () => {
    let value = await cache.get(`product-${productId}`);
    if (!value) {
      value = await http.getDetail(productId);
      await cache.save(`product-${productId}`, value);
    }
    return value;
  });

  return [state];
}
