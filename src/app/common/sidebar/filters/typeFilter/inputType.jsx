import React from "react";
import CheckBox from "./checkBox";

const InputType = ({ choosedFilters, setChoosedFilters }) => {
  return (
    <>
      <CheckBox
        label="б/у"
        name="checkBox1"
        choosedFilters={choosedFilters}
        setChoosedFilters={setChoosedFilters}
      />

      <CheckBox
        label="новое"
        name="checkBox2"
        choosedFilters={choosedFilters}
        setChoosedFilters={setChoosedFilters}
      />
    </>
  );
};

export default InputType;
