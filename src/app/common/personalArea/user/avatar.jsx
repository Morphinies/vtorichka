import React from "react";
import s from "../personalArea.module.css";

const Avatar = ({ photo, name }) => {
  return (
    <div className={s.avatar}>
      <div className={s.avatarPhotoWrap}>
        <img className={s.avatarPhoto} src={photo} alt="" />
      </div>
      <h1 className={s.avatarName}>{name}</h1>
    </div>
  );
};

export default Avatar;
