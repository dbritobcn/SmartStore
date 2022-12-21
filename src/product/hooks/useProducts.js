import { useState } from "react";

const defaultState = {
  cartCount: 0,
  filters: {
    search: ''
  }
}

export const useProducts = (initialState = defaultState) => {
  const [state, setState] = useState(initialState);

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

  const setCartCount = (payload) => {
    setState({
      ...state,
      cartCount: payload
    })
  }

  return {
    state,
    setSearch,
    setCartCount
  }
}
