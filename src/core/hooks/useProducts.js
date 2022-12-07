import { useState } from "react";

const initialState = {
  products: [],
  cartCount: 0
}

export const useProducts = () => {
  const [state, setState] = useState(initialState);

  const setProducts = (payload) => {
    setState({
      ...state,
      products: payload
    });
  }

  return {
    state,
    setProducts
  }
}
