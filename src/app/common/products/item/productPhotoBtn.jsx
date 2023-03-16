import React from "react";
import { Link } from "react-router-dom";
import s from "../products.module.css";

const ProductPhotoBtn = ({ prod }) => {
  return prod.photo.map((img) => (
    <Link key={img} to={`/products/${prod.id}`} className={s.productPhotoBtn}>
      <img className={s.productPhoto} src={img} alt="" />
    </Link>
  ));
};

export default ProductPhotoBtn;
