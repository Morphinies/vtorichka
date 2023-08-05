import * as React from "react";
import SidebarBtn from "./sidebarBtn";
import s from "../myPage.module.css";

const MySidebar = (): JSX.Element => {
    return (
        <aside className={s.aside}>
            <SidebarBtn link="bio" btnName="личные данные" />
            <SidebarBtn link="products" btnName="мои товары" />
            <SidebarBtn link="sales" btnName="продажи" />
        </aside>
    );
};

export default MySidebar;
