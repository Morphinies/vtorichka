import ErrorMessage from "../../common/errorMes/errorMessage";
import s from "./myPage.module.css";
import MySidebar from "./mySidebar/mySidebar";
import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";

const MyPage = () => {
  const curUser = useLoaderData();

  return curUser ? (
    <main className={s.main}>
      <MySidebar />
      <Outlet />
    </main>
  ) : (
    <ErrorMessage message="Чтобы перейти в личный кабинет, пройдите авторизацию" />
  );
};

export default MyPage;
