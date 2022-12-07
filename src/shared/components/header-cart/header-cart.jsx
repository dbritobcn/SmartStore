import React, {useContext} from "react";
import Image from "react-bootstrap/Image";
import {Badge} from "react-bootstrap";
import CartImage from '../../../assets/images/cart.svg';
import './header-cart.scss'
import {ProductContext} from "../../../core/context/product.context";

export const HeaderCart = () => {
  const {state: {cartCount}} = useContext(ProductContext);

  return (
    <div className="header-cart">
      <Image src={CartImage}></Image>
      {cartCount > 0 && <Badge bg="secondary">{cartCount}</Badge>}
    </div>
  )
}
