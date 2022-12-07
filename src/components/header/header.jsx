import React from 'react';
import logo from "../../assets/images/logo.svg";
import "./header.scss";
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'

export const Header = () => {
  return (
    <div>
      <Navbar className="header">
        <Image src={logo} className="logo" alt="logo" />
      </Navbar>
    </div>
  )
}
