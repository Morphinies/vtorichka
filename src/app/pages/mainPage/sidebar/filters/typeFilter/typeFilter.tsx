import * as React from "react";
import InputType from "./inputType";
import BtnOpenFilter from "../btns/btnOpenFilter";
import { IfiltersForm } from "../../../../../../types/types";

interface ITypeFilter {
  isOpen: boolean;
  formData: IfiltersForm;
  openFilter: (v: string) => void;
  setFormData: (v: IfiltersForm) => IfiltersForm;
}
const TypeFilter = ({
  isOpen,
  formData,
  openFilter,
  setFormData,
}: ITypeFilter): JSX.Element => {
  return (
    <>
      <BtnOpenFilter name="тип" isOpen={isOpen} action={openFilter} />
      {isOpen && (
        <InputType formData={formData} setFormData={() => setFormData} />
      )}
    </>
  );
};

export default TypeFilter;
