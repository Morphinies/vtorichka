import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./app/pages/mainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./app/pages/loginPage";
import SignUpPage from "./app/pages/signUpPage";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signUp", element: <SignUpPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
