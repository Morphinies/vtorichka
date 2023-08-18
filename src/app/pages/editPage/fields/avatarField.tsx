import * as React from "react";
import { useState } from "react";
import s from "../editor.module.css";
import plus from "../../../img/plus.svg";
import { ChangeEvent, useRef } from "react";
import api from "../../../api";

interface IAvatarField {
    avatar: string;
    userId: string;
}

const AvatarField = ({ avatar, userId }: IAvatarField) => {
    console.log(userId);
    const [curAvatar, setCurAvatar] = useState<any>();
    const filePicker = useRef(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) {
            console.log("please, select a file");
            return;
        }
        api.users
            .uploadAvatar(selectedFile, userId)
            .then((data) => setCurAvatar(data))
            .catch((err) => console.log(err));
    };

    const handlePick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        filePicker.current.click();
    };

    console.log(curAvatar);
    return (
        <div className={s.avatarField}>
            <input
                type="file"
                ref={filePicker}
                title="изменить аватар"
                className={s.avatarInput}
                accept="image/*,.jpg,.png,.web"
                onChange={(e) => handleChange(e)}
            />

            <button onClick={(e) => handlePick(e)} className={s.avatarBtn}>
                {curAvatar ? (
                    <img
                        alt="avatar"
                        title="изменить аватар"
                        className={s.avatarImgChange}
                        src={curAvatar.filePath}
                    />
                ) : (
                    <img
                        src={plus}
                        alt="avatar"
                        title="выбрать аватар"
                        className={s.avatarImgAdd}
                    />
                )}
            </button>
        </div>
    );
};

export default AvatarField;
