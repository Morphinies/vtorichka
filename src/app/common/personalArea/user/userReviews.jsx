import React from "react";
import s from "../personalArea.module.css";

const UserReviews = ({ reviewsNumb }) => {
  return (
    <a href="/personalArea" className={s.reviews}>
      {"Отзывы (" + reviewsNumb + ")"}
    </a>
  );
};

export default UserReviews;
