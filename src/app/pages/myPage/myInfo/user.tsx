import * as React from "react";
import UserAbout from "./userAbout";
import s from "../myPage.module.css";
import BtnEditBio from "./btnEditBio";
import UserAvatar from "./userAvatar";
import UserRaiting from "./userRaiting";
import UserReviews from "./userReviews";
import { useLoaderData } from "react-router-dom";
import { Iseller } from "../../../../types/types";

const User = () => {
    const user = useLoaderData() as Iseller;

    return (
        user && (
            <div className={s.userWrap}>
                <UserAvatar photo={user.avatar} name={user.name} />
                {user.rating && <UserRaiting rating={user.rating} />}
                {user.rating && <UserReviews reviewsNumb={user.rating} />}
                {user.about && <UserAbout text={user.about} />}
                <BtnEditBio />
            </div>
        )
    );
};

export default User;
