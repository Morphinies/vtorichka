import * as React from "react";
import s from "../editor.module.css";
import { ChangeEvent, useRef } from "react";
import plus from "../../../img/plus.svg";

interface IAvatarField {
    avatar: string;
    selectedFiles: any;
    setSelectedFiles: any;
}

const AvatarField = ({
    avatar,
    selectedFiles,
    setSelectedFiles,
}: IAvatarField) => {
    const filePicker = useRef(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedFiles(e.target.files[0]);
    };

    const handlePick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        filePicker.current.click();
    };

    console.log(selectedFiles);

    return (
        <div className={s.avatarField}>
            <input
                type="file"
                ref={filePicker}
                title="изменить аватар"
                onChange={(e) => handleChange(e)}
                className={s.avatarInput}
                accept="image/*,.jpg,.png,.web"
            />

            <button onClick={(e) => handlePick(e)} className={s.avatarBtn}>
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
            </button>
        </div>
    );
};

export default AvatarField;
