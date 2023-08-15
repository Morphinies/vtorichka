import * as React from "react";
import s from "./prodCard.module.css";
import { useNavigate } from "react-router-dom";
import { cancelImg } from "../../../img/pictures";

const BtnCloseProduct = () => {
    const navigate = useNavigate();

    return (
        <button className={s.closeCard} onClick={() => navigate(-1)}>
            <img src={cancelImg} alt="cancel" className={s.cancelImg} />
        </button>
    );
};

export default BtnCloseProduct;
