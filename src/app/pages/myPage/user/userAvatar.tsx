import * as React from "react";
import s from "../myPage.module.css";

const UserAvatar = ({ photo }: { photo: string }) => {
    return (
        <div className={s.avatarPhotoWrap}>
            <img className={s.avatarPhoto} src={photo} alt="" />
        </div>
    );
};

export default UserAvatar;
