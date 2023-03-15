import React from "react";
import { Link } from "react-router-dom";
import s from "../products.module.css";

const ProductPhotoBtn = ({ img, prodId }) => {
  return (
    <Link to={`/products/${prodId}`} className={s.productPhotoBtn}>
      <img className={s.productPhoto} src={img} alt="" />
    </Link>
  );
};

export default ProductPhotoBtn;
