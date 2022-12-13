import React from "react";
import {Card} from "react-bootstrap";
import './list-item.scss';
import {useNavigate} from "react-router-dom";

export const ListItem = (props) => {
  const navigate = useNavigate();
  const {product} = props;
  const thumbnailUrl = require(`../../../../../assets/images/${product.imageUrl}`);

  const goToDetail = () => {
    navigate(product.id, {state: product});
  };

  return (
    <Card className="list-item" data-cy="listItem" onClick={goToDetail}>
      <Card.Img src={thumbnailUrl} className="my-3 mx-auto w-75"></Card.Img>
      <Card.Body>
        <Card.Subtitle>{product.brand}</Card.Subtitle>
        <Card.Title>{product.model}</Card.Title>
        <Card.Text>{product.price}€</Card.Text>
      </Card.Body>
    </Card>
  );
}
