import React, {useContext, useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {ListItem} from "../list-item/list-item";
import {useProductList} from "../../../../hooks/useProductList";
import {LoadingSpinner} from "../../../../../shared/components/loading-spinner/loading-spinner";
import {ProductContext} from "../../../../context/product.context";

export const ListView = () => {
  const {state: {filters}} = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [getProductList] = useProductList([]);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setLoading(true);
    getProductList.then(response => {
      setProductList(response);
      setFilteredProducts(filter(response));
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!productList) return;
    const prodList = filter(productList);
    setFilteredProducts(prodList);
  }, [filters]);

  const filter = (products) => {
    return products.filter(product => product.brand.toLowerCase().includes(filters.search.toLowerCase()) || product.model.toLowerCase().includes(filters.search.toLowerCase()));
  }

  return (
    <>
      {loading && (
        <Row className="justify-content-center mt-5">
          <LoadingSpinner/>
        </Row>
      )}
      {!loading && <Row>
        {!filteredProducts.length && <p>No products</p>}
        {filteredProducts.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
            <ListItem product={product}
                      data-testid="list-item"></ListItem>
          </Col>
        ))}
      </Row>}
    </>
  )
}
