import {useState} from "react";
import {ProductHttpFacade} from "../infrastructure/product.httpFacade";
import {ProductCacheFacade} from "../infrastructure/product.cacheFacade";

const http = new ProductHttpFacade();
const cache = new ProductCacheFacade();

export const useProductList = () => {
  const [state] = useState(async () => {
    let value = await cache.get('products');
    if (!value) {
      value = await http.getList();
      await cache.save('products', value);
    }
    return value;
  });

  return [state];
}
