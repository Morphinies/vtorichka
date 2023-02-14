import React from "react";
import s from "../productCard.module.css";

const ProdSeller = ({ seller }) => {
  const toSeller = (seller) => {
    console.log(seller);
  };

  return (
    <div className={s.seller}>
      <button onClick={() => toSeller(seller)} className={s.sellerAvatarWrap}>
        <img
          alt={seller.name}
          src={seller.avatar}
          title={seller.name}
          className={s.sellerAvatar}
        />
      </button>
      <p className={s.sellerName}>{seller.name}</p>
    </div>
  );
};

export default ProdSeller;
