import {Product} from "../domain/product";

export class ProductFacade {
  async getList() {
    return await fetch(`${process.env.REACT_APP_API_URL}/product`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(products => products.map(product => Product.createFromDB(product)));
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
    } catch(e) {
      throw new Error('Product not found');
    }
  }
}
