import { useState } from "react";

const initialState = {
  products: [],
  cartCount: 0,
  filters: {
    search: ''
  }
}

export const useProducts = () => {
  const [state, setState] = useState(initialState);

  const setProducts = (payload) => {
    setState({
      ...state,
      products: payload
    });
  }

  const setSearch = (payload) => {
    const filters = {
      ...state.filters,
      search: payload,
    };

    setState({
      ...state,
      filters,
    });
  };

  return {
    state,
    setProducts,
    setSearch
  }
}
