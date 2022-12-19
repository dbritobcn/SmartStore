import React, {useContext} from "react";
import {Form} from "react-bootstrap";
import {ProductContext} from "../../../../context/product.context";

export const SearchInput = () => {
  const { state: {filters}, setSearch } = useContext(ProductContext);

  const searchChange = (value: string) => {
    setSearch(value);
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Form.Group controlId="searchField">
        <Form.Control type="text"
                      placeholder="What are you looking for?"
                      onChange={(e) =>
                        searchChange(e.target.value)
                      }
                      value={filters.search}
        />
      </Form.Group>
    </Form>
  )
}
