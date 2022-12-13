import {useRouteError} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {Header} from "../header/header";

export const ErrorPage = () => {
  const error = useRouteError();

  return (<div id="error-page">
    <Header/>
    <Container className="py-5">
      <Row className="mt-5">
        <Col className="text-center">
          <h1>Oopsi!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </Col>
      </Row>
    </Container>
  </div>);
}
