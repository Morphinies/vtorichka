import React from "react";
import s from "../myPage.module.css";

const UserAvatar = ({ photo }) => {
  return (
    <div className={s.avatarPhotoWrap}>
      <img className={s.avatarPhoto} src={photo} alt="" />
    </div>
  );
};

export default UserAvatar;
