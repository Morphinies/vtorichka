import * as React from "react";
import api from "../../../api";
import s from "../editor.module.css";
import TextField from "../fields/textField";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AvatarField from "../fields/avatarField";
import {
  IUserFormValues,
  IUserFormValuesErrors,
  Iseller,
} from "../../../../types/types";
import TextareaField from "../fields/textareaField";
import handleError from "../../../utils/handleError";
import BtnApplyChanges from "../btns/btnApplyChanges";
import Loading from "../../../common/loading/loading";
import ResponseMes from "../../../common/responseMes/responseMes";
import ChangePassword from "../fields/changePassword/changePassword";

const UserForm = ({ editorUser }: { editorUser: Iseller }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [pasField, setPasField] = useState(false);
  const [errorsHidden, setErrorsHidden] = useState(true);
  const [responseMes, setResponseMes] = useState<string>();
  const [errors, setErrors] = useState<IUserFormValuesErrors>({});
  const [formValues, setFormValues] = useState<IUserFormValues>(editorUser);
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formIsValid ? handleForm() : setErrorsHidden(false);
  };

  // проверка полей на валидность
  useEffect(() => {
    setErrorsHidden(true);
    setErrors((prevState) => {
      return {
        ...prevState,
        photo: handleError(formValues.photo, []),
        about: handleError(formValues.about, ["indent"]),
        name: handleError(formValues.name, ["empty", "indent"]),
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
        setResponseMes("");
        formIsValid && navigate(-1);
      }, 1000);
  }, [responseMes, formIsValid, navigate]);

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={s.editForm}>
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