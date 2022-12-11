import React, {useContext, useEffect} from "react";
import Image from "react-bootstrap/Image";
import {Badge} from "react-bootstrap";
import CartImage from '../../../../assets/images/cart.svg';
import {ProductContext} from "../../../../core/context/product.context";
import './header-cart.scss'
import {getCartCount} from "../../../../core/product/product.service";

export const HeaderCart = () => {
  const {state: {cartCount}, setCartCount} = useContext(ProductContext);

  useEffect(() => {
    getCartCount().then((data) => {
        setCartCount(data);
    });
  }, []);

  return (
    <div className="header-cart">
      <Image src={CartImage}></Image>
      {cartCount > 0 && <Badge bg="secondary">{cartCount}</Badge>}
    </div>
  )
}
