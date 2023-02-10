import React from "react";
import s from "../products.module.css";

const ProductPhotoBtn = ({ img, showProduct }) => {
  return (
    <button onClick={showProduct} className={s.productPhotoBtn}>
      <img className={s.productPhoto} src={img} alt="" />
    </button>
  );
};

export default ProductPhotoBtn;
