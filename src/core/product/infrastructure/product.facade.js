import {Product} from "../domain/product";

export class ProductFacade {
  async getList() {
    return await fetch(`${process.env.REACT_APP_API_URL}/products`, {
      method: "GET"
    })
      .then(response => response.json())
      .then(products => products.map(product => Product.createFromDB(product)));
  }
}
