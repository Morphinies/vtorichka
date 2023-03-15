import React from "react";
import UserName from "./userName";
import UserAbout from "./userAbout";
import UserAvatar from "./userAvatar";
import UserRaiting from "./userRaiting";
import UserReviews from "./userReviews";
import s from "../personalPage.module.css";

const User = ({ photo, name, rating, reviewsNumb, about }) => {
  return (
    <div className={s.avatar}>
      <UserAvatar photo={photo} />
      <UserName name={name} />
      <UserRaiting rating={rating} />
      <UserReviews reviewsNumb={reviewsNumb} />
      <UserAbout text={about} />
    </div>
  );
};

export default User;
