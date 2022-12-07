import React, {useContext, useEffect} from 'react';
import {ProductService} from "../../core/product/product.service";
import {ProductContext} from "../../core/context/product.context";
import {ListItem} from "../list-item/list-item";
import {Col, Container, Row} from "react-bootstrap";

export const ListView = () => {
  const productService = new ProductService();
  const {
    state: {products},
    setProducts
  } = useContext(ProductContext);

  useEffect(() => {
    productService.getProductList().then(
      products => {
        setProducts(products);
      }
    );
  }, [setProducts]);

  return (
    <Container>
      <Row>
        {!products.length && <p>No products</p>}
        {products.map(product => (
          <Col xs={12} md={8}>
            <ListItem key={product.id} product={product}></ListItem>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
