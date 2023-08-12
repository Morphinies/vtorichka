import * as React from "react";
import Filters from "./filters";
import s from "../sidebar.module.css";
import { useEffect, useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";
import { IFiltersBlock, IfiltersForm } from "../../../../../types/types";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import { selectFiltersList } from "../../../../redux/slices/filtersListSlice";

const FiltersBlock = ({
    id,
    btnName,
    openedSideBar,
    changeOpenedSideBar,
}: IFiltersBlock): JSX.Element => {
    const filtersList = useAppSelector(selectFiltersList);
    const [searchParams, setSearchParams] = useSearchParams();
    const [formData, setFormData] = useState<IfiltersForm>({});
    const filtersIsOpened: boolean = openedSideBar === btnName;

    useEffect(() => {
        const updatedForm: IfiltersForm = {};
        filtersList.map((filter: string) => {
            if (searchParams.get(filter)) {
                updatedForm[filter as keyof IfiltersForm] =
                    searchParams.get(filter);
            }
            return "";
        });
        setFormData(updatedForm);
    }, [searchParams, filtersList]);

    const clearParams = (): void => {
        filtersList.map((item) => {
            searchParams.delete(item);
            return setSearchParams(searchParams);
        });
    };

    const applyFilters = (): void => {
        clearParams();
        for (let param in formData) {
            searchParams.set(param, formData[param as keyof IfiltersForm]);
            setSearchParams(searchParams);
        }
        changeOpenedSideBar("");
    };

    const clearFilters = (): void => {
        clearParams();
        setFormData({});
        changeOpenedSideBar("");
    };

    return (
        <div
            className={
                s.sidebarItem + " " + (filtersIsOpened ? s.catNavOpened : "")
            }
            id={s["sidebarItem" + id]}
        >
            <BtnDisplayBlock
                blockHidden={!filtersIsOpened}
                btnName={btnName + (Object.keys(formData).length ? " *" : "")}
                hideBlock={() =>
                    changeOpenedSideBar(filtersIsOpened ? "" : btnName)
                }
            />

            {openedSideBar === btnName && (
                <Filters
                    formData={formData}
                    setFormData={setFormData}
                    applyFilters={applyFilters}
                    clearFilters={clearFilters}
                />
            )}
        </div>
    );
};

export default FiltersBlock;
