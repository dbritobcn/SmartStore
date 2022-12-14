import {ProductDto} from "../mappers/product.dto";

export class ProductHttpFacade {
  getList() {
    try {
      return fetch(`${process.env.REACT_APP_API_URL}/product`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(products => products.map(ProductDto.createFromDB));
    } catch {
      throw new Error('Error loading products');
    }
  }

  async getDetail(productId) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/product/${productId}`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(product => ProductDto.createFromDB(product));
      if (!response.id) throw new Error();
      return response;
    } catch {
      throw new Error('Product not found');
    }
  }

  async sendProduct(props) {
    try {
      return await fetch(`${process.env.REACT_APP_API_URL}/cart`, {
        method: "POST",
        body: JSON.stringify(props)
      })
        .then(response => response.json());
    } catch {
      throw new Error('Product not sent');
    }
  }
}
