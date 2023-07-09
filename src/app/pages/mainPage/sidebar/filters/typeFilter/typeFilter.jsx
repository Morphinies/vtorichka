import React from "react";
import InputType from "./inputType";
import BtnOpenFilter from "../btns/btnOpenFilter";

const TypeFilter = ({ isOpen, formData, openFilter, setFormData }) => {
  return (
    <>
      <BtnOpenFilter name="тип" isOpen={isOpen} action={openFilter} />
      {isOpen && <InputType formData={formData} setFormData={setFormData} />}
    </>
  );
};

export default TypeFilter;
