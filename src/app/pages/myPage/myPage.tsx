import * as React from "react";
import s from "./myPage.module.css";
import MySidebar from "./mySidebar/mySidebar";
import { Iseller } from "../../../types/types";
import { Outlet, useLoaderData } from "react-router-dom";
import ErrorMessage from "../../common/errorMes/errorMessage";

const MyPage = () => {
    const curUser = useLoaderData() as Iseller;

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
