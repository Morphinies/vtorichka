import React from "react";
import s from "../auth.module.css";
import plus from "../../../img/plus.svg";

const AvatarField = ({ avatar }) => {
  return (
    <figure className={s.avatarWrap}>
      {avatar ? (
        <div></div>
      ) : (
        <div className={s.noAvatar}>
          <input type="file" className={s.fileInput} />
          <img src={plus} alt="avatar" className={s.addAvatar} />
        </div>
      )}
    </figure>
  );
};

export default AvatarField;
