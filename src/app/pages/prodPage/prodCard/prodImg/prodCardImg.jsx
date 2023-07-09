import React, { useState } from "react";
import s from "../prodCard.module.css";
import BtnsChangeImg from "./btnsChangeImg";
import { plug } from "../../../../img/pictures";

const ProdCardImg = ({ product }) => {
  const [showedImg, setShowedImg] = useState(0);
  const imgTotal = product.photo.length;

  const imgBack = () => {
    showedImg > 0 && setShowedImg(showedImg - 1);
  };

  const imgForward = () => {
    showedImg < imgTotal - 1 && setShowedImg(showedImg + 1);
  };

  return (
    <div className={s.productImgWrap}>
      {product.photo.length ? (
        <img src={product.photo[showedImg]} alt="" className={s.productImg} />
      ) : (
        <img src={plug} alt="" className={s.plugImg} />
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
