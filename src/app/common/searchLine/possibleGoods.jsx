import React from "react";
import { Link } from "react-router-dom";
import s from "./searchLine.module.css";

const PossibleGoods = ({
  selected,
  handling,
  allResults,
  textSearch,
  showAllResults,
}) => {
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
            <Link
              key={option.id}
              className={s.selectedItem}
              to={`/products/${option.id}`}
            >
              {option.name}
            </Link>
          ))}
        {/* Показать все результаты поиска */}
        {allResults && (
          <li
            key="allResults"
            className={s.selectedItem}
            onClick={() => showAllResults()}
          >
            Показать все результаты
          </li>
        )}
      </ul>
    </div>
  );
};

export default PossibleGoods;
