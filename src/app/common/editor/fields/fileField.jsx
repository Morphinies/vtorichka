import React from "react";
import s from "../editor.module.css";
import plus from "../../../img/plus.svg";
import cancel from "../../../img/cancel.svg";

const FileField = ({ label, fieldId, formValue, setFormValues }) => {
  const delPhoto = (delPhoto) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        [fieldId]: formValue.filter((photo) => photo !== delPhoto),
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
                  <img src={cancel} alt="delete" title="удалить" />
                </button>
                <img src={photo} alt={photo} className={s.photo} />
              </li>
            ))}
          </ul>
          <div className={s.fileInputWrap}>
            <img src={plus} alt="addPhoto" className={s.imgPlus} />
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
