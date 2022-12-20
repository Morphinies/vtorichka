import React from "react";
import s from "../filters.module.css";
import v from "../../sidebar.module.css";
import checked from "../../../../img/checked.svg";

const CheckBox = ({ setChoosedFilters, choosedFilters, label, name }) => {
  return (
    <button
      onClick={() => {
        setChoosedFilters((prevState) => {
          return { ...prevState, [name]: !prevState[name] };
        });
      }}
      type="button"
      id={s.checkBoxContainer}
      className={s.inputContainer + " " + s.checkBoxContainer}
    >
      <p className={v.btnDisplayCatText + " " + s.labelCheckBox} htmlFor="name">
        {label}
      </p>
      <div className={s.checkBox}>
        <img
          className={
            s.imgCheckBox + " " + (choosedFilters[name] ? "" : s.imgHidden)
          }
          alt=""
          src={checked}
        />
      </div>
    </button>
  );
};

// const CheckBox = ({ setChoosedFilters, choosedFilters, label, name }) => {
//   return (
//     <button
//       onClick={() => {
//         setChoosedFilters((prevState) => {
//           return { ...prevState, [name]: !prevState[name] };
//         });
//       }}
//       type="button"
//       className={s.inputContainer + " " + s.inputCheckBox}
//     >
//       <label className={s.labelCheckBox} htmlFor="name">
//         {label}
//       </label>
//       <input
//         id={s.name}
//         type="checkbox"
//         onChange={() => {}}
//         className={s.checkBoxHidden}
//         checked={setChoosedFilters[name]}
//       />
//       <div className={s.checkBox}>
//         {choosedFilters[name] && <img alt="checked" src={checked} />}
//       </div>
//     </button>
//   );
// };

export default CheckBox;

// setCheckedNumb((prevState) => prevState - 1);
