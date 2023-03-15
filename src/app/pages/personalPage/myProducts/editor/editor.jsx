import TextField from "../../../../common/auth/input/textField";
import s from "./editor.module.css";
import React, { useEffect, useState } from "react";
import cancel from "../../../../img/cancel.svg";
import CatField from "./fields/categoryField/catField";
import SelectField from "./fields/selectField";
import TextareaField from "./fields/textareaField";
import FileField from "./fields/fileField";
import BtnApplyChanges from "./btnApplyChanges";
import api from "../../../../api";
import ResponseMes from "../../../../common/auth/responseMes";
import Loading from "../../../../common/loading/loading";

const Editor = ({ editableProd, closeEditor }) => {
  const [formValue, setFormValue] = useState(editableProd);
  const [responseMes, setResponseMes] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    responseMes && setTimeout(() => setResponseMes(), 1000);
  }, [responseMes]);

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    api.products
      .editProd(formValue)
      .then((data) => {
        setResponseMes(data);
        setLoading(false);
      })
      .catch((errMes) => setResponseMes(errMes));
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

        {loading && <Loading />}
        {responseMes && <ResponseMes message={responseMes} />}
      </form>
    </div>
  );
};

export default Editor;
