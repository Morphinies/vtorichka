import s from "./editor.module.css";
import React, { useState } from "react";
import cancel from "../../img/cancel.svg";
import TextField from "./textField";
import RadioField from "./radioField";

const Editor = ({ editableProd, closeEditor }) => {
  const [formValue, setFormValue] = useState(editableProd);

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
          maxLength={40}
          fieldId="name"
          label="название"
          formValue={formValue.name}
          setFormValues={setFormValue}
        />

        <TextField
          type="text"
          label="цена"
          maxLength={12}
          fieldId="price"
          formValue={formValue.price}
          setFormValues={setFormValue}
        />

        <RadioField
          label="категория"
          fieldId="category"
          formValue={formValue.category}
        />
      </form>
    </div>
  );
};

export default Editor;
