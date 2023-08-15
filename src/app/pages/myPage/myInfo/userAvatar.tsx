import * as React from "react";
import s from "../myPage.module.css";
import { plug } from "../../../img/pictures";

const UserAvatar = ({ photo, name }: { photo: string; name: string }) => {
    return (
        <div className={s.avatarWrap}>
            <div className={s.avatarPhotoWrap}>
                <img className={s.avatarPhoto} src={photo || plug} alt="" />
            </div>
            <h1 className={s.avatarName}>{name}</h1>
        </div>
    );
};

export default UserAvatar;
