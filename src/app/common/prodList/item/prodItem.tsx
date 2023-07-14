import * as React from "react";
import { useState } from "react";
import ProdInfo from "./prodInfo";
import ProdPhoto from "./prodPhoto";
import s from "../products.module.css";
import { IProdItem } from "../../../../types/types";

const ProdItem = ({
  prod,
  maxVal,
  isFavorite,
  updateFavorites,
}: IProdItem): JSX.Element => {
  const [x, setX] = useState<number>(0);

  return (
    <li className={s.productCard}>
      <ProdPhoto x={x} prod={prod} setX={setX} maxVal={maxVal} />
      <ProdInfo
        prod={prod}
        isFavorite={isFavorite}
        updateFavorites={updateFavorites}
      />
    </li>
  );
};

export default ProdItem;
