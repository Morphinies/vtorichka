import s from "./editor.module.css";
import React, { useState } from "react";
import cancel from "../../img/cancel.svg";
import TextField from "./textField";

const Editor = ({ editableProd, closeEditor }) => {
  const [formValue, setFormValue] = useState(editableProd);
  console.log(editableProd);
  return (
    <div className={s.editWrap}>
      <button onClick={() => closeEditor()} className={s.btnCancel}>
        <img src={cancel} alt="выход" title="выход" />
      </button>
      <h1 className={s.editTitle}>Редактор объявлений</h1>
      <hr className={s.editHr} />
      <form className={s.editForm}>
        <TextField
          type="text"
          //   error
          maxLength={70}
          label="название"
          fieldId="name"
          formValue={formValue.name}
          setFormValues={setFormValue}
        />
        <TextField
          type="number"
          //   error
          maxLength={20}
          label="цена"
          fieldId="price"
          formValue={formValue.price}
          setFormValues={setFormValue}
        />
      </form>
    </div>
  );
};

export default Editor;
