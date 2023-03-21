import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import handleError from "../../../utils/handleError";
import ResponseMes from "../../auth/responseMes";
import Loading from "../../loading/loading";
import BtnApplyChanges from "../btns/btnApplyChanges";
import s from "../editor.module.css";
import AvatarField from "../fields/avatarField";
import TextField from "../fields/textField";

const UserForm = ({ editorUser }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [responseMes, setResponseMes] = useState();
  const [errorsHidden, setErrorsHidden] = useState(true);
  const [formValues, setFormValues] = useState(editorUser);
  const formIsValid = Object.values(errors).every((value) => !value.name);

  // обработка формы
  const handleForm = () => {
    setLoading(true);
    api.users
      .editUser(formValues)
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
        formIsValid && navigate(-1);
      }, 1000);
  }, [responseMes, formIsValid, navigate]);

  return (
    <form onSubmit={handleSubmit} className={s.editForm}>
      <AvatarField avatar={formValues.avatar} />

      <TextField
        type="text"
        label="имя"
        maxLength={40}
        fieldId="name"
        error={errors.name}
        formValue={formValues.name}
        errorsHidden={errorsHidden}
        setFormValues={setFormValues}
        setErrorsHidden={setErrorsHidden}
      />

      <BtnApplyChanges name="применить изменения" />

      {loading && <Loading />}
      {responseMes && <ResponseMes message={responseMes} />}
    </form>
  );
};

export default UserForm;
