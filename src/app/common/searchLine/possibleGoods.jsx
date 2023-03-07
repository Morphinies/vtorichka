import React from "react";
import s from "./searchLine.module.css";

const PossibleGoods = ({ selected, showProduct, handling, textSearch }) => {
  const errorMessage = "по вашему запросу товаров не найдено :/";

  return (
    <div className={s.selectedWrap}>
      <ul className={s.selectedList}>
        {/* товаров не найдено */}
        {!handling && textSearch && !selected.length && (
          <li className={s.selectedItem + " " + s.selectedItemDis}>
            {errorMessage}
          </li>
        )}
        {/* подходящие товары */}
        {!handling &&
          textSearch &&
          selected.length > 0 &&
          selected.map((option) => (
            <li
              key={option.id}
              className={s.selectedItem}
              onClick={() => showProduct(option)}
            >
              {option.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PossibleGoods;
