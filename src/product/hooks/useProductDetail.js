import {useState} from "react";
import * as http from "../infrastructure/product.httpFacade";
import * as cache from "../infrastructure/product.cacheFacade";
import {useLocation} from "react-router-dom";

export const useProductDetail = (productId) => {
  const location = useLocation();
  const [state] = useState(async () => {
    if (location.state) {
      return location.state;
    }
    let value = await cache.get(`product-${productId}`);
    if (!value) {
      value = await http.getDetail(productId);
      await cache.save(`product-${productId}`, value);
    }
    return value;
  });

  return [state];
}
