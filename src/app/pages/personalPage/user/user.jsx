import React from "react";
import UserName from "./userName";
import UserAbout from "./userAbout";
import UserAvatar from "./userAvatar";
import UserRaiting from "./userRaiting";
import UserReviews from "./userReviews";
import s from "../personalPage.module.css";
import BtnEditBio from "./btnEditBio";

const User = ({ photo, name, rating, reviewsNumb, about, userID }) => {
  return (
    <div className={s.avatar}>
      <UserAvatar photo={photo} />
      <UserName name={name} />
      {rating && <UserRaiting rating={rating} />}
      {reviewsNumb && <UserReviews reviewsNumb={reviewsNumb} />}
      {about && <UserAbout text={about} />}
      <BtnEditBio userID={userID} />
    </div>
  );
};

export default User;
