import React from "react";
import star from "../../../img/star.svg";
import s from "../personalPage.module.css";
import starFill from "../../../img/starFill.svg";

const UserRaiting = ({ rating }) => {
  return (
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
      <ul className={s.starsList} style={{ width: `${(rating / 5) * 100}% ` }}>
        {[1, 2, 3, 4, 5].map((x) => (
          <li key={x}>
            <img className={s.starImg} src={starFill} alt="рейтинг" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserRaiting;
