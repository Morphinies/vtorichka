import * as React from "react";
import s from "./products.module.css";
import { cloud } from "../../img/pictures";

const NoProdsMes = () => {
    return (
        <div className={s.noProdsWrapper}>
            <img className={s.cloudIcon} src={cloud} alt="хранилище" />
            <p className={s.noProdsText}>пусто</p>
        </div>
    );
};

export default NoProdsMes;
