import React from "react";
import s from "../../editor.module.css";
import PasswordField from "./passwordField";

const ChangePassword = ({
  errors,
  pasField,
  formValues,
  setPasField,
  errorsHidden,
  setFormValues,
}) => {
  const switchPasField = (stateOfPasField) => {
    if (stateOfPasField) {
      setPasField(!stateOfPasField);
      setFormValues((prevState) => {
        delete prevState.oldPas;
        delete prevState.newPas;
        return { ...prevState };
      });
    } else {
      setPasField(!stateOfPasField);
    }
  };

  return (
    <>
      <button
        type="button"
        className={s.changePasBtn}
        onClick={() => setPasField((prevState) => switchPasField(prevState))}
      >
        {!pasField ? "сменить пароль" : "оставить старый пароль"}
      </button>
      {pasField && (
        <>
          <PasswordField
            error={errors}
            maxLength={30}
            fieldId="oldPas"
            label="старый пароль"
            errorsHidden={errorsHidden}
            formValue={formValues.oldPas}
            setFormValues={setFormValues}
          />
          <PasswordField
            error={errors}
            maxLength={30}
            fieldId="newPas"
            label="новый пароль"
            errorsHidden={errorsHidden}
            formValue={formValues.newPas}
            setFormValues={setFormValues}
          />
        </>
      )}
    </>
  );
};

export default ChangePassword;
