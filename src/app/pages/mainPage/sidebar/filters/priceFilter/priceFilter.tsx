import * as React from "react";
import InputPrice from "./inputPrice";
import BtnOpenFilter from "../btns/btnOpenFilter";
import { IfiltersForm } from "../../../../../../types/types";

interface IPriceFilter {
  isOpen: boolean;
  formData: IfiltersForm;
  openFilter: () => void;
  setFormData: (v: IfiltersForm) => void;
}
const PriceFilter = ({
  isOpen,
  formData,
  openFilter,
  setFormData,
}: IPriceFilter) => {
  return (
    <>
      <BtnOpenFilter name="цена" action={openFilter} isOpen={isOpen} />

      {isOpen && (
        <>
          <InputPrice
            name="от"
            value="minPrice"
            formData={formData}
            setFormData={setFormData}
          />
          <InputPrice
            name="до"
            value="maxPrice"
            formData={formData}
            setFormData={setFormData}
          />
        </>
      )}
    </>
  );
};

export default PriceFilter;
