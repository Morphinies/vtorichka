import * as React from "react";
import s from "../editor.module.css";
import { plus } from "../../../img/pictures";
import { cancelImg } from "../../../img/pictures";
import { IFileField } from "../../../../types/types";
import api from "../../../api";

const FileField = ({
    label,
    userId,
    fieldId,
    formValue,
    setFormValues,
}: IFileField) => {
    const filePicker = React.useRef(null);
    const delPhoto = (photo: string) => {
        setFormValues((prevState) => {
            return {
                ...prevState,
                [fieldId]: formValue.filter(
                    (photoInForm: string) => photoInForm !== photo
                ),
            };
        });
    };

    const handlePick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        filePicker.current.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const selectedFiles = e.target.files;
        if (!selectedFiles[0]) {
            console.log("please, select a file");
            return;
        }
        api.products
            .uploadPhoto(selectedFiles, userId)
            .then((data) =>
                setFormValues((prevState) => ({ ...prevState, photo: data }))
            )
            .catch((err) => console.log(err));
    };

    return (
        <div className={s.inputField}>
            <div className={s.label}>
                <p className={s.labelText}>{label}:</p>
                <div className={s.input + " " + s.fileField}>
                    <ul className={s.photosList}>
                        {formValue.map((photo) => (
                            <li key={photo} className={s.photoItem}>
                                <button
                                    type="button"
                                    onClick={() => delPhoto(photo)}
                                    className={s.btnCancel + " " + s.smallBtn}
                                >
                                    <img
                                        src={cancelImg}
                                        alt="delete"
                                        title="удалить"
                                    />
                                </button>
                                <img
                                    src={photo}
                                    alt={photo}
                                    className={s.photo}
                                />
                            </li>
                        ))}
                    </ul>
                    <input
                        type="file"
                        name={fieldId}
                        ref={filePicker}
                        className={s.fileInput}
                        onChange={(e) => handleChange(e)}
                    />
                    <button
                        type="button"
                        onClick={(e) => handlePick(e)}
                        className={s.fileInputWrap}
                    >
                        <img src={plus} alt="addPhoto" className={s.imgPlus} />
                    </button>
                </div>
            </div>
            <p className={s.errorMessage}></p>
        </div>
    );
};

export default FileField;
