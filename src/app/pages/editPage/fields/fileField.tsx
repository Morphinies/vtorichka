import * as React from "react";
import s from "../editor.module.css";
import { plus } from "../../../img/pictures";
import { cancelImg } from "../../../img/pictures";
import { IFileField } from "../../../../types/types";

const FileField = ({
  label,
  fieldId,
  formValue,
  setFormValues,
}: IFileField) => {
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
                  <img src={String(cancelImg)} alt="delete" title="удалить" />
                </button>
                <img src={photo} alt={photo} className={s.photo} />
              </li>
            ))}
          </ul>
          <div className={s.fileInputWrap}>
            <img src={String(plus)} alt="addPhoto" className={s.imgPlus} />
            <input
              type="file"
              name={fieldId}
              className={s.fileInput}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </div>
      </div>
      <p className={s.errorMessage}></p>
    </div>
  );
};

export default FileField;
