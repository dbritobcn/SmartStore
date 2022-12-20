import {useState} from "react";
import * as http from "../infrastructure/product.httpFacade";
import * as cache from "../infrastructure/product.cacheFacade";

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
