import * as React from "react";
import HeadBtn from "./headBtn";
import s from "./header.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { heart, home, exit, user, lock } from "../../img/pictures";

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
            {currentPage !== "/favorites" && (
                <HeadBtn name={"избранное"} link={"/favorites"} icon={heart} />
            )}

            {/* навигация страницы избранное */}
            {currentPage === "/favorites" && (
                <>
                    <HeadBtn icon={home} name={"на главную"} link={"/"} />
                </>
            )}

            {(currentPage === "/" || currentPage === "/favorites") &&
                (!userId ? (
                    <>
                        <HeadBtn name={"вход"} link={"/auth"} icon={lock} />
                    </>
                ) : (
                    <>
                        <HeadBtn
                            name={"личный кабинет"}
                            link={"/personal/bio"}
                            icon={user}
                        />
                        <HeadBtn
                            link={"/"}
                            icon={exit}
                            name={"выход"}
                            action={output}
                        />
                    </>
                ))}

            {/* навигация страницы продукта */}
            {currentPage.match(/^\/\w{24}$/)?.input && (
                <>
                    <HeadBtn icon={home} name={"на главную"} link={"/"} />
                    {userId && (
                        <HeadBtn
                            name={"личный кабинет"}
                            link={"/personal/bio"}
                            icon={user}
                        />
                    )}
                </>
            )}

            {/* навигация страницы авторизации */}
            {currentPage === "/auth" && (
                <HeadBtn icon={home} name={"на главную"} link={"/"} />
            )}

            {/* {навигация личной страницы */}
            {currentPage.match(/^\/personal/)?.input && (
                <>
                    <HeadBtn icon={home} name={"на главную"} link={"/"} />
                    {userId && (
                        <HeadBtn
                            link={"/"}
                            icon={exit}
                            name={"выход"}
                            action={output}
                        />
                    )}
                </>
            )}
        </nav>
    );
};

export default HeadNav;
