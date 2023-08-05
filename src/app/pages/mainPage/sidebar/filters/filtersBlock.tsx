import * as React from "react";
import Filters from "./filters";
import v from "../sidebar.module.css";
import { useEffect, useState } from "react";
import BtnDisplayBlock from "../btnDisplayBlock";
import { IFiltersBlock, IfiltersForm } from "../../../../../types/types";

const FiltersBlock = ({
    id,
    btnName,
    searchParams,
    openedSideBar,
    setSearchParams,
    changeOpenedSideBar,
}: IFiltersBlock): JSX.Element => {
    const filtersList: string[] = ["minPrice", "maxPrice", "type"];
    const [formData, setFormData] = useState<IfiltersForm>({});
    const [openedFilter, setOpenedFilter] = useState<undefined | string>();
    const filtersIsOpened: boolean = openedSideBar === btnName;

    useEffect(() => {
        const filtersList: string[] = ["minPrice", "maxPrice", "type"];
        const updatedForm: IfiltersForm = {};
        filtersList.map((filter: string) => {
            if (searchParams.get(filter)) {
                updatedForm[filter as keyof IfiltersForm] =
                    searchParams.get(filter);
            }
            return "";
        });
        setFormData(updatedForm);
    }, [searchParams]);

    // открыть/закрыть фильтр
    const openFilter = (item: string): void => {
        if (openedFilter === item) {
            setOpenedFilter(undefined);
        } else {
            setOpenedFilter(item);
        }
    };

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
        <nav
            className={
                v.categoriesNav + " " + (filtersIsOpened ? v.catNavOpened : "")
            }
            id={v["categoriesNav" + id]}
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
                    openFilter={openFilter}
                    setFormData={setFormData}
                    applyFilters={applyFilters}
                    clearFilters={clearFilters}
                    openedFilter={openedFilter}
                />
            )}
        </nav>
    );
};

export default FiltersBlock;
