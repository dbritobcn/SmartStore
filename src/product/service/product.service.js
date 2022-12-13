import {ProductHttpFacade} from "../infrastructure/product.httpFacade";
import {ProductCacheFacade} from "../infrastructure/product.cacheFacade";
import {ProductDto} from "../mappers/product.dto";

const http = new ProductHttpFacade();
const cache = new ProductCacheFacade();

export const getCartCount = async () => {
  const cartCount = await cache.get('cart');
  return cartCount || 0;
}

export const addToCart = async (props) => {
  const response = await http.sendProduct(
    ProductDto.sendToCart(props)
  );
  await cache.save(`cart`, response.count, 0);
  return response.count;
}
