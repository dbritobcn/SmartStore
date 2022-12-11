import {Product} from "../domain/product";

export class ProductHttpFacade {
  async getList() {
    try {
      return await fetch(`${process.env.REACT_APP_API_URL}/product`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(products => products.map(Product.createFromDB));
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
        .then(product => Product.createFromDB(product));
      if (!response.id) throw new Error();
      return response;
    } catch {
      throw new Error('Product not found');
    }
  }

  async sendProduct(props) {
    try {
      const cartCount = await fetch(`${process.env.REACT_APP_API_URL}/cart`, {
        method: "POST",
        body: JSON.stringify(props)
      })
        .then(response => response.json());
      console.log("COUNT: ", cartCount);
    } catch {
      throw new Error('Product not sent');
    }
  }
}
