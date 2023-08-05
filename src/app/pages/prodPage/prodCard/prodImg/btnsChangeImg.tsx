import * as React from "react";
import s from "../prodCard.module.css";
import { arrowNext } from "../../../../img/pictures";
import { arrowBack } from "../../../../img/pictures";
import { IBtnsChangeImg } from "../../../../../types/types";

const BtnsChangeImg = ({
    imgBack,
    imgTotal,
    showedImg,
    imgForward,
}: IBtnsChangeImg) => {
    return (
        <>
            {showedImg < imgTotal - 1 && (
                <button
                    id={s.btnImgForward}
                    onClick={imgForward}
                    className={s.btnChangeImg}
                >
                    <img
                        className={s.imgArrow}
                        src={String(arrowNext)}
                        alt=""
                    />
                </button>
            )}

            {showedImg > 0 && (
                <button
                    id={s.btnImgBack}
                    onClick={imgBack}
                    className={s.btnChangeImg}
                >
                    <img
                        className={s.imgArrow}
                        src={String(arrowBack)}
                        alt=""
                    />
                </button>
            )}
        </>
    );
};

export default BtnsChangeImg;
