import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import handleError from "../../../utils/handleError";
import BtnApplyChanges from "../btns/btnApplyChanges";
import s from "../editor.module.css";
import AvatarField from "../fields/avatarField";
import ChangePassword from "../fields/changePassword/changePassword";
import TextareaField from "../fields/textareaField";
import TextField from "../fields/textField";
import Loading from "../../../common/loading/loading";

const UserForm = ({ editorUser }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [pasField, setPasField] = useState(false);
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
        if (data) {
          setResponseMes("Объявление изменено!");
        } else {
          setResponseMes("Что-то пошло не так :/");
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
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
        about: handleError(formValues.about, ["indent"]),
        name: handleError(formValues.name, ["empty", "indent"]),
        price: handleError(formValues.price, ["empty", "indent"]),
        oldPas: pasField
          ? handleError(
              formValues.oldPas,
              ["empty", "oldPas", "equal"],
              formValues.password
            )
          : {},
        newPas: pasField
          ? handleError(formValues.newPas, ["empty", "password", "indent"])
          : {},
      };
    });
  }, [formValues, pasField]);

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
      />

      <TextField
        type="tel"
        label="телефон"
        maxLength={17}
        fieldId="phone"
        error={errors.phone}
        errorsHidden={errorsHidden}
        formValue={formValues.phone}
        setFormValues={setFormValues}
      />

      <TextareaField
        fieldId="about"
        label="обо мне"
        maxLength={600}
        error={errors.about}
        errorsHidden={errorsHidden}
        formValue={formValues.about}
        setFormValues={setFormValues}
      />

      <ChangePassword
        errors={errors}
        pasField={pasField}
        formValues={formValues}
        setPasField={setPasField}
        errorsHidden={errorsHidden}
        setFormValues={setFormValues}
      />

      <BtnApplyChanges name="применить изменения" />

      {loading && <Loading />}
      {responseMes && <ResponseMes message={responseMes} />}
    </form>
  );
};

export default UserForm;
