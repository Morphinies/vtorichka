import * as React from "react";
import s from "../prodCard.module.css";
import { IBtnFavorite } from "../../../../../types/types";
import { heartDark, heartDarkFill } from "../../../../img/pictures";

const BtnFavorite = ({
    isFavorite,
    updateFavorite,
}: IBtnFavorite): JSX.Element => {
    return (
        <button
            onClick={() => updateFavorite()}
            className={s.prodBtn + " " + s.btnFavorite}
        >
            <img
                alt=""
                title="избранное"
                className={s.prodBtnImg}
                src={isFavorite ? heartDarkFill : heartDark}
            />
        </button>
    );
};

export default BtnFavorite;
