import React, { useEffect, useState } from "react";
import s from "./productCard.module.css";
import ProductCardImg from "./prodImg/productCardImg";
import ProductCardInfo from "./prodInfo/productCardInfo";
import BtnCloseProduct from "./btnCloseProduct";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../api";

const ProductCard = () => {
  const [product, setProduct] = useState();
  const prodId = useLocation().pathname.slice(10);
  const navigate = useNavigate();

  useEffect(() => {
    api.products
      .fetchById(prodId)
      .then((data) => {
        setProduct(data);
      })
      .catch(() => {
        navigate(-1);
      });
  }, [prodId, navigate]);

  return (
    product && (
      <div className={s.productCard}>
        <BtnCloseProduct />
        <ProductCardImg product={product} />
        <ProductCardInfo product={product} />
      </div>
    )
  );
};

export default ProductCard;
