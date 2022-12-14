import React, {useContext, useEffect} from "react";
import Image from "react-bootstrap/Image";
import {Badge} from "react-bootstrap";
import CartImage from '../../../assets/images/cart.svg';
import './cart-counter.scss'
import {ProductContext} from "../../context/product.context";
import {getCartCount} from "../../service/product.service";

export const CartCounter = () => {
  const {state: {cartCount}, setCartCount} = useContext(ProductContext);

  useEffect(() => {
    getCartCount().then((data) => {
      setCartCount(data);
    });
  }, [cartCount]);

  return (
    <div className="header-cart">
      <Image src={CartImage}></Image>
      {cartCount > 0 && <Badge bg="secondary">{cartCount}</Badge>}
    </div>
  )
}
