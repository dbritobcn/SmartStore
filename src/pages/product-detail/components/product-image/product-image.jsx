import React from "react";
import Image from "react-bootstrap/Image";

export const ProductImage = (props) => {
  const imageUrl = require(`../../../../assets/images/${props.imageUrl}`);

  return (
    <Image src={imageUrl} fluid={true}></Image>
  )
}
