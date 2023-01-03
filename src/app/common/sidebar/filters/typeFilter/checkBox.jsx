import React from "react";
import s from "../filters.module.css";
import v from "../../sidebar.module.css";
import checked from "../../../../img/checked.svg";

const CheckBox = ({ setFormData, formData, label, name, id }) => {
  //поиск индекса фильтра типов
  const indexOfFilter = () => {
    for (let form of formData) {
      if (form.name === name) {
        return formData.indexOf(form);
      }
    }
  };

  //поиск индекса определённого типа
  const indexOfFilterValue = () => {
    const filterValueArr = formData[indexOfFilter()].value;
    for (let value of filterValueArr) {
      if (value.name === id) {
        return filterValueArr.indexOf(value);
      }
    }
  };

  const mainArrForChange = formData[indexOfFilter()].value; // массив объектов с типами
  const objForChange = mainArrForChange[indexOfFilterValue()]; // объект для изменения в масиве с типами
  const indexObjForChange = mainArrForChange.indexOf(objForChange); // индекс объекта для изменения в масиве с типами

  const changedObj = () => {
    const changedObj = { ...objForChange, value: !objForChange.value }; // объект изменённый в масиве с типами
    const changedArr = [
      // массив объектов с типами изменённый
      ...mainArrForChange.slice(0, indexObjForChange),
      changedObj,
      ...mainArrForChange.slice(indexObjForChange + 1),
    ];

    return { ...formData[indexOfFilter()], value: [...changedArr] };
  };

  const choosedCheckBox =
    formData[indexOfFilter()].value[indexOfFilterValue()].value;

  const checkedNumb = (arr) => {
    let count = 2;
    for (let obj of arr) {
      if (!obj.value) return;
      for (let filter of obj.value) {
        !filter.value && count--;
      }
      return count;
    }
  };

  return (
    <div className={s.filterLine}>
      <button
        onClick={() => {
          checkedNumb(formData) === 1 && objForChange.value
            ? console.log()
            : setFormData((prevData) => {
                return [
                  ...prevData.slice(0, indexOfFilter()),
                  changedObj(),
                  ...prevData.slice(indexOfFilter() + 1),
                ];
              });
        }}
        type="button"
        id={s.checkBoxContainer}
        className={s.inputContainer + " " + s.checkBoxContainer}
      >
        <p
          className={v.btnDisplayCatText + " " + s.labelCheckBox}
          htmlFor="name"
        >
          {label}
        </p>
        <div className={s.checkBox}>
          <img
            className={
              s.imgCheckBox + " " + (choosedCheckBox ? "" : s.imgHidden)
            }
            alt=""
            src={checked}
          />
        </div>
      </button>
    </div>
  );
};

export default CheckBox;
