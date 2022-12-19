import React from "react";
import {Card} from "react-bootstrap";
import './list-item.scss';
import {useNavigate} from "react-router-dom";

export const ListItem = ({product}) => {
  const navigate = useNavigate();
  const thumbnailUrl = require(`../../../../../assets/images/${product.imageUrl}`);

  const goToDetail = () => {
    navigate(product.id, {state: product});
  };

  return (
    <Card className="list-item" data-cy="listItem" data-testid="listItem" onClick={goToDetail}>
      <Card.Img data-testid="listItemImg" src={thumbnailUrl} className="my-3 mx-auto w-75"></Card.Img>
      <Card.Body>
        <Card.Subtitle data-testid="listItemBrand">{product.brand}</Card.Subtitle>
        <Card.Title data-testid="listItemModel">{product.model}</Card.Title>
        <Card.Text data-testid="listItemPrice">{product.price}€</Card.Text>
      </Card.Body>
    </Card>
  );
}
