import React from "react";
import s from "./searchLine.module.css";

const PossibleGoods = ({ selected, textSearch }) => {
  return (
    <div className={s.selectedWrap}>
      <ul className={s.selectedList}>
        {/* товаров не найдено */}
        {textSearch && !selected.length && (
          <li className={s.selectedItem + " " + s.selectedItemDis}>
            по вашему запросу товаров не найдено :/
          </li>
        )}
        {/* предлагаемые товары */}
        {selected.map((option) => (
          <li key={option.id} className={s.selectedItem}>
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PossibleGoods;
