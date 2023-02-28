import React from "react";
import UserName from "./userName";
import UserAvatar from "./userAvatar";
import UserRaiting from "./userRaiting";
import s from "../personalArea.module.css";
import UserReviews from "./userReviews";
import UserAbout from "./userAbout";

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
