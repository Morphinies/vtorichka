import React from "react";
import s from "../filters.module.css";
import BtnClearFilter from "../btns/btnClearFilter";

const InputPrice = ({ id, formData, setFormData, placeholder }) => {
  let regExpNumber = /\d/g;
  const regExpPrice = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const searchIndex = (array) => {
    for (let i in array) {
      if (array[i].id === id) return i;
    }
  };

  const clearFilter = () => {
    setFormData((oldArray) => {
      const cutItemIndex = Number(searchIndex(oldArray));
      return [
        ...oldArray.slice(0, cutItemIndex),
        ...oldArray.slice(cutItemIndex + 1),
      ];
    });
  };

  return (
    <div className={s.filterLine}>
      <div className={s.inputContainer}>
        <input
          type="text"
          value={
            (searchIndex(formData) &&
              regExpPrice(formData[searchIndex(formData)].value)) ||
            ""
          }
          maxLength={12}
          id={s.name}
          placeholder={placeholder}
          className={s.priceInput}
          onChange={(e) => {
            let numb = e.target.value;
            let addNumb = e.target.value.at(-1);

            !numb && formData[searchIndex(formData)] && clearFilter();

            numb &&
              addNumb.match(regExpNumber) &&
              setFormData((oldArray) => {
                if (!oldArray[searchIndex(oldArray)]) {
                  return [
                    ...oldArray,
                    {
                      id: id,
                      name: "цена",
                      value: numb.match(regExpNumber).join(""),
                    },
                  ];
                } else {
                  oldArray[searchIndex(oldArray)] = {
                    id: id,
                    name: "цена",
                    value: numb.match(regExpNumber).join(""),
                  };
                  return [...oldArray];
                }
              });
          }}
        />
        <BtnClearFilter id={id} formData={formData} clearFilter={clearFilter} />
      </div>
    </div>
  );
};

export default InputPrice;
