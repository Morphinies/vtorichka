import * as React from "react";
import { useEffect } from "react";
import Loading from "../../common/loading/loading";
import Products from "../../common/prodList/products";
import BtnPrevPage from "../../common/btns/btnPrevPage";
import ErrorMessage from "../../common/errorMes/errorMessage";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { fetchFavoritesProd } from "../../redux/slices/favoritesProdSlice";
import { selectFavorites } from "../../redux/slices/favoritesSlice";
import { setValue } from "../../redux/slices/pageNumbSlice";

const Favorites = () => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector(selectFavorites);
    const favoritesProd = useAppSelector((state) => state.favoritesProd);
    const status = favoritesProd.status;

    useEffect(() => {
        dispatch(fetchFavoritesProd(favorites));
        dispatch(setValue(1));
    }, [dispatch, favorites]);

    return (
        <main className={"main"}>
            <BtnPrevPage name="избранное" />

            {status === "loading" && (
                <>
                    {favoritesProd.value.length ? (
                        <Products prodList={favoritesProd.value} />
                    ) : (
                        <Loading />
                    )}
                </>
            )}
            {status === "succeeded" && (
                <Products prodList={favoritesProd.value} />
            )}
            {status === "failed" && (
                <ErrorMessage message={favoritesProd.error} />
            )}
        </main>
    );
};

export default Favorites;
