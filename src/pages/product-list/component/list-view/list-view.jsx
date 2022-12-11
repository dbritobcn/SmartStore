import React, {useContext, useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {ListItem} from "../list-item/list-item";
import {useProductList} from "../../../../core/product/product.service";
import {ProductContext} from "../../../../core/context/product.context";
import {LoadingSpinner} from "../../../../shared/components/loading-spinner/loading-spinner";

export const ListView = () => {
  const {
    state: {products, filters},
    setProducts
  } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [getProductList] = useProductList([]);

  useEffect(() => {
    getProductList.then(products => {
      setProducts(products);
      setFilteredProducts(products);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!products) return;
    const productList = products.filter(product => product.brand.toLowerCase().includes(filters.search.toLowerCase()) || product.model.toLowerCase().includes(filters.search.toLowerCase()));
    setFilteredProducts(productList);
  }, [filters])

  return (
    <>
      {loading && (
        <Row className="justify-content-center mt-5">
          <LoadingSpinner/>
        </Row>
      )}
      {!loading && !filteredProducts.length && <p>No products</p>}
      {filteredProducts.map(product => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
          <ListItem product={product}></ListItem>
        </Col>
      ))}
    </>
  )
}
