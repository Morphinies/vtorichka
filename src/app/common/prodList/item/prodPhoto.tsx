import * as React from "react";
import s from "../products.module.css";
import BtnChangePhoto from "./btnChangePhoto";
import ProductPhotoBtn from "./prodPhotoBtn";
import { ProdPhotoType } from "../../../../types/types";

const ProdPhoto = ({ prod, maxVal, x, setX }: ProdPhotoType): JSX.Element => {
  return (
    <div id={"slide_" + prod._id} className={s.productPhotosWrap}>
      <ProductPhotoBtn prod={prod} />

      {x < maxVal - 100 && (
        <BtnChangePhoto
          x={x}
          prod={prod}
          maxVal={maxVal}
          change={"next"}
          setX={(val) => setX(val)}
        />
      )}
      {x > 0 && (
        <BtnChangePhoto
          x={x}
          prod={prod}
          maxVal={maxVal}
          change={"prev"}
          setX={(val) => setX(val)}
        />
      )}
    </div>
  );
};

export default ProdPhoto;
