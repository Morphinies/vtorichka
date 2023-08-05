import * as React from "react";
import s from "../prodCard.module.css";
import { IProdMainInfo } from "../../../../../types/types";

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
