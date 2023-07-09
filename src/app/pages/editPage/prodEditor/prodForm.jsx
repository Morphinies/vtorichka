import api from "../../../api";
import s from "../editor.module.css";
import TextField from "../fields/textField";
import FileField from "../fields/fileField";
import { useNavigate } from "react-router-dom";
import SelectField from "../fields/selectField";
import React, { useEffect, useState } from "react";
import TextareaField from "../fields/textareaField";
import handleError from "../../../utils/handleError";
import Loading from "../../../common/loading/loading";
import BtnApplyChanges from "../btns/btnApplyChanges";
import CatField from "../fields/categoryFields/catField";
import ResponseMes from "../../../common/responseMes/responseMes";

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
    if (editorProd._id) {
      api.products.editProd(formValues).then((data) => {
        data
          ? setResponseMes("Объявление успешно отредактировано!")
          : setResponseMes("Объявление не отредактировано!");
        setLoading(false);
        setLoading(false);
      });
    } else {
      api.products.addProd(formValues).then((data) => {
        console.log(data);
        data
          ? setResponseMes("Объявление успешно добавлено!")
          : setResponseMes("Объявление не добавлено!");
        setLoading(false);
      });
    }
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
        photo: handleError(formValues.photo, []),
        type: handleError(formValues.type, ["empty"]),
        category: handleError(formValues.category, ["empty"]),
        name: handleError(formValues.name, ["empty", "indent"]),
        price: handleError(formValues.price, ["empty", "indent"]),
        description: handleError(formValues.description, ["empty", "indent"]),
      };
    });
  }, [formValues]);

  // сворачивание сообщения об ошибке
  useEffect(() => {
    responseMes &&
      setTimeout(() => {
        setResponseMes();
        formIsValid && navigate(-1);
      }, 1500);
  }, [responseMes, formIsValid, navigate]);

  return (
    <form onSubmit={handleSubmit} className={s.editForm}>
      <TextField
        type="text"
        label="имя"
        fieldId="name"
        maxLength={40}
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
        error={errors.category}
        errorsHidden={errorsHidden}
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
        fieldId="description"
        error={errors.description}
        errorsHidden={errorsHidden}
        setFormValues={setFormValues}
        formValue={formValues.description}
      />
      <FileField
        label="фото"
        maxLength={8}
        fieldId="photo"
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
