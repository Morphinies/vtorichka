import * as React from "react";
import s from "../products.module.css";
import { Link } from "react-router-dom";
import { plug } from "../../../img/pictures";
import { IProdPhotoBtn } from "../../../../types/types";

const ProdPhotoBtn = ({ prod }: IProdPhotoBtn): JSX.Element => {
  return prod.photo.length ? (
    <>
      {prod.photo.map((img) => (
        <Link key={img} to={`/${prod._id}`} className={s.productPhotoBtn}>
          <img className={s.productPhoto} src={img} alt="" />
        </Link>
      ))}
    </>
  ) : (
    <Link key="plug" to={`/${prod._id}`} className={s.productPhotoBtn}>
      <img className={s.productPhoto} src={String(plug)} alt="" />
    </Link>
  );
};

export default ProdPhotoBtn;
