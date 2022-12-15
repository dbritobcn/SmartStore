import React, {useContext, useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {ListItem} from "../list-item/list-item";
import {useProductList} from "../../../../hooks/useProductList";
import {LoadingSpinner} from "../../../../../shared/components/loading-spinner/loading-spinner";
import {ProductContext} from "../../../../context/product.context";

export const ListView = () => {
  const {
    state: {filters},
    setProducts
  } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [getProductList] = useProductList([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList.then(response => {
      setProducts(response);
      setProductList(response);
      setFilteredProducts(response);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, [productList]);

  useEffect(() => {
    if (!productList) return;
    setFilteredProducts(
      productList
        .filter(product =>
          product.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
          product.model.toLowerCase().includes(filters.search.toLowerCase()))
    );
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
          <ListItem product={product}
                    data-testid="list-item"></ListItem>
        </Col>
      ))}
    </>
  )
}
