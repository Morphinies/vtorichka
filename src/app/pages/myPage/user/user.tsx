import * as React from "react";
import UserName from "./userName";
import UserAbout from "./userAbout";
import BtnEditBio from "./btnEditBio";
import UserAvatar from "./userAvatar";
import UserRaiting from "./userRaiting";
import UserReviews from "./userReviews";
import s from "../myPage.module.css";
import { useLoaderData } from "react-router-dom";
import { Iseller } from "../../../../types/types";

const User = () => {
  const user: Iseller = useLoaderData();

  return (
    user && (
      <div className={s.avatar}>
        <UserAvatar photo={user.avatar} />
        <UserName name={user.name} />
        {user.rating && <UserRaiting rating={user.rating} />}
        {user.rating && <UserReviews reviewsNumb={user.rating} />}
        {user.about && <UserAbout text={user.about} />}
        <BtnEditBio />
      </div>
    )
  );
};

export default User;