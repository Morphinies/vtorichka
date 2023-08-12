import * as React from "react";
import s from "../filters.module.css";
import v from "../../sidebar.module.css";
import { checked } from "../../../../../img/pictures";
import { ICheckBox } from "../../../../../../types/types";

const CheckBox = ({ tick, name, formData }: ICheckBox): JSX.Element => {
    const isActive = formData.type === name || !formData.type;
    return (
        <button
            className={s.filterLine}
            type="button"
            id={s.checkBoxContainer}
            onClick={() => tick(name)}
            // className={s.inputContainer + " " + s.checkBoxContainer}
        >
            <p className={v.btnDisplayCatText + " " + s.labelCheckBox}>
                {name}
            </p>
            <div className={s.checkBox}>
                <img
                    alt={name}
                    src={checked}
                    className={
                        s.imgCheckBox + " " + (isActive ? "" : s.imgHidden)
                    }
                />
            </div>
        </button>
    );
};

export default CheckBox;
