import * as React from "react";
import api from "../../../api";
import s from "../editor.module.css";
import plus from "../../../img/plus.svg";
import { ChangeEvent, useRef } from "react";
import { IAvatar } from "../../../../types/types";

interface IAvatarField {
    userId: string;
    avatar: IAvatar;
    setAvatar: (avatar: IAvatar) => void;
}

const AvatarField = ({ avatar, userId, setAvatar }: IAvatarField) => {
    const filePicker = useRef(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const selectedFile = e.target.files[0];
        if (!selectedFile) {
            console.log("please, select a file");
            return;
        }
        api.users
            .uploadAvatar(selectedFile, userId)
            .then((data) => setAvatar(data))
            .catch((err) => console.log(err));
    };

    const handlePick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        filePicker.current.click();
    };

    return (
        <div className={s.avatarField}>
            <input
                type="file"
                ref={filePicker}
                title="изменить аватар"
                className={s.fileInput}
                accept="image/*,.jpg,.png,.web"
                onChange={(e) => handleChange(e)}
            />

            <button onClick={(e) => handlePick(e)} className={s.avatarBtn}>
                {avatar.filePath ? (
                    <img
                        alt="avatar"
                        title="изменить аватар"
                        className={s.avatarImgChange}
                        src={avatar.filePath}
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
