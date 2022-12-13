import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import {ProductImage} from "./components/product-image/product-image";
import {ProductDescription} from "./components/product-description/product-description";
import {ProductActions} from "./components/product-actions/product-actions";
import {useProductDetail} from "../../product.service";
import {LoadingSpinner} from "../../../shared/components/loading-spinner/loading-spinner";
import {Breadcrumbs} from "../../../shared/components/breadcrumbs/breadcrumbs";
import {BackButton} from "../../../shared/components/back-button/back-button";

export const ProductDetailPage = () => {
  const {productId} = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [getProductDetail] = useProductDetail(productId)

  useEffect(() => {
    getProductDetail.then(
      response => {
        setProduct(response);
      }
    ).catch(e => {
      navigate('/products');
    });
  }, []);

  return (
    <Container className="py-5">
      {!product && (
        <Row className="justify-content-center">
          <LoadingSpinner/>
        </Row>
      )}
      {product && (
        <>
          <Row>
            <Breadcrumbs title={product.model}/>
          </Row>
          <Row>
            <Col className="mb-3">
              <BackButton/>
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={6}>
              <ProductImage imageUrl={product.imageUrl}></ProductImage>
            </Col>
            <Col md={8} lg={6}>
              <ProductDescription product={product}></ProductDescription>
              <ProductActions product={product}></ProductActions>
            </Col>
          </Row>
        </>
      )}
    </Container>
  )
}
