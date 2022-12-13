import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {SearchInput} from "./component/search-input/search-input";
import {ListView} from "./component/list-view/list-view";
import './product-list.scss';
import {Breadcrumbs} from "../../../shared/components/breadcrumbs/breadcrumbs";

export const ProductListPage = () => (
  <div className="product-list-page py-5">
    <Container>
      <Row className="align-items-center mb-3">
        <Col><Breadcrumbs/></Col>
        <Col><SearchInput/></Col>
      </Row>
      <Row>
        <ListView/>
      </Row>
    </Container>
  </div>
)
