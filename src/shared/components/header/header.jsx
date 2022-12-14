import React from 'react';
import "../../../assets/scss/header.scss";
import Navbar from 'react-bootstrap/Navbar';
import {Container, Row} from "react-bootstrap";
import {HeaderLogo} from "../header-logo/header-logo";

export const Header = () => {
  return (
    <div className="header">
      <Navbar className="h-100">
        <Container className="h-100">
          <Row className="justify-content-between align-items-center h-100 w-100">
            <HeaderLogo/>
          </Row>
        </Container>
      </Navbar>
    </div>
  )
}
