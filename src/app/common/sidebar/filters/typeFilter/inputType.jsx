import React from "react";
import CheckBox from "./checkBox";

const InputType = ({ formData, setFormData }) => {
  return (
    <>
      <CheckBox
        id="б/у"
        name="тип"
        label="б/у"
        formData={formData}
        setFormData={setFormData}
      />

      <CheckBox
        name="тип"
        id="новое"
        label="новое"
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
};

export default InputType;
