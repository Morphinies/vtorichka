import React, { useEffect, useState } from "react";
import api from "../../../api";
import s from "../editor.module.css";
import TextField from "../fields/textField";
import Loading from "../../loading/loading";
import FileField from "../fields/fileField";
import SelectField from "../fields/selectField";
import ResponseMes from "../../auth/responseMes";
import TextareaField from "../fields/textareaField";
import handleError from "../../../utils/handleError";
import BtnApplyChanges from "../btns/btnApplyChanges";
import CatField from "../fields/categoryFields/catField";
import { useNavigate } from "react-router-dom";

const ProdForm = ({ editorProd }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMes, setResponseMes] = useState();
  const [errorsHidden, setErrorsHidden] = useState(true);
  const [formValues, setFormValues] = useState(editorProd);
  const formIsValid = Object.values(errors).every((value) => !value.name);

  // обработка формы
  const handleForm = () => {
    setLoading(true);
    api.products
      .editProd(formValues)
      .then((data) => {
        setResponseMes(data);
        setLoading(false);
      })
      .catch((errMes) => setResponseMes(errMes));
  };

  // кнопка редактировать
  const handleSubmit = (event) => {
    event.preventDefault();
    formIsValid ? handleForm(event) : setErrorsHidden(false);
  };

  // проверка полей на валидность
  useEffect(() => {
    setErrorsHidden(true);
    setErrors((prevState) => {
      return {
        ...prevState,
        type: handleError(formValues.type, []),
        photo: handleError(formValues.photo, []),
        category: handleError(formValues.categoty, []),
        name: handleError(formValues.name, ["empty", "indent"]),
        price: handleError(formValues.price, ["empty", "indent"]),
        textAbout: handleError(formValues.textAbout, ["empty", "indent"]),
      };
    });
  }, [formValues]);

  // сворачивание сообщения об ошибке
  useEffect(() => {
    responseMes &&
      setTimeout(() => {
        setResponseMes();
        navigate(-1);
      }, 1000);
  }, [responseMes, errors, navigate]);

  return (
    <form onSubmit={handleSubmit} className={s.editForm}>
      <TextField
        type="text"
        maxLength={40}
        fieldId="name"
        label="название"
        error={errors.name}
        formValue={formValues.name}
        errorsHidden={errorsHidden}
        setFormValues={setFormValues}
        setErrorsHidden={setErrorsHidden}
      />
      <TextField
        type="text"
        label="цена"
        maxLength={12}
        fieldId="price"
        error={errors.price}
        errorsHidden={errorsHidden}
        formValue={formValues.price}
        setFormValues={setFormValues}
        setErrorsHidden={setErrorsHidden}
      />
      <CatField
        label="категория"
        setFormValues={setFormValues}
        formValue={formValues.category}
        setErrorsHidden={setErrorsHidden}
      />
      <SelectField
        fieldId="type"
        label="состояние"
        list={["б/у", "новое"]}
        formValue={formValues.type}
        setFormValues={setFormValues}
      />
      <TextareaField
        maxLength={600}
        label="описание"
        fieldId="textAbout"
        error={errors.textAbout}
        errorsHidden={errorsHidden}
        setFormValues={setFormValues}
        formValue={formValues.textAbout}
      />
      <FileField
        maxLength={8}
        fieldId="photo"
        label="фотографии"
        formValue={formValues.photo}
        setFormValues={setFormValues}
      />
      <BtnApplyChanges name="применить изменения" />

      {loading && <Loading />}
      {responseMes && <ResponseMes message={responseMes} />}
    </form>
  );
};

export default ProdForm;
