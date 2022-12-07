import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Breadcrumbs} from "../../shared/components/breadcrumbs/breadcrumbs";
import {SearchInput} from "./component/search-input/search-input";
import {ListView} from "./component/list-view/list-view";

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
