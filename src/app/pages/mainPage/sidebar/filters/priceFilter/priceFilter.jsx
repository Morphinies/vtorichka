import React from "react";
import InputPrice from "./inputPrice";
import BtnOpenFilter from "../btns/btnOpenFilter";

const PriceFilter = ({ isOpen, formData, openFilter, setFormData }) => {
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
