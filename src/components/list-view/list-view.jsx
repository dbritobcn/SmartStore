import React, {useContext, useEffect} from 'react';
import {ProductService} from "../../core/product/product.service";
import {ProductContext} from "../../core/context/product.context";
import {ListItem} from "../list-item/list-item";
import {Col, Container, Row} from "react-bootstrap";
import {Breadcrumbs} from "../breadcrumbs/breadcrumbs";

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
        <Col><Breadcrumbs></Breadcrumbs></Col>
      </Row>
      <Row>
        {!products.length && <p>No products</p>}
        {products.map(product => (
          <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
            <ListItem key={product.id} product={product}></ListItem>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
