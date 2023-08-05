import * as React from "react";
import s from "../editor.module.css";
import plus from "../../../img/plus.svg";

const AvatarField = ({ avatar }: { avatar: string }) => {
    return (
        <div className={s.avatarField}>
            <input
                type="file"
                title="изменить аватар"
                className={s.avatarInput}
                accept="image/*"
            />
            {avatar ? (
                <img
                    src={avatar}
                    alt="avatar"
                    title="изменить аватар"
                    className={s.avatarImgChange}
                />
            ) : (
                <img
                    src={plus}
                    alt="avatar"
                    title="выбрать аватар"
                    className={s.avatarImgAdd}
                />
            )}
        </div>
    );
};

export default AvatarField;
