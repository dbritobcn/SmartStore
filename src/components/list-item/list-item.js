import React from "react";
import Image from "react-bootstrap/Image";

export const ListItem = (props) => {
  const { product } = props;
  const thumbnailUrl = require(`../../assets/images/${product.imageUrl}`);

  return (
    <>
      <p>{product.model}</p>
      <p>{product.imageUrl}</p>
      <Image src={thumbnailUrl} thumbnail={true}></Image>
    </>
  );
}
