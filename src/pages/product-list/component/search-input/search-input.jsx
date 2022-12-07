import React, {useContext} from "react";
import {Form} from "react-bootstrap";
import {ProductContext} from "../../../../core/context/product.context";

export const SearchInput = () => {
  const { setSearch } = useContext(ProductContext);

  const searchChange = (value: string) => {
    setSearch(value);
  };

  return (
    <Form>
      <Form.Group controlId="searchField">
        <Form.Control type="text"
                      placeholder="What are you looking for?"
                      onChange={(e) =>
                        searchChange(e.target.value)
                      }
        />
      </Form.Group>
    </Form>
  )
}
