import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ProductService} from "../../core/product/product.service";
import {Col, Container, Row} from "react-bootstrap";
import {ProductImage} from "./components/product-image/product-image";
import {LoadingSpinner} from "../../shared/components/loading-spinner/loading-spinner";
import {Breadcrumbs} from "../../shared/components/breadcrumbs/breadcrumbs";

export const ProductDetailPage = () => {
  const {productId} = useParams();
  const productService = new ProductService();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    productService.getProductDetail(productId).then(
      response => {
        setProduct(response);
      }
    ).catch(e => {
      navigate('/products');
    });
  }, []);

  return (
    <Container className="py-5">
      <Breadcrumbs/>
      {!product && (
        <Row className="justify-content-center">
          <LoadingSpinner/>
        </Row>
      )}
      {product && (
        <Row>
          <Col xs={12} sm={4}>
            <ProductImage imageUrl={product.imageUrl}></ProductImage>
          </Col>
          <Col xs={12} sm={8}></Col>
        </Row>
      )}
    </Container>
  )
}
