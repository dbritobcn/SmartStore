import React, {useContext} from "react";
import {ProductContext} from "../../../../context/product.context";
import {Button, Col, Row} from "react-bootstrap";

export const ClearFilters = () => {
  const {state: {filters}, setSearch} = useContext(ProductContext);

  return (
    <Row className="justify-content-xs-center mb-3">
      <Col xs>
        {filters.search.length > 0 && <Button onClick={() => setSearch('')} variant="outline-dark" size="sm">x Clear filters</Button>}
      </Col>
    </Row>
  )
}
