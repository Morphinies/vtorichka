import * as React from "react";
import { useState } from "react";
import s from "./filters.module.css";
import TypeFilter from "./typeFilter/typeFilter";
import PriceFilter from "./priceFilter/priceFilter";
import BtnsApplyFilters from "./btns/btnsApplyFilters";
import { IFilters } from "../../../../../types/types";

const Filters = ({
    formData,
    setFormData,
    clearFilters,
    applyFilters,
}: IFilters): JSX.Element => {
    const [openedFilter, setOpenedFilter] = useState<undefined | string>();

    // открыть/закрыть фильтр
    const openFilter = (item: string): void => {
        if (openedFilter === item) {
            setOpenedFilter(undefined);
        } else {
            setOpenedFilter(item);
        }
    };

    return (
        <form className={s.filtersForm}>
            <PriceFilter
                formData={formData}
                openFilter={openFilter}
                setFormData={setFormData}
                isOpen={openedFilter === "цена"}
            />
            <TypeFilter
                formData={formData}
                openFilter={openFilter}
                setFormData={setFormData}
                isOpen={openedFilter === "тип"}
            />
            <BtnsApplyFilters
                applyFilters={applyFilters}
                clearFilters={clearFilters}
            />
        </form>
    );
};

export default Filters;
