import TextField from "./textField";
import s from "./editor.module.css";
import React, { useState } from "react";
import cancel from "../../img/cancel.svg";
import CatField from "./categoryField/catField";
import SelectField from "./selectField";
import TextareaField from "./textareaField";
import FileField from "./fileField";
import BtnApplyChanges from "./btnApplyChanges";

const Editor = ({ editableProd, closeEditor }) => {
  const [formValue, setFormValue] = useState(editableProd);

  const handleSubmit = (event) => {
    event.preventDefault();
    const products = JSON.parse(localStorage.getItem("products"));
    const idOfEditProd = products.findIndex((prod) => prod.id === formValue.id);
    products[idOfEditProd] = formValue;
    localStorage.removeItem("products");
    localStorage.setItem("products", JSON.stringify(products));
  };

  return (
    <div className={s.editWrap}>
      <button onClick={() => closeEditor()} className={s.btnCancel}>
        <img src={cancel} alt="выход" title="выход" />
      </button>
      <h1 className={s.editTitle}>Редактор объявлений</h1>
      <hr className={s.editHr} />
      <form onSubmit={handleSubmit} className={s.editForm}>
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
        <CatField
          label="категория"
          setFormValue={setFormValue}
          formValue={formValue.category}
        />
        <SelectField
          fieldId="type"
          label="состояние"
          list={["б/у", "новое"]}
          formValue={formValue.type}
          setFormValue={setFormValue}
        />
        <TextareaField
          label="описание"
          maxLength={600}
          fieldId="textAbout"
          formValue={formValue.textAbout}
          setFormValues={setFormValue}
        />
        <FileField
          maxLength={8}
          fieldId="photo"
          label="фотографии"
          formValue={formValue.photo}
          setFormValues={setFormValue}
        />
        <BtnApplyChanges name="применить изменения" />
      </form>
    </div>
  );
};

export default Editor;
