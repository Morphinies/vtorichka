import * as React from "react";
import s from "./btns.module.css";
import { useNavigate } from "react-router-dom";
import { cancelImg } from "../../img/pictures";

const BtnPrevPage = ({ name }: { name: string }): JSX.Element => {
    const navigate = useNavigate();

    return (
        <button className={s.btnPrevPage} onClick={() => navigate(-1)}>
            <p>{name}</p>
            <img src={cancelImg} alt="закрыть" />
        </button>
    );
};

export default BtnPrevPage;
