import React from 'react';
import "../../../assets/scss/header.scss";
import Navbar from 'react-bootstrap/Navbar';
import {Container, Row} from "react-bootstrap";
import {CartCounter} from "../../../product/presentation/cart-counter/cart-counter";
import {HeaderLogo} from "../../../shared/components/header-logo/header-logo";

export const ProductHeader = () => {
  return (
    <div className="header">
      <Navbar className="h-100">
        <Container className="h-100">
          <Row className="justify-content-between align-items-center h-100 w-100">
            <HeaderLogo/>
            <CartCounter></CartCounter>
          </Row>
        </Container>
      </Navbar>
    </div>
  )
}
