import React from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {RootPage} from "./shared/components/root/root";
import {ErrorPage} from "./shared/components/error/error";
import {ProductModule} from "./product/presentation/product";

function App() {
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
          path: "/products/*",
          element: <ProductModule/>
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
