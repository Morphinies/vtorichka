import * as React from "react";
import s from "./header.module.css";
import { Link } from "react-router-dom";

const HeadLogo = (): JSX.Element => {
    return (
        <Link to={""}>
            <div className={s.logoBlock}>
                <div className={s.logoWrapper}>
                    <h1 className={s.logoName}>Torland</h1>
                </div>
                <p className={s.logoTagline}>
                    - доска объявлений в{" "}
                    <span className={s.countrySpan}>Торо́пце</span>
                </p>
            </div>
        </Link>
    );
};

export default HeadLogo;
