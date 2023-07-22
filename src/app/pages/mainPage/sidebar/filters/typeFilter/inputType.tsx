import * as React from "react";
import CheckBox from "./checkBox";
import { IInputType, IfiltersForm } from "../../../../../../types/types";

const InputType = ({ formData, setFormData }: IInputType): JSX.Element => {
  //
  const setType = (value: string): void => {
    setFormData((prevState: IfiltersForm) => ({ ...prevState, type: value }));
  };

  const resetType = (): void => {
    delete formData.type;
    setFormData(() => ({ ...formData }));
  };

  const tick = (value: string): void => {
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
