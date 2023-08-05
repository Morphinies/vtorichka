import * as React from "react";
import star from "../../../img/star.svg";
import s from "../myPage.module.css";
import starFill from "../../../img/starFill.svg";

const UserRaiting = ({ rating }: { rating: number }) => {
    return (
        <div className={s.stars}>
            {/* pseudo stars - pacifier */}
            <ul className={s.starsList + " " + s.starsListAbs}>
                {[1, 2, 3, 4, 5].map((x) => (
                    <li key={x}>
                        <img
                            alt="рейтинг"
                            src={String(star)}
                            className={s.starImg}
                            title={String(rating)}
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
                        <img
                            className={s.starImg}
                            src={String(starFill)}
                            alt="рейтинг"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserRaiting;
