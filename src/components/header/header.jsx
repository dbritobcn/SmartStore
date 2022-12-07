import React from 'react';
import logo from "../../assets/images/logo.svg";
import "./header.scss";
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import {Container, Row} from "react-bootstrap";

export const Header = () => {
  return (
    <div className="header mb-5">
      <Navbar className="h-100">
        <Container className="h-100">
          <Row className="justify-content-between align-items-center h-100 w-100">
            <Image src={logo} className="header__logo" alt="logo" />
          </Row>
        </Container>
      </Navbar>
    </div>
  )
}
