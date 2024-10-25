import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Product from "./Pages/Product.jsx";
import SingleProduct from "./Pages/SingleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "singleproduct",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Not Found!!</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
