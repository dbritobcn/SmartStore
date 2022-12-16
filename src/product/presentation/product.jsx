import React from "react";
import {useProducts} from "../hooks/useProducts";
import {ProductContext} from "../context/product.context";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import {ProductListPage} from "./product-list/product-list";
import {ProductDetailPage} from "./product-detail/product-detail";
import {ProductHeader} from "./header/header";

export const ProductModule = () => {
  const state = useProducts();

  return (
    <ProductContext.Provider value={state}>
      <ProductHeader/>
      <Routes>
        <Route path='' element={<ProductListPage/>}></Route>
        <Route path=':productId' element={<ProductDetailPage/>}></Route>
        <Route path='*' element={<Navigate to={'/'}/>}></Route>
      </Routes>
      <Outlet/>
    </ProductContext.Provider>
  )
}
