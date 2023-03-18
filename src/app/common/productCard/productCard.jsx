import api from "../../api";
import Header from "../header/header";
import Footer from "../footer/footer";
import s from "./productCard.module.css";
import BtnCloseProduct from "./btnCloseProduct";
import { useKeyPress } from "../hooks/useKeyPress";
import React, { useEffect, useState } from "react";
import ProductCardImg from "./prodImg/productCardImg";
import ProductCardInfo from "./prodInfo/productCardInfo";
import { useLocation, useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const isEscPressed = useKeyPress("Escape");
  const prodId = useLocation().pathname.slice(10);

  // выход на "Escape"
  useEffect(() => {
    isEscPressed && navigate(-1);
  }, [isEscPressed, navigate]);

  // установка товара
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
    <div className="wrapper">
      <Header />
      <main className={s.main}>
        {product && (
          <div className={s.productCard}>
            <BtnCloseProduct />
            <ProductCardImg product={product} />
            <ProductCardInfo product={product} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductCard;
