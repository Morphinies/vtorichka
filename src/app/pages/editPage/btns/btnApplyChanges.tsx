import * as React from "react";
import s from "../editor.module.css";

interface IBtnApplyChanges {
    name: string;
}
const BtnApplyChanges = ({ name }: IBtnApplyChanges): JSX.Element => {
    return <input type="submit" className={s.submit} value={name} />;
};

export default BtnApplyChanges;
