import React from "react";
import {ListView} from "../../components/list-view/list-view";
import {Col, Container, Row} from "react-bootstrap";
import {Breadcrumbs} from "../../components/breadcrumbs/breadcrumbs";
import {SearchInput} from "../../components/search-input/search-input";

export const ProductListPage = () => (
  <Container>
    <Row className="align-items-center mb-3">
      <Col><Breadcrumbs/></Col>
      <Col><SearchInput/></Col>
    </Row>
    <Row>
      <ListView/>
    </Row>
  </Container>
)
