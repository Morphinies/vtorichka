import * as React from "react";
import HeadBtn from "./headBtn";
import s from "./header.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { favorites } from "../../img/pictures";

const HeadNav = (): JSX.Element => {
  const navigate = useNavigate();
  const userIdLS = localStorage.getItem("user");
  const userId: string = userIdLS ? JSON.parse(userIdLS) : "";

  let currentPage = useLocation().pathname;

  const output = (): void => {
    navigate("/");
    localStorage.removeItem("user");
  };

  return (
    <nav className={s.navBlock}>
      {/* навигация главной страницы */}
      <HeadBtn icon={favorites} name={"избранное"} link={"/favorites"} />

      {(currentPage === "/" || currentPage === "/favorites") &&
        (!userId ? (
          <>
            <HeadBtn name={"регистрация"} link={"/signup"} />
            <HeadBtn name={"вход"} link={"/logup"} />
          </>
        ) : (
          <>
            <HeadBtn name={"личный кабинет"} link={"/personal/bio"} />
            <HeadBtn name={"выход"} link={"/"} action={output} />
          </>
        ))}

      {/* навигация страницы продукта */}
      {currentPage.match(/^\/\w{24}$/)?.input && (
        <>
          <HeadBtn name={"на главную"} link={"/"} />
          {userId && <HeadBtn name={"личный кабинет"} link={"/personal/bio"} />}
        </>
      )}

      {/* навигация страницы авторизации */}
      {currentPage === "/logup" && (
        <>
          <HeadBtn name={"на главную"} link={"/"} />
          {!userId && <HeadBtn name={"регистрация"} link={"/signup"} />}
        </>
      )}

      {/* навигация страницы регистрация */}
      {currentPage === "/signup" && (
        <>
          <HeadBtn name={"на главную"} link={"/"} />
          {!userId && <HeadBtn name={"вход"} link={"/logup"} />}
        </>
      )}

      {/* {навигация личной страницы */}
      {currentPage.match(/^\/personal/)?.input && (
        <>
          <HeadBtn name={"на главную"} link={"/"} />
          {userId && <HeadBtn name={"выход"} link={"/"} action={output} />}
        </>
      )}
    </nav>
  );
};

export default HeadNav;
