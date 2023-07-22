import * as React from "react";
import s from "./search.module.css";
import { IDropDownList } from "../../../../types/types";
import { Link, useSearchParams } from "react-router-dom";

const DropDownList = ({
  selectedList,
  textSearch,
  setTextSearch,
}: IDropDownList): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const errorMessage: string = "по вашему запросу товаров не найдено :/";

  const showAllResults = () => {
    searchParams.set("name", textSearch);
    setSearchParams(textSearch);
    setTextSearch("");
  };

  return (
    <div className={s.selectedWrap}>
      <ul className={s.selectedList}>
        {/* товаров не найдено */}
        {textSearch && !selectedList.length && (
          <li className={s.selectedItem + " " + s.selectedItemDis}>
            {errorMessage}
          </li>
        )}
        {/* подходящие товары */}
        {textSearch && selectedList.length > 0 && (
          <>
            {selectedList.map((option) => (
              <Link
                key={option._id}
                className={s.selectedItem}
                to={`/${option._id}`}
              >
                {option.name}
              </Link>
            ))}
            <li
              key="allResults"
              className={s.selectedItem}
              onClick={() => showAllResults()}
            >
              Показать все результаты
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DropDownList;
