import api from "../../../api";
import s from "../editor.module.css";
import TextField from "../fields/textField";
import FileField from "../fields/fileField";
import { useNavigate } from "react-router-dom";
import SelectField from "../fields/selectField";
import * as React from "react";
import { useEffect, useState } from "react";
import TextareaField from "../fields/textareaField";
import handleError from "../../../utils/handleError";
import Loading from "../../../common/loading/loading";
import BtnApplyChanges from "../btns/btnApplyChanges";
import CatField from "../fields/categoryFields/catField";
import ResponseMes from "../../../common/responseMes/responseMes";
import {
    IProdForm,
    IProdFormErr,
    IProdFormErrors,
    Iprod,
} from "../../../../types/types";

const ProdForm = ({ editorProd }: IProdForm): JSX.Element => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState<IProdFormErrors>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [responseMes, setResponseMes] = useState<string>();
    const [errorsHidden, setErrorsHidden] = useState<boolean>(true);
    const [formValues, setFormValues] = useState<Iprod>(editorProd);
    const formIsValid: boolean = Object.values(errors).every(
        (err: IProdFormErr) => !err.name
    );

    // обработка формы
    const handleForm = (): void => {
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
                photo: {}, //handleError(formValues.photo, [])
                type: handleError(formValues.type, ["empty"]),
                category: handleError(formValues.category, ["empty"]),
                name: handleError(formValues.name, ["empty", "indent"]),
                price: handleError(formValues.price, ["empty", "indent"]),
                description: handleError(formValues.description, [
                    "empty",
                    "indent",
                ]),
            };
        });
    }, [formValues]);

    // сворачивание сообщения об ошибке
    useEffect(() => {
        responseMes &&
            setTimeout(() => {
                setResponseMes("");
                formIsValid && navigate(-1);
            }, 1500);
    }, [responseMes, formIsValid, navigate]);
    return (
        <form onSubmit={(e) => handleSubmit(e)} className={s.editForm}>
            <TextField
                type="text"
                label="имя"
                fieldId="name"
                maxLength={40}
                error={errors.name}
                formValue={formValues.name}
                errorsHidden={errorsHidden}
                setFormValues={setFormValues}
                // setErrorsHidden={setErrorsHidden}
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
                // setErrorsHidden={setErrorsHidden}
            />
            <CatField
                label="категория"
                errorsHidden={errorsHidden}
                setFormValues={setFormValues}
                error={errors.category?.message}
                catValue={formValues.category}
                // setErrorsHidden={setErrorsHidden}
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
