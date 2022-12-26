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

  // console.log(formData);

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

            if (!numb && formData[searchIndex(formData)]) {
              // !!!!!!!!!!!!!!!!
              setFormData((oldArray) => {
                console.log(oldArray);
                oldArray.splice(searchIndex(oldArray), 1);
                console.log(oldArray);
                return [...oldArray];
              });
            }

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
            // setFormData((prevState) => {
            //   prevState.map()
            //   return {
            //     ...prevState,
            //     [name]: numb.match(regExpNumber).join(""),
            //   };
            // });
          }}
        />
        <BtnClearFilter
          name={id}
          choosedFilters={formData}
          setFormData={setFormData}
        />
      </div>
    </div>
  );
};

export default InputPrice;
