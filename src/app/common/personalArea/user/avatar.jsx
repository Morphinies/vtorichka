import star from "../../../img/star.svg";
import starFill from "../../../img/starFill.svg";
import React from "react";
import s from "../personalArea.module.css";

const Avatar = ({ photo, name, rating, reviewsNumb }) => {
  return (
    <div className={s.avatar}>
      <div className={s.avatarPhotoWrap}>
        <img className={s.avatarPhoto} src={photo} alt="" />
      </div>
      <h1 className={s.avatarName}>{name}</h1>
      <div className={s.stars}>
        {/* pseudo stars - pacifier */}
        <ul className={s.starsList + " " + s.starsListAbs}>
          {[1, 2, 3, 4, 5].map((x) => (
            <li key={x}>
              <img
                src={star}
                alt="рейтинг"
                title={rating}
                className={s.starImg}
              />
            </li>
          ))}
        </ul>
        {/* raiting stars */}
        <ul
          className={s.starsList}
          style={{ width: `${(rating / 5) * 100}% ` }}
        >
          {[1, 2, 3, 4, 5].map((x) => (
            <li key={x}>
              <img className={s.starImg} src={starFill} alt="рейтинг" />
            </li>
          ))}
        </ul>
      </div>
      <a href="/personalArea" className={s.reviews}>
        {"Отзывы (" + reviewsNumb + ")"}
      </a>
    </div>
  );
};

export default Avatar;
