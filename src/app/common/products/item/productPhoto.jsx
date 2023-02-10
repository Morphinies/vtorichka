import React from "react";
import s from "../products.module.css";
import BtnChangePhoto from "./btnChangePhoto";
import ProductPhotoBtn from "./productPhotoBtn";

const ProductPhoto = ({ i, maxVal, x, setX, showProduct }) => {
  return (
    <div id={"slide_" + i.id} className={s.productPhotosWrap}>
      {i.photo.map((img) => {
        return (
          <ProductPhotoBtn
            showProduct={() => showProduct(i)}
            img={img}
            key={img}
          />
        );
      })}

      {x < maxVal - 100 && (
        <BtnChangePhoto
          i={i}
          x={x}
          setX={(val) => setX(val)}
          maxVal={maxVal}
          change={"next"}
        />
      )}

      {x > 0 && (
        <BtnChangePhoto
          i={i}
          x={x}
          setX={(val) => setX(val)}
          maxVal={maxVal}
          change={"prev"}
        />
      )}
    </div>
  );
};

export default ProductPhoto;
