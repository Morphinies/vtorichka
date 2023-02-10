import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./app/page/mainPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <MainPage /> }]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
