import * as React from "react";
import s from "../../editor.module.css";
import PasswordField from "./passwordField";
import { IChangePassword } from "../../../../../types/types";

const ChangePassword = ({
    errors,
    formValues,
    errorsHidden,
    setFormValues,
}: IChangePassword) => {
    const isOpened = formValues.hasOwnProperty("oldPas");

    const switchPasField = (state: boolean) => {
        if (state) {
            setFormValues((prevState) => {
                delete prevState.oldPas;
                delete prevState.newPas;
                return { ...prevState };
            });
        } else {
            setFormValues((prevState) => {
                prevState.oldPas = "";
                prevState.newPas = "";
                return { ...prevState };
            });
        }
    };

    return (
        <>
            <button
                type="button"
                className={s.changePasBtn}
                onClick={() => switchPasField(isOpened)}
            >
                {!isOpened ? "сменить пароль" : "оставить старый пароль"}
            </button>
            {isOpened && (
                <>
                    <PasswordField
                        maxLength={30}
                        fieldId="oldPas"
                        label="старый пароль"
                        error={errors.oldPas}
                        errorsHidden={errorsHidden}
                        formValue={formValues.oldPas || ""}
                        setFormValues={setFormValues}
                    />
                    <PasswordField
                        maxLength={30}
                        fieldId="newPas"
                        label="новый пароль"
                        error={errors.newPas}
                        errorsHidden={errorsHidden}
                        formValue={formValues.newPas || ""}
                        setFormValues={setFormValues}
                    />
                </>
            )}
        </>
    );
};

export default ChangePassword;
