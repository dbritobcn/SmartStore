import {useProducts} from "./core/hooks/useProducts";
import {ProductContext} from "./core/context/product.context";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {ErrorPage} from "./pages/error/error";
import React from "react";
import {RootPage} from "./pages/root/root";
import {ProductDetailPage} from "./pages/product-detail/product-detail";
import {ProductListPage} from "./pages/product-list/product-list";
import {ProductService} from "./core/product/product.service";

function App() {
  const productService = new ProductService();
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
          path: "products/",
          element: <ProductListPage/>,
        },
        {
          path: "products/:productId",
          element: <ProductDetailPage/>,
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
