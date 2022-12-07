import React from "react";
import {Card} from "react-bootstrap";
import './list-item.scss';
import {Link} from "react-router-dom";

export const ListItem = (props) => {
  const {product} = props;
  const thumbnailUrl = require(`../../assets/images/${product.imageUrl}`);

  return (
    <Link to={`${product.id}`}>
      <Card className="list-item">
        <Card.Img src={thumbnailUrl} className="my-3 mx-auto w-75"></Card.Img>
        <Card.Body>
          <Card.Subtitle>{product.brand}</Card.Subtitle>
          <Card.Title>{product.model}</Card.Title>
          <Card.Text>{product.price}€</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
