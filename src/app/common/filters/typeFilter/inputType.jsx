import React from "react";
import BtnCheckBox from "./btnCheckBox";

const InputType = ({ choosedFilters, setChoosedFilters }) => {
  return (
    <>
      <BtnCheckBox
        label="б/у"
        name="checkBox1"
        choosedFilters={choosedFilters}
        setChoosedFilters={setChoosedFilters}
      />

      <BtnCheckBox
        label="новое"
        name="checkBox2"
        choosedFilters={choosedFilters}
        setChoosedFilters={setChoosedFilters}
      />
    </>
  );
};

export default InputType;
