import React from "react";
import CheckBox from "./checkBox";

const InputType = ({ formData, setFormData }) => {
  //
  const setType = (value) => {
    setFormData((prevState) => {
      return { ...prevState, type: value };
    });
  };

  const resetType = () => {
    delete formData.type;
    setFormData({ ...formData });
  };

  const tick = (value) => {
    if (formData.type) {
      formData.type !== value && resetType();
    } else {
      value === "новое" ? setType("б/у") : setType("новое");
    }
  };

  return (
    <>
      <CheckBox name="б/у" formData={formData} tick={tick} />
      <CheckBox name="новое" formData={formData} tick={tick} />
    </>
  );
};

export default InputType;
