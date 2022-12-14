import React from "react";
import Image from "react-bootstrap/Image";

export const ProductImage = ({imageUrl}) => {
  const image = require(`../../../../../assets/images/${imageUrl}`);

  return (
    <Image src={image} fluid={true}></Image>
  )
}
