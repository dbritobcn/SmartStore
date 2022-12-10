import React, {useState} from "react";
import {ButtonSelector} from "../../../../shared/components/button-selector/button-selector";
import {Button, Col, Row} from "react-bootstrap";
import {ProductService} from "../../../../core/product/product.service";

export const ProductActions = (props) => {
  const productService = new ProductService();
  const {id, colors, storages} = props.product;
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);

  const addToCart = async () => {
    await productService.addToCart({id, selectedColor, selectedStorage});
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
          <Button variant="dark" size="lg" className="w-100" onClick={addToCart}>Add to cart</Button>
        </Col>
      </Row>
    </div>
  )
}
