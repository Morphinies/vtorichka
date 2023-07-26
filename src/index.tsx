import "./style.css";
import Root from "./root";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import MyPage from "./app/pages/myPage/myPage";
import User from "./app/pages/myPage/user/user";
import MainPage from "./app/pages/mainPage/mainPage";
import ProdPage from "./app/pages/prodPage/prodPage";
import Logup from "./app/pages/authPage/logup/logup";
import { prodLoader } from "./app/loaders/prodLoader";
import ErrorPage from "./app/pages/errorPage/errorPage";
import Signup from "./app/pages/authPage/signup/signup";
import MySales from "./app/pages/myPage/mySales/mySales";
import { curUserloader } from "./app/loaders/curUserLoader";
// import { prodListLoader } from "./app/loaders/prodListLoader";
import ProdCard from "./app/pages/prodPage/prodCard/prodCard";
import MyProducts from "./app/pages/myPage/myProducts/myProducts";
import ProdEditor from "./app/pages/editPage/prodEditor/prodEditor";
import UserEditor from "./app/pages/editPage/userEditor/userEditor";
import { userProductsLoader } from "./app/loaders/userProductsLoader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favorites from "./app/pages/favoritesPage/favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // регистрация
      {
        path: "signup",
        loader: curUserloader,
        element: <Signup />,
      },
      // авторизация
      { path: "logup", loader: curUserloader, element: <Logup /> },
      // главная
      {
        path: "",
        // loader: prodListLoader,
        element: <MainPage />,
      },
      // избранное
      {
        path: "/favorites",
        element: <Favorites />,
      },
      // карточка объявления
      {
        path: ":prodId",
        loader: prodLoader,
        element: <ProdPage />,
      },
      // страница пользователя
      {
        path: "personal",
        element: <MyPage />,
        loader: curUserloader,
        children: [
          // объявления пользователя
          {
            path: "products",
            loader: userProductsLoader,
            element: <MyProducts />,
          },
          // карточка объявления
          {
            path: "products/:prodId",
            loader: prodLoader,
            element: <ProdCard />,
          },
          // редактор объявления
          {
            path: "products/editor/:prodId",
            loader: prodLoader,
            element: <ProdEditor />,
          },
          // редактор добавления объявления
          {
            path: "products/addProd",
            element: <ProdEditor />,
          },
          // закрытые объявления пользователя
          {
            path: "sales",
            element: <MySales />,
          },
          // данные пользователя
          {
            path: "bio",
            element: <User />,
            loader: curUserloader,
          },
          // редактор пользователя
          {
            path: "bio/editor",
            loader: curUserloader,
            element: <UserEditor />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
