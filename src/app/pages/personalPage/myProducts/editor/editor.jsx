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
import { useLocation, useNavigate } from "react-router-dom";
import handleError from "../../../../utils/handleError";

const Editor = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [editorProd, setEditorProd] = useState()
  const [responseMes, setResponseMes] = useState();
  const [errorsHidden, setErrorsHidden] = useState(true);
  const [formValue, setFormValue] = useState({name:"",price:"",categoty:"",type:"",textAbout:"", photo:[]});

  // установка редактируемого товара
  useEffect(() => {
    api.products.fetchById(location.pathname.slice(8)).then(data => {
      setEditorProd(data)
      setFormValue(data)
    })
  })


  // проверка полей на валидность
  useEffect(() => {
    setErrors((prevState) => {
      return {
        ...prevState,
        name:handleError(formValue.login, ["empty",  "indent"]),
        price:handleError(formValue.login, ["empty",  "indent"]),
        categoty:handleError(formValue.login, ["empty",  "indent"]),
        type:handleError(formValue.login, ["empty",  "indent"]),
        textAbout:handleError(formValue.login, ["empty",  "indent"]), 
        photo:handleError(formValue.login, [])
      };
    });
  }, [formValue]);

  useEffect(() => {
    console.log(location)
  },[location])

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
    editorProd &&
    <div className={s.editWrap}>
      <button onClick={() => navigate(-1)} className={s.btnCancel}>
        <img src={cancel} alt="выход" title="выход" />
      </button>
      <h1 className={s.editTitle}>Редактор объявлений</h1>
      <hr className={s.editHr} />
      <form onSubmit={handleSubmit} className={s.editForm}>
        <TextField
          error={errors.name}
          errorsHidden={errorsHidden}
          setErrorsHidden={setErrorsHidden}
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
          error={errors.price}
          errorsHidden={errorsHidden}
          setErrorsHidden={setErrorsHidden}
        />
        <CatField
          label="категория"
          setFormValue={setFormValue}
          formValue={formValue.category}
          error={errors.category}
          errorsHidden={errorsHidden}
          setErrorsHidden={setErrorsHidden}
        />
        <SelectField
          fieldId="type"
          label="состояние"
          list={["б/у", "новое"]}
          formValue={formValue.type}
          setFormValue={setFormValue}
          error={errors.type}
          errorsHidden={errorsHidden}
          setErrorsHidden={setErrorsHidden}
        />
        <TextareaField
          label="описание"
          maxLength={600}
          fieldId="textAbout"
          formValue={formValue.textAbout}
          setFormValues={setFormValue}
          error={errors.textAbout}
          errorsHidden={errorsHidden}
          setErrorsHidden={setErrorsHidden}
        />
        <FileField
          maxLength={8}
          fieldId="photo"
          label="фотографии"
          formValue={formValue.photo}
          setFormValues={setFormValue}
          error={errors.photo}
          errorsHidden={errorsHidden}
          setErrorsHidden={setErrorsHidden}
        />
        <BtnApplyChanges name="применить изменения" />

        {loading && <Loading />}
        {responseMes && <ResponseMes message={responseMes} />}
      </form>
    </div>
  );
};

export default Editor;
