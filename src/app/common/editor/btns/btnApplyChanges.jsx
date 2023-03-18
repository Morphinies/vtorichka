import React from "react";
import s from "../editor.module.css";

const BtnApplyChanges = ({ name }) => {
  return <input type="submit" className={s.submit} value={name} />;
};

export default BtnApplyChanges;
