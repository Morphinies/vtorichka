import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./app/pages/mainPage/mainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./app/pages/authPage/loginPage";
import SignUpPage from "./app/pages/authPage/signUpPage";
import PersonalAreaPage from "./app/pages/personalAreaPage";

const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signUp", element: <SignUpPage /> },
  { path: "/personalArea", element: <PersonalAreaPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
