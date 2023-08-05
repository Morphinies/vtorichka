import * as React from "react";
import s from "../myPage.module.css";

const UserReviews = ({ reviewsNumb }: { reviewsNumb: number }) => {
    return (
        <a href="/personalArea" className={s.reviews}>
            {"Отзывы (" + reviewsNumb + ")"}
        </a>
    );
};

export default UserReviews;
