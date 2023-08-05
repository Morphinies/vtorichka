import * as React from "react";
import s from "../editor.module.css";
import { useNavigate } from "react-router-dom";
import { cancelImg } from "../../../img/pictures";

const BtnExit = (): JSX.Element => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)} className={s.btnCancel}>
            <img src={String(cancelImg)} alt="выход" title="выход" />
        </button>
    );
};

export default BtnExit;
