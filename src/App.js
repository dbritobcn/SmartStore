import React from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {ProductContext} from "./product/context/product.context";
import {useProducts} from "./product/hooks/useProducts";
import {ProductDetailPage} from "./product/presentation/product-detail/product-detail";
import {ProductListPage} from "./product/presentation/product-list/product-list";
import {RootPage} from "./shared/components/root/root";
import {ErrorPage} from "./shared/components/error/error";

function App() {
  const state = useProducts();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '',
          element: <Navigate to="products" replace/>
        },
        {
          path: "/products",
          element: <ProductListPage/>
        },
        {
          path: "/products/:productId",
          element: <ProductDetailPage/>
        },
      ]
    },
  ]);

  return (
    <ProductContext.Provider value={state}>
      <RouterProvider router={router}/>
    </ProductContext.Provider>
  );
}

export default App;
