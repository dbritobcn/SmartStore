import React, {useContext, useEffect, useState} from 'react';
import {ProductService} from "../../core/product/product.service";
import {ProductContext} from "../../core/context/product.context";
import {ListItem} from "../list-item/list-item";
import {Col} from "react-bootstrap";

export const ListView = () => {
  const productService = new ProductService();
  const {
    state: {products, filters},
    setProducts
  } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    productService.getProductList().then(
      products => {
        setProducts(products);
        setFilteredProducts(products);
      }
    );
  }, []);

  useEffect(() => {
    if (!products) return;
    const productList = products.filter(product => product.brand.toLowerCase().includes(filters.search.toLowerCase()) || product.model.toLowerCase().includes(filters.search.toLowerCase()));
    setFilteredProducts(productList);
  }, [filters])

  return (
    <>
      {!filteredProducts.length && <p>No products</p>}
      {filteredProducts.map(product => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
          <ListItem product={product}></ListItem>
        </Col>
      ))}
    </>
  )
}
