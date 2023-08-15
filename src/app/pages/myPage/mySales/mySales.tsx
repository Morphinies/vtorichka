import * as React from "react";
import { useState } from "react";
import s from "../myPage.module.css";
import ProdItem from "../../../common/prodList/item/prodItem";
import { Iprod } from "../../../../types/types";
import NoProdsMes from "../../../common/prodList/noProdsMes";

const MySales = () => {
    const [products] = useState<Iprod[]>([]);

    return products.length ? (
        <ul className={s.prodList}>
            {products.map((product) => (
                <ProdItem
                    prod={product}
                    key={product._id}
                    maxVal={product.photo.length * 100}
                />
            ))}
        </ul>
    ) : (
        <div className={s.noProdsWrap}>
            <NoProdsMes />
        </div>
    );
};

export default MySales;
