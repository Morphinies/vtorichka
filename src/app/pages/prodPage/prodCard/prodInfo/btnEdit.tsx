import * as React from "react";
import s from "../prodCard.module.css";
import { Link } from "react-router-dom";
import { settings } from "../../../../img/pictures";

const BtnEdit = ({ productId }: { productId: string }) => {
    return (
        <Link
            to={"/personal/products/editor/" + productId}
            className={s.prodBtn + " " + s.btnSetting}
        >
            <img
                src={settings}
                alt="редактировать"
                title="редактировать"
                className={s.prodBtnImg}
            />
        </Link>
    );
};

export default BtnEdit;
