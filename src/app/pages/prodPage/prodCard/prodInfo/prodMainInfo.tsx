import * as React from "react";
import s from "../prodCard.module.css";
import { IProdMainInfo } from "../../../../../types/types";

const ProdMainInfo = ({
    place,
    category,
    type,
}: IProdMainInfo): JSX.Element => {
    return (
        <ul className={s.mainInfoList}>
            <li className={s.mainInfoItem}>{place}</li>
            <li className={s.mainInfoItem}>{category}</li>
            <li className={s.mainInfoItem}>{type}</li>
        </ul>
    );
};

export default ProdMainInfo;
