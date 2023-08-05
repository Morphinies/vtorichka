import * as React from "react";
import s from "../myPage.module.css";
import AddProdBtn from "./addProdBtn";
import { Iprod } from "../../../../types/types";
import { useLoaderData } from "react-router-dom";
import ProdItem from "../../../common/prodList/item/prodItem";

const MyProducts = (): JSX.Element => {
    const products = useLoaderData() as Iprod[];

    return (
        <>
            {products.length > 0 && (
                <ul className={s.prodList}>
                    {products.map((product) => (
                        <ProdItem
                            prod={product}
                            key={product._id}
                            maxVal={product.photo.length * 100}
                        />
                    ))}
                </ul>
            )}
            <AddProdBtn />
        </>
    );
};

export default MyProducts;
