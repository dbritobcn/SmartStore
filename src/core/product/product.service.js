import {useState} from "react";
import {ProductHttpFacade} from "./infrastructure/product.httpFacade";
import {ProductCacheFacade} from "./infrastructure/product.cacheFacade";
import {ProductDto} from "./mappers/product.dto";

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

export const getCartCount = async () => {
  const cartCount = await cache.get('cart');
  return cartCount || 0;
}

export const addToCart = async (props) => {
  const response = await http.sendProduct(
    ProductDto.sendProductToCart(props)
  );
  let cartCounter = 0;
  let value = await cache.get(`cart`);
  cartCounter = (value) ? value + 1 : cartCounter + 1;
  await cache.save(`cart`, cartCounter, 0);
  return cartCounter;
}
