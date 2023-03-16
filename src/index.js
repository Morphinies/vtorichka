import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./app/pages/mainPage/mainPage";
import LoginPage from "./app/pages/authPage/loginPage";
import SignUpPage from "./app/pages/authPage/signUpPage";
import MySales from "./app/pages/personalPage/mySales/mySales";
import PersonalPage from "./app/pages/personalPage/personalPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyProducts from "./app/pages/personalPage/myProducts/myProducts";
import User from "./app/pages/personalPage/user/user";
import ProductCard from "./app/common/productCard/productCard";
import Editor from "./app/pages/personalPage/myProducts/editor/editor";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signUp", element: <SignUpPage /> },
  {
    path: "/personal",
    element: <PersonalPage />,
    children: [
      {
        path: "/personal/bio",
        element: <User />,
      },
      {
        path: "/personal/products",
        element: <MyProducts />,
      },
      {
        path: "/personal/sales",
        element: <MySales />,
      },
    ],
  },
  { path: "/products/:id", element: <ProductCard /> },
  {
    path: "/editor/:id",
    element: <Editor />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
