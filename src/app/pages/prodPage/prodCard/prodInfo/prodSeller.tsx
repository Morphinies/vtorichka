import * as React from "react";
import s from "../prodCard.module.css";
import { plug } from "../../../../img/pictures";
import { Iseller } from "../../../../../types/types";

const ProdSeller = ({ seller }: { seller: Iseller }): JSX.Element => {
    const toSeller = (seller: Iseller) => {
        console.log(seller);
    };

    return (
        <div className={s.seller}>
            <button
                onClick={() => toSeller(seller)}
                className={s.sellerAvatarWrap}
            >
                <img
                    alt={seller.name}
                    title={seller.name}
                    className={s.sellerAvatar}
                    src={seller.avatar || plug}
                />
            </button>
            <p className={s.sellerName}>{seller.name}</p>
        </div>
    );
};

export default ProdSeller;
