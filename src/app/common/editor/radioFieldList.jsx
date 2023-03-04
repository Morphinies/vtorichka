import React from "react";
import s from "./editor.module.css";
import RadioFieldBtn from "./radioFieldBtn";

const RadioFieldList = ({
  catList,
  fieldId,
  openList,
  formValue,
  setOpenList,
}) => {
  return (
    <ul className={s.list} id={fieldId}>
      {catList &&
        openList &&
        catList.map((catItem) => (
          <li key={catItem.name}>
            <RadioFieldBtn
              name={catItem.name}
              openList={openList}
              formValue={formValue}
              setOpenList={setOpenList}
            />
          </li>
        ))}
    </ul>
  );
};

export default RadioFieldList;
