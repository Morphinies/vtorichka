import * as React from "react";
import s from "../prodCard.module.css";

interface IProdMainInfo {
  place: string;
  category: string;
  type: string;
}
const ProdMainInfo = ({
  place,
  category,
  type,
}: IProdMainInfo): JSX.Element => {
  return (
    <div className={s.mainInfo}>
      <p className={s.prodPlace}>{place}</p>
      <p className={s.prodCategory}>{category}</p>
      <p className={s.prodType}>{type}</p>
    </div>
  );
};

export default ProdMainInfo;
