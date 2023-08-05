import * as React from "react";
import { useState } from "react";
import s from "../prodCard.module.css";
import BtnsChangeImg from "./btnsChangeImg";
import { plug } from "../../../../img/pictures";
import { Iprod } from "../../../../../types/types";

const ProdCardImg = ({ product }: { product: Iprod }): JSX.Element => {
    const [showedImg, setShowedImg] = useState<number>(0);
    const imgTotal: number = product.photo.length;

    const imgBack = (): void => {
        showedImg > 0 && setShowedImg(showedImg - 1);
    };

    const imgForward = (): void => {
        showedImg < imgTotal - 1 && setShowedImg(showedImg + 1);
    };

    return (
        <div className={s.productImgWrap}>
            {product.photo.length ? (
                <img
                    src={product.photo[showedImg]}
                    alt=""
                    className={s.productImg}
                />
            ) : (
                <img src={String(plug)} alt="" className={s.plugImg} />
            )}
            <BtnsChangeImg
                imgBack={imgBack}
                imgTotal={imgTotal}
                showedImg={showedImg}
                imgForward={imgForward}
            />
        </div>
    );
};

export default ProdCardImg;
