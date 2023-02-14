import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import RegPage from "./app/pages/regPage";
import MainPage from "./app/pages/mainPage";
import AuthPage from "./app/pages/authPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/reg", element: <RegPage /> },
  { path: "/auth", element: <AuthPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
