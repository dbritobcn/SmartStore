import React, {useContext, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {addToCart} from "../../../../product.service";
import {ButtonSelector} from "../../../../../shared/components/button-selector/button-selector";
import {ProductContext} from "../../../../context/product.context";

export const ProductActions = (props) => {
  const {id, colors, storages} = props.product;
  const {setCartCount} = useContext(ProductContext);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);

  const handleAddToCart = async () => {
    const counter = await addToCart({id, selectedColor, selectedStorage});
    setCartCount(counter);
  }

  return (
    <div className="py-3">
      <h5>Storage</h5>
      <ButtonSelector options={storages}
                      optionChange={setSelectedStorage}
                      property="storage"></ButtonSelector>
      <h5>Color</h5>
      <ButtonSelector options={colors}
                      optionChange={setSelectedColor}
                      property="color"></ButtonSelector>
      <Row>
        <Col>
          <Button variant="dark" size="lg" className="w-100" onClick={handleAddToCart} data-cy="addCartButton">Add to cart</Button>
        </Col>
      </Row>
    </div>
  )
}
