import React from "react";
import Image from "react-bootstrap/Image";
import logo from "../../../assets/images/logo.svg";
import {Link} from "react-router-dom";
import './header-logo.scss';

export const HeaderLogo = () => (
  <Link to={'/'} className="logo">
    <Image src={logo} alt="logo" className="logo__image" />
  </Link>
)
