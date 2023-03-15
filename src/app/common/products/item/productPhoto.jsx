import React from "react";
import s from "../products.module.css";
import BtnChangePhoto from "./btnChangePhoto";
import ProductPhotoBtn from "./productPhotoBtn";

const ProductPhoto = ({ prod, maxVal, x, setX }) => {
  return (
    <div id={"slide_" + prod.id} className={s.productPhotosWrap}>
      {prod.photo.map((img) => {
        return <ProductPhotoBtn prodId={prod.id} img={img} key={img} />;
      })}

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

export default ProductPhoto;
