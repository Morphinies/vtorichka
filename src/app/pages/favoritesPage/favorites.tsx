import * as React from "react";
import { useEffect } from "react";
import s from "./favorites.module.css";
import Loading from "../../common/loading/loading";
import Products from "../../common/prodList/products";
import ErrorMessage from "../../common/errorMes/errorMessage";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { fetchFavoritesProd } from "../../redux/slices/favoritesProdSlice";
import { selectFavorites } from "../../redux/slices/favoritesSlice";

const Favorites = () => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(selectFavorites);
    const favoritesProd = useAppSelector((state) => state.favoritesProd);

    useEffect(() => {
        dispatch(fetchFavoritesProd(favorites));
    }, [dispatch, favorites]);

    let content;

    switch (favoritesProd.status) {
        case "loading":
            content = (
                <>
                    {favoritesProd.value.length ? (
                        <Products prodList={favoritesProd.value} />
                    ) : (
                        <Loading />
                    )}
                </>
            );
            break;
        case "succeeded":
            content = <Products prodList={favoritesProd.value} />;
            break;
        case "failed":
            content = <ErrorMessage message={favoritesProd.error} />;
    }

    return (
        <main className={"main"}>
            <div className={s.pageTitle}>Избранное</div>
            {content}
        </main>
    );
};

export default Favorites;
