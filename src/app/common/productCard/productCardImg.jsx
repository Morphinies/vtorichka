import React, { useState } from "react";
import s from "./productCard.module.css";
import BtnsChangeImg from "./btnsChangeImg";

const ProductCardImg = ({ product }) => {
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
      <img src={product.photo[showedImg]} alt="" className={s.productImg} />
      <BtnsChangeImg
        imgBack={imgBack}
        imgTotal={imgTotal}
        showedImg={showedImg}
        imgForward={imgForward}
      />
    </div>
  );
};

export default ProductCardImg;
