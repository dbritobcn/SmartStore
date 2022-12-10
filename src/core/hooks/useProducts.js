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

  const setCartCount = () => {
    setState({
      ...state,
      cartCount: state.cartCount + 1
    })
  }

  return {
    state,
    setProducts,
    setSearch,
    setCartCount
  }
}
